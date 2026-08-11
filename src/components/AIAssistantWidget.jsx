import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Send, Sparkles, X, Mic, Volume2, ShieldAlert, BadgeInfo, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { logger } from '../utils/logger';

const SUGGESTIONS = [
  { label: '🛂 Visa Support', query: 'Show me visa guidelines for Indian passports' },
  { label: '🚨 SOS Emergency', query: 'Show emergency support contacts and helpline numbers' },
  { label: '💼 Packing List', query: 'What packing advice do you have for winter treks?' },
  { label: '💰 Budget Analysis', query: 'Perform budget analysis for a 5-day Delhi tour' },
  { label: '🏨 Hotel Finder', query: 'Recommend premium hotels in Jaipur and Kyoto' }
];

export const AIAssistantWidget = () => {
  const navigate = useNavigate();
  const { showToast: appShowToast } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Neural linkage established. I am TravelVerse AI Companion. Ask me about visa requirements, emergency SOS protocols, packing checklists, or budget projections. I can also listen to voice directives.',
      time: '0.0ms'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Voice mode Speech Recognition handler
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('Speech recognition not supported in this browser. Please use Chrome.', 'error');
      return;
    }

    const rec = new SpeechRecognition();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onstart = () => {
      setIsListening(true);
      showToast('Listening to voice input...', 'info');
    };

    rec.onend = () => {
      setIsListening(false);
    };

    rec.onerror = () => {
      setIsListening(false);
      showToast('Speech capture failed.', 'error');
    };

    rec.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputVal(transcript);
      handleSend(transcript);
    };

    rec.start();
  };

  // Helper to show toasts (since we do not want to crash if context isn't fully loaded)
  const showToast = (msg, type = 'info') => {
    if (appShowToast) {
      appShowToast(msg, type === 'error' ? 'error' : 'success');
    } else {
      logger.info(`[AI Companion] ${type.toUpperCase()}: ${msg}`);
    }
  };

  // ChatGPT-style Streaming Typewriter Response simulation
  const triggerStreamingResponse = (fullText) => {
    const messageId = `ai-stream-${Date.now()}`;
    
    // Add empty message container to chat thread
    setMessages(prev => [
      ...prev,
      {
        id: messageId,
        sender: 'ai',
        text: '',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    let index = 0;
    let currentText = '';
    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText.charAt(index);
        setMessages(prev => 
          prev.map(m => m.id === messageId ? { ...m, text: currentText } : m)
        );
        index += 3; // stream 3 characters at a time for natural speed
      } else {
        clearInterval(interval);
        setMessages(prev => 
          prev.map(m => m.id === messageId ? { ...m, text: fullText } : m)
        );
      }
    }, 15);
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    // User Message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // AI Core Router responses
    setTimeout(() => {
      setIsTyping(false);
      const query = text.toLowerCase();
      let responseText;

      if (query.includes('visa') || query.includes('passport') || query.includes('entry')) {
        responseText = '🛂 Visa & Passport Intelligence:\n• Indian Passport: 60+ countries offer visa-free or eVisa transits (e.g. Thailand, Vietnam, Malaysia).\n• Europe (Schengen): Requires tourist visa filings. Recommend starting applications 3 months prior with 6-month bank logs.\n• USA / UK: Require physical embassy appointments. Pre-book slots early to avoid holiday gridlocks.';
      } else if (query.includes('emergency') || query.includes('sos') || query.includes('police') || query.includes('help') || query.includes('hospital')) {
        responseText = '🚨 SOS National Emergency Helpdesk:\n• General Services: Dial 112 (India) for urgent police, fire, or ambulance support.\n• Tourist Helpline: 1800-11-1363 (24/7 Multi-lingual advisory support).\n• OCI / NRI Support: Contact nearest Indian consulate or port authority desks immediately for passport issues.';
      } else if (query.includes('budget') || query.includes('cost') || query.includes('pricing') || query.includes('money')) {
        responseText = '💰 Travel Budget Optimization:\n• Flights & Lodging: Pre-book 45 days early to save up to 35% on fares.\n• Domestic Satvik food is highly economical (₹300-₹500 daily average).\n• Use Vande Bharat AC rail instead of inner regional flights to trim routing costs.';
      } else if (query.includes('pack') || query.includes('bag') || query.includes('clothing') || query.includes('gear')) {
        responseText = '💼 Travel Packing Checklist:\n• Required Documents: Original Passport, Visa QR passes, and OCI cards.\n• Shrines & Temples: Head scarves, bandanas, and easy slip-on shoes.\n• Adventure loops: Lightweight windproof jackets, sanitizers, and water flasks.';
      } else if (query.includes('hotel') || query.includes('stay') || query.includes('lodging') || query.includes('resort')) {
        responseText = '🏨 Hotel & Lodge Recommendations:\n• Varanasi: Taj Nadesar Palace or BrijRama Heritage on the Ganges.\n• Jaipur: Rambagh Palace or The Oberoi Rajvilas.\n• Kyoto (Japan): Aman Kyoto or Sowaka Ryokan luxury retreats.';
      } else if (query.includes('restaurant') || query.includes('food') || query.includes('dining') || query.includes('eat')) {
        responseText = '🍛 Satvik & Gourmet Culinary Guide:\n• Mumbai: Gajalee (coastal spices), Swati Snacks (clean vegetarian).\n• Delhi: Karim\'s (heritage Mughlai), Saravana Bhavan (South Indian veg).\n• Japan: Look for the green dot label or use the HappyCow app to locate vegan ramen.';
      } else if (query.includes('edit') || query.includes('change') || query.includes('modify')) {
        responseText = '🔄 Trip Modification Guidelines:\n• Itineraries: Go to the "AI Planner" page, load your saved dossier, and click "Edit timeline nodes".\n• Flights/Hotels: Cancellations can be managed under the booking ledger portal. Refund matrices apply depending on carrier policies.';
      } else {
        responseText = `Index match complete for "${text}". I have logged your query to the Travel OS companion cache. Would you like me to map flights, recommend local lodges, or compile a custom itinerary path?`;
      }

      triggerStreamingResponse(responseText);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] text-left">
      
      {/* 1. Floating Orb Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="orb"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-slate-950 border border-teal-500/40 flex items-center justify-center text-teal-400 shadow-[0_0_25px_rgba(45,212,191,0.35)] cursor-pointer relative"
          >
            <span className="absolute inset-0 rounded-full border border-teal-500/25 scale-125 animate-ping duration-2000" />
            <Sparkles size={20} className="animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Glassmorphic Chat Panel Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ scale: 0.95, opacity: 0, y: 35, x: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 35, x: 15 }}
            className="w-[340px] sm:w-[380px] h-[500px] rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-teal-500/20 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-950 border-b border-white/5 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse relative">
                  <span className="absolute inset-0 rounded-full bg-teal-400/50 scale-200 animate-ping" />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu size={12} className="text-teal-400" /> Travel Companion AI
                  </h4>
                  <span className="text-[8px] text-slate-500 font-mono tracking-widest block uppercase">Telemetry Online</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {/* Quick action chips */}
            <div className="px-4 py-2 bg-slate-950/40 border-b border-white/5 flex gap-2 overflow-x-auto scrollbar-none whitespace-nowrap text-[9px] font-mono shrink-0">
              {[
                { label: '🛂 VISA', query: 'Show visa requirements' },
                { label: '🚨 SOS', query: 'Show emergency help contacts' },
                { label: '💰 BUDGETS', query: 'Show budget advice' },
                { label: '💼 PACKING', query: 'Show packing advice' },
                { label: '🔄 EDIT TRIP', query: 'How do I edit my trip?' }
              ].map(chip => (
                <button
                  key={chip.label}
                  onClick={() => handleSend(chip.query)}
                  className="px-2.5 py-1 bg-white/5 border border-white/5 text-slate-300 rounded-lg hover:border-teal-500/20 hover:text-teal-400 cursor-pointer"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin">
              {messages.map((m) => (
                <div 
                  key={m.id} 
                  className={`flex flex-col max-w-[85%] gap-1.5 ${m.sender === 'user' ? 'self-end items-end' : 'self-start'}`}
                >
                  <div className={`p-3 rounded-2xl text-xs leading-relaxed font-mono whitespace-pre-line
                    ${m.sender === 'user' 
                      ? 'bg-teal-500 text-slate-950 rounded-tr-none font-bold shadow-[0_0_12px_rgba(45,212,191,0.15)]' 
                      : 'bg-slate-900/60 border border-white/5 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[7.5px] text-slate-500 font-mono">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="self-start flex flex-col gap-1 max-w-[70%]">
                  <div className="p-3 bg-slate-900/60 border border-white/5 text-slate-400 rounded-2xl rounded-tl-none text-[10px] flex gap-1.5 items-center font-mono font-bold">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span>SYNAPSE ACTIVE</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions layout (only visible on initial state) */}
            {messages.length === 1 && (
              <div className="p-3 border-t border-white/5 shrink-0 bg-slate-950/20">
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block mb-2 font-bold">Suggested queries</span>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTIONS.map((sug) => (
                    <button
                      key={sug.label}
                      onClick={() => handleSend(sug.query)}
                      className="px-3 py-2 border border-white/5 hover:border-teal-500/20 bg-slate-950/40 rounded-xl text-[9.5px] font-mono text-slate-350 hover:text-teal-400 transition-colors text-left cursor-pointer flex justify-between items-center"
                    >
                      <span>{sug.label}</span>
                      <ArrowRight size={10} className="opacity-40" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form with Voice mode */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="p-3 bg-slate-950 border-t border-white/5 flex gap-2 items-center shrink-0"
            >
              <button
                type="button"
                onClick={startSpeechRecognition}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  isListening 
                    ? 'bg-rose-500/10 border-rose-500 text-rose-400 shadow-[0_0_12px_rgba(239,68,68,0.2)] animate-pulse' 
                    : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Mic size={14} />
              </button>
              
              <input
                type="text"
                placeholder="Ask Travel Companion..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
              />
              
              <button
                type="submit"
                className="p-2.5 bg-teal-500 hover:bg-teal-650 text-slate-950 font-bold rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
