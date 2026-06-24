import { spawn } from 'child_process';
import http from 'http';

// 1. Start Microsoft Edge headlessly with remote debugging enabled
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const edgeProcess = spawn(edgePath, [
  '--headless',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  'http://localhost:5174/roulette'
]);

edgeProcess.stderr.on('data', (data) => {
  // console.log(`[Edge Stderr]: ${data}`);
});

console.log('Started Microsoft Edge in debugging mode on port 9222...');

// Wait for browser to initialize
setTimeout(() => {
  // 2. Fetch the target pages list from remote debug HTTP service
  http.get('http://localhost:9222/json/list', (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      try {
        const pages = JSON.parse(data);
        const roulettePage = pages.find(p => p.url.includes('/roulette'));
        if (!roulettePage) {
          console.error('Could not find roulette page in debug target list!', pages);
          edgeProcess.kill();
          process.exit(1);
        }
        
        const wsUrl = roulettePage.webSocketDebuggerUrl;
        console.log(`Target WebSocket URL: ${wsUrl}`);
        
        // 3. Connect to the DevTools WebSocket using Node's global WebSocket class
        const ws = new WebSocket(wsUrl);
        let msgId = 1;
        
        ws.onopen = () => {
          console.log('Connected to DevTools WebSocket.');
          
          // Enable Runtime domain to receive console logs and exceptions
          ws.send(JSON.stringify({ id: msgId++, method: 'Runtime.enable' }));
          
          // Wait and then click the spin button in page context
          setTimeout(() => {
            console.log('Sending click to SPIN button...');
            ws.send(JSON.stringify({
              id: msgId++,
              method: 'Runtime.evaluate',
              params: {
                expression: `
                  const btns = Array.from(document.querySelectorAll('button'));
                  const spinBtn = btns.find(b => b.textContent.includes('SPIN'));
                  if (spinBtn) {
                    spinBtn.click();
                    'SPIN button clicked';
                  } else {
                    'SPIN button not found';
                  }
                `
              }
            }));
          }, 1500);
        };
        
        ws.onmessage = (event) => {
          const msg = JSON.parse(event.data);
          
          // Log console API messages (console.log, console.error, etc.)
          if (msg.method === 'Runtime.consoleAPICalled') {
            const type = msg.params.type;
            const args = msg.params.args.map(arg => arg.value || arg.description || JSON.stringify(arg)).join(' ');
            console.log(`[Browser Console ${type.toUpperCase()}]: ${args}`);
          }
          
          // Log uncaught exceptions
          if (msg.method === 'Runtime.exceptionThrown') {
            console.error('\n!!! BROWSER RUNTIME EXCEPTION DETECTED !!!');
            console.error(JSON.stringify(msg.params.exceptionDetails, null, 2));
            console.error('\n');
          }
          
          // Log results of evaluations
          if (msg.id && msg.result) {
            // console.log(`[Response ID ${msg.id}]:`, JSON.stringify(msg.result));
          }
        };
        
        ws.onerror = (err) => {
          console.error('WebSocket Error:', err);
        };
        
        ws.onclose = () => {
          console.log('WebSocket connection closed.');
        };
        
        // Let it run for 10 seconds (long enough for spin to complete and compile)
        setTimeout(() => {
          console.log('Test completed. Closing Edge...');
          ws.close();
          edgeProcess.kill();
          process.exit(0);
        }, 11000);
        
      } catch (err) {
        console.error('Failed to parse pages list:', err);
        edgeProcess.kill();
        process.exit(1);
      }
    });
  }).on('error', (err) => {
    console.error('Failed to query debug pages list:', err);
    edgeProcess.kill();
    process.exit(1);
  });
}, 3000);
