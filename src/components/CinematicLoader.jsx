import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export const CinematicLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('BOOTING QUANTUM TRAVEL DATABASE...');

  const statusMessages = [
    'BOOTING QUANTUM TRAVEL DATABASE...',
    'ESTABLISHING GEOLOCATION SAT-LINKS...',
    'SCANNING INTERCONTINENTAL FLIGHT CORRIDORS...',
    'SYNCING REAL-TIME METEOROLOGICAL FORECASTS...',
    'GENERATING AI TRIP PLANNING MODELS...',
    'DECRYPTING HOTEL CREDITS INDEXES...',
    'SYNAPSE SYNCHRONIZATION SUCCESSFUL!'
  ];

  useEffect(() => {
    // ----------------------------------------------------
    // 1. GSAP Counter Animation
    // ----------------------------------------------------
    const progressObj = { value: 0 };
    
    // Animate loading percentage 0 -> 100
    const progressTween = gsap.to(progressObj, {
      value: 100,
      duration: 3.2,
      ease: 'power1.inOut',
      onUpdate: () => {
        const roundedVal = Math.floor(progressObj.value);
        setProgress(roundedVal);
        
        // Cycle status messages based on progress thresholds
        const msgIdx = Math.min(
          statusMessages.length - 1,
          Math.floor((roundedVal / 100) * statusMessages.length)
        );
        setStatusText(statusMessages[msgIdx]);
      },
      onComplete: () => {
        // Run fadeout transitions before calling onComplete
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.08,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    });

    // ----------------------------------------------------
    // 2. Three.js Lightweight Hologram Globe
    // ----------------------------------------------------
    let renderer;
    let reqId;
    let handleResize;
    const gsapTweens = [];

    try {
      if (!canvasRef.current) return;
      
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      
      const scene = new THREE.Scene();
      
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 220;

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Create a points-based holographic globe
      const radius = 60;
      const segments = 48;
      const rings = 48;
      
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const colorTeal = new THREE.Color('#2dd4bf');
      const colorIndigo = new THREE.Color('#6366f1');

      for (let y = 0; y <= rings; y++) {
        const theta = (y * Math.PI) / rings;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);

        for (let x = 0; x <= segments; x++) {
          const phi = (x * 2 * Math.PI) / segments;
          const sinPhi = Math.sin(phi);
          const cosPhi = Math.cos(phi);

          const px = radius * sinTheta * cosPhi;
          const py = radius * cosTheta;
          const pz = radius * sinTheta * sinPhi;

          // Add positions
          positions.push(px, py, pz);

          // Mix colors for a dynamic gradient layout
          const mixedColor = colorTeal.clone().lerp(colorIndigo, Math.abs(cosTheta));
          colors.push(mixedColor.r, mixedColor.g, mixedColor.b);
        }
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 1.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        sizeAttenuation: true
      });

      const globe = new THREE.Points(geometry, material);
      scene.add(globe);

      // Add glowing atmosphere ring
      const atmosGeo = new THREE.RingGeometry(radius + 1, radius + 2, 64);
      const atmosMat = new THREE.MeshBasicMaterial({
        color: 0x2dd4bf,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.15
      });
      const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
      scene.add(atmosphere);

      // Create group for rotation
      const globeGroup = new THREE.Group();
      globeGroup.add(globe);
      globeGroup.add(atmosphere);
      scene.add(globeGroup);

      // Add intercontinental flight path arcs (Bezier curves)
      const flightGroup = new THREE.Group();
      scene.add(flightGroup);

      const connections = [
        { from: { lat: 40.7128, lon: -74.0060 }, to: { lat: 35.6762, lon: 139.6503 } }, // NYC to Tokyo
        { from: { lat: 48.8566, lon: 2.3522 }, to: { lat: 25.2048, lon: 55.2708 } },   // Paris to Dubai
        { from: { lat: -33.8688, lon: 151.2093 }, to: { lat: 19.0760, lon: 72.8777 } } // Sydney to Mumbai
      ];

      // Helper: Lat/Lon coordinates to Vector3
      const convertCoords = (lat, lon, r) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        return new THREE.Vector3(
          -(r * Math.sin(phi) * Math.sin(theta)),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.cos(theta)
        );
      };

      connections.forEach((conn) => {
        const p1 = convertCoords(conn.from.lat, conn.from.lon, radius);
        const p2 = convertCoords(conn.to.lat, conn.to.lon, radius);

        // Create quadratic Bezier midpoint arched outwards
        const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
        const dist = p1.distanceTo(p2);
        mid.normalize().multiplyScalar(radius + dist * 0.35); // Arched height proportional to distance

        const curve = new THREE.QuadraticBezierCurve3(p1, p2, mid);
        const points = curve.getPoints(32);
        const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
        
        const curveMat = new THREE.LineBasicMaterial({
          color: 0x2dd4bf,
          transparent: true,
          opacity: 0.2
        });
        const flightLine = new THREE.Line(curveGeo, curveMat);
        flightGroup.add(flightLine);

        // Add a animated dash following the flight path
        const dashGeo = new THREE.BufferGeometry();
        const dashMat = new THREE.PointsMaterial({
          color: 0xf472b6, // Pink pulse
          size: 3,
          transparent: true,
          opacity: 0.8
        });
        const dashPoints = [new THREE.Vector3()];
        dashGeo.setFromPoints(dashPoints);
        const dashMesh = new THREE.Points(dashGeo, dashMat);
        flightGroup.add(dashMesh);

        // Animate dash along the curve using GSAP
        const tween = gsap.to({}, {
          duration: 3,
          repeat: -1,
          ease: 'none',
          onUpdate: function() {
            const t = (this.progress() * 1.5) % 1;
            const pos = curve.getPointAt(t);
            dashGeo.setFromPoints([pos]);
          }
        });
        gsapTweens.push(tween);
      });

      globeGroup.add(flightGroup);

      // Animation loop
      const animate = () => {
        reqId = requestAnimationFrame(animate);
        
        // Rotate globe group
        globeGroup.rotation.y += 0.005;
        globeGroup.rotation.x += 0.002;
        
        if (renderer) {
          renderer.render(scene, camera);
        }
      };
      animate();

      // Resize handler
      handleResize = () => {
        if (!canvasRef.current || !renderer) return;
        const w = canvasRef.current.clientWidth;
        const h = canvasRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);
    } catch (e) {
      console.warn('Three.js initialization failed or WebGL not supported, bypassing holographic animation:', e);
    }

    return () => {
      if (reqId) cancelAnimationFrame(reqId);
      if (handleResize) window.removeEventListener('resize', handleResize);
      gsapTweens.forEach(t => t.kill());
      progressTween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative Matrix Grid Backdrop */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Cybernetic Scanlines decoration */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03] bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_50%,rgba(0,0,0,1)_50%)] [background-size:100%_4px]" />

      {/* Center 3D WebGL Canvas Frame */}
      <div className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] flex items-center justify-center shrink-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
        
        {/* Futuristic target lock graphics overlay */}
        <div className="absolute w-[85%] h-[85%] border border-teal-500/10 rounded-full animate-spin duration-20000 pointer-events-none" />
        <div className="absolute w-[95%] h-[95%] border border-dashed border-indigo-500/10 rounded-full animate-[spin_35s_linear_infinite_reverse] pointer-events-none" />
        
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-teal-400/40" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-teal-400/40" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-teal-400/40" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-teal-400/40" />
      </div>

      {/* Brand logo & telemetry stats */}
      <div className="mt-4 text-center px-4 relative z-10 flex flex-col gap-2 max-w-sm">
        <h2 className="font-display font-black text-2xl text-white tracking-widest flex items-center justify-center gap-2">
          TRAVELVERSE <span className="text-teal-400">AI</span>
        </h2>
        
        <span className="text-[9px] font-mono text-slate-450 uppercase font-black tracking-[0.25em] block leading-none">
          COGNITIVE GEOPOSITIONING CORE v5.0
        </span>
        
        {/* Running status messages */}
        <p className="text-[10px] font-mono text-teal-400 uppercase tracking-wider h-5 animate-pulse mt-4">
          {statusText}
        </p>

        {/* Numeric Telemetry Counter */}
        <div className="mt-2 flex items-baseline justify-center gap-1">
          <span className="font-mono text-3xl font-black text-white tracking-tighter">
            {progress.toString().padStart(3, '0')}
          </span>
          <span className="font-mono text-xs text-teal-400 font-bold uppercase tracking-widest">% COMPILED</span>
        </div>

        {/* Loading Bar */}
        <div className="w-full bg-slate-900 border border-teal-500/15 h-1.5 rounded-full overflow-hidden mt-1.5 relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
