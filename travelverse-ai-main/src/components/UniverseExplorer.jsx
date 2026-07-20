import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { 
  X, Sparkles, MapPin, Heart, Award, Landmark, Activity, Compass, 
  ArrowRight, Radio, HelpCircle
} from 'lucide-react';

const PLANETS_DATA = [
  {
    id: 'continents',
    name: 'Continents Explorer',
    description: 'Explore the different continents, countries, and regional hotspots mapping global flight networks.',
    color: 0x00f0ff, // cyan
    orbitRadius: 32,
    size: 2.2,
    speed: 0.08,
    link: '/destinations',
    actionLabel: 'Launch Telemetry',
    icon: MapPin,
    badge: '98 Hotspots Active'
  },
  {
    id: 'wishlist',
    name: 'Wishlist Drives',
    description: 'Access your cached flights, lodges, packages, and dream destinations stored in local quantum buffers.',
    color: 0xff2a85, // pink/rose
    orbitRadius: 46,
    size: 1.8,
    speed: 0.06,
    link: '/wishlist',
    actionLabel: 'Decompress Wishes',
    icon: Heart,
    badge: 'Buffer Synced'
  },
  {
    id: 'achievements',
    name: 'Explorer Missions',
    description: 'Gamified travel ranks, state completion badges, carbon-offset milestones, and explorer stats.',
    color: 0xffd700, // gold
    orbitRadius: 60,
    size: 2.0,
    speed: 0.045,
    link: '/achievements',
    actionLabel: 'Load Mission Logs',
    icon: Award,
    badge: 'XP Level 4 Active'
  },
  {
    id: 'shrines',
    name: 'Spiritual Shrines',
    description: 'Explore India’s spiritual pilgrimage circuits, sacred routes, historic temples, and virtual aarti guides.',
    color: 0xff7700, // orange/amber
    orbitRadius: 74,
    size: 2.4,
    speed: 0.035,
    link: '/spiritual',
    actionLabel: 'Calibrate Pilgrimage',
    icon: Landmark,
    badge: '18 Sacred Shrines'
  },
  {
    id: 'future-trips',
    name: 'Future Itineraries',
    description: 'Create zero-fatigue high-fidelity itineraries and generate detailed daily route maps.',
    color: 0x00ff66, // green
    orbitRadius: 88,
    size: 2.1,
    speed: 0.028,
    link: '/planner',
    actionLabel: 'Simulate Route',
    icon: Sparkles,
    badge: 'AI Planner V2100'
  },
  {
    id: 'quiz',
    name: 'Personality Lab',
    description: 'Analyze your travel style, pace, and climate compatibility index to map your Travel DNA Genome.',
    color: 0xaa00ff, // indigo/purple
    orbitRadius: 102,
    size: 1.9,
    speed: 0.022,
    link: '/personality-lab',
    actionLabel: 'Calibrate Travel DNA',
    icon: Activity,
    badge: 'DNA Index: 92.5%'
  }
];

export const UniverseExplorer = () => {
  const mountRef = useRef(null);
  const navigate = useNavigate();
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [hoveredPlanetName, setHoveredPlanetName] = useState('');
  const [planetCoords, setPlanetCoords] = useState({});
  const [systemAlert, setSystemAlert] = useState('SYSTEM INIT: Calibrating space station telemetry...');

  // Store references for Three.js cleanup and interaction
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const planetMeshesRef = useRef([]);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x05070d, 0.0035);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 75, 130);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 4. Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 220;
    controls.minDistance = 25;
    controlsRef.current = controls;

    // 5. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 3.5, 400);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // 6. Stars background particles
    const starsCount = 1200;
    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      starsPositions[i * 3] = (Math.random() - 0.5) * 450;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 450;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 450;

      // Twinkle color variability
      const r = 0.8 + Math.random() * 0.2;
      const g = 0.9 + Math.random() * 0.1;
      const b = 1.0;
      starsColors[i * 3] = r;
      starsColors[i * 3 + 1] = g;
      starsColors[i * 3 + 2] = b;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 1.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true
    });

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // 7. Center sun core (TravelVerse Core)
    const coreGeometry = new THREE.SphereGeometry(6, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Dynamic core rings
    const ringGeo = new THREE.RingGeometry(7, 8.5, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
      wireframe: true
    });
    const coreRing = new THREE.Mesh(ringGeo, ringMat);
    coreRing.rotation.x = Math.PI / 2;
    scene.add(coreRing);

    // 8. Orbiting Planets
    const planetMeshes = [];
    planetMeshesRef.current = planetMeshes;

    PLANETS_DATA.forEach((data) => {
      // Orbit Path
      const orbitGeo = new THREE.RingGeometry(data.orbitRadius - 0.1, data.orbitRadius + 0.1, 96);
      const orbitMat = new THREE.MeshBasicMaterial({
        color: data.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.08
      });
      const orbitLine = new THREE.Mesh(orbitGeo, orbitMat);
      orbitLine.rotation.x = Math.PI / 2;
      scene.add(orbitLine);

      // Planet Mesh
      const planetGeo = new THREE.SphereGeometry(data.size, 32, 32);
      const planetMat = new THREE.MeshStandardMaterial({
        color: data.color,
        roughness: 0.35,
        metalness: 0.9,
        emissive: data.color,
        emissiveIntensity: 0.25
      });
      const planetMesh = new THREE.Mesh(planetGeo, planetMat);
      
      // Wireframe outer atmosphere ring
      const atmosGeo = new THREE.SphereGeometry(data.size * 1.35, 16, 16);
      const atmosMat = new THREE.MeshBasicMaterial({
        color: data.color,
        wireframe: true,
        transparent: true,
        opacity: 0.18
      });
      const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
      planetMesh.add(atmosMesh);

      planetMesh.userData = data;
      scene.add(planetMesh);
      planetMeshes.push(planetMesh);
    });

    // Raycaster for click events
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(planetMeshes);

      if (intersects.length > 0) {
        const clickedPlanet = intersects[0].object;
        const planetData = clickedPlanet.userData;
        setSelectedPlanet(planetData);
        setSystemAlert(`TARGET LOCKED: Zooming to ${planetData.name} sector...`);

        // Stop auto rotation and focus camera
        const targetPos = clickedPlanet.position.clone().normalize().multiplyScalar(data => clickedPlanet.userData.orbitRadius + 15);
        
        gsap.to(camera.position, {
          x: clickedPlanet.position.x + 8,
          y: clickedPlanet.position.y + 12,
          z: clickedPlanet.position.z + 18,
          duration: 1.25,
          ease: 'power3.out',
          onUpdate: () => {
            controls.target.copy(clickedPlanet.position);
            controls.update();
          }
        });
      }
    };

    const handleCanvasMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(planetMeshes);

      if (intersects.length > 0) {
        setHoveredPlanetName(intersects[0].object.userData.name);
        document.body.style.cursor = 'pointer';
      } else {
        setHoveredPlanetName('');
        document.body.style.cursor = 'default';
      }
    };

    renderer.domElement.addEventListener('click', handleCanvasClick);
    renderer.domElement.addEventListener('mousemove', handleCanvasMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    let animationFrameId;
    let animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Core rotation
      coreMesh.rotation.y = elapsedTime * 0.2;
      coreRing.rotation.z = -elapsedTime * 0.1;

      // Animate planets orbits
      planetMeshes.forEach((mesh) => {
        const data = mesh.userData;
        
        // Only update orbit angle if not zooming into this specific planet
        const angle = elapsedTime * data.speed;
        
        if (!selectedPlanet || selectedPlanet.id !== data.id) {
          mesh.position.x = Math.cos(angle) * data.orbitRadius;
          mesh.position.z = Math.sin(angle) * data.orbitRadius;
          mesh.position.y = Math.sin(angle * 2.5) * 3; // Waves movement
        }

        mesh.rotation.y = elapsedTime * 0.8;
      });

      // Calculate screen positions for HTML tags floating above
      const coords = {};
      const tempV = new THREE.Vector3();
      
      planetMeshes.forEach((mesh) => {
        mesh.getWorldPosition(tempV);
        tempV.project(camera);
        
        const x = (tempV.x * 0.5 + 0.5) * width;
        const y = (-tempV.y * 0.5 + 0.5) * height;
        
        // Hide if behind camera
        if (tempV.z <= 1) {
          coords[mesh.userData.id] = { x, y, visible: true };
        } else {
          coords[mesh.userData.id] = { x, y, visible: false };
        }
      });
      setPlanetCoords(coords);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Set interval to simulate telemetry updates
    const alertInterval = setInterval(() => {
      const logs = [
        'ATMOSPHERE: Cosmic solar winds are currently stable.',
        'SENSORS: Tracking high curiosity signals near Shrines planet.',
        'NAV: Star trails mapped for quantum routing.',
        'CORE: Synapse core processing traveler genomics...',
        'GRID: Energy matrices balanced at 99.8% capacity.'
      ];
      setSystemAlert(`SYSTEM MONITOR: ${logs[Math.floor(Math.random() * logs.length)]}`);
    }, 8000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(alertInterval);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('click', handleCanvasClick);
        renderer.domElement.removeEventListener('mousemove', handleCanvasMouseMove);
      }
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
      renderer.dispose();
    };
  }, [selectedPlanet]);

  const handleResetCamera = () => {
    setSelectedPlanet(null);
    setSystemAlert('ORBIT RESET: Calibrating global system camera angle...');
    
    if (cameraRef.current && controlsRef.current) {
      gsap.to(cameraRef.current.position, {
        x: 0,
        y: 75,
        z: 130,
        duration: 1.25,
        ease: 'power2.out',
        onUpdate: () => {
          controlsRef.current.target.set(0, 0, 0);
          controlsRef.current.update();
        }
      });
    }
  };

  return (
    <div className="w-full h-[620px] rounded-3xl overflow-hidden bg-slate-950 border border-white/10 relative text-white flex flex-col justify-between p-5">
      {/* Space grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20 z-0" />
      
      {/* 1. Interactive HUD Header */}
      <div className="w-full flex justify-between items-center z-10 font-mono text-[9px] border-b border-white/5 pb-3">
        <div className="flex items-center gap-3">
          <Radio className="text-teal-400 animate-pulse" size={13} />
          <div>
            <span className="text-slate-500 font-black block">STATION DECK SYSTEM</span>
            <span className="text-teal-300 font-bold block">{systemAlert}</span>
          </div>
        </div>
        
        {selectedPlanet && (
          <button
            onClick={handleResetCamera}
            className="px-3 py-1.5 bg-slate-900 border border-white/10 text-teal-400 hover:text-white rounded-lg flex items-center gap-1 transition-all cursor-pointer"
          >
            <Compass size={11} className="animate-spin duration-3000" />
            RESET ORBIT CAM
          </button>
        )}
      </div>

      {/* Three.js Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing" />

      {/* 2. Floating HTML Label tags */}
      <div className="absolute inset-0 pointer-events-none z-10 select-none">
        {PLANETS_DATA.map((planet) => {
          const coord = planetCoords[planet.id];
          if (!coord || !coord.visible) return null;
          
          return (
            <div
              key={planet.id}
              style={{
                left: `${coord.x}px`,
                top: `${coord.y - 25}px`,
                transform: 'translate(-50%, -50%)'
              }}
              className="absolute pointer-events-none bg-slate-950/80 border rounded-lg px-2 py-1 text-[8px] font-mono font-bold flex items-center gap-1 shadow-lg transition-all"
              style={{
                position: 'absolute',
                left: coord.x,
                top: coord.y - 25,
                transform: 'translate(-50%, -50%)',
                borderColor: `rgba(${planet.color >> 16 & 255}, ${planet.color >> 8 & 255}, ${planet.color & 255}, 0.5)`,
                color: `rgba(${planet.color >> 16 & 255}, ${planet.color >> 8 & 255}, ${planet.color & 255}, 1)`,
                backgroundColor: 'rgba(5, 7, 13, 0.85)',
                backdropFilter: 'blur(4px)'
              }}
            >
              <div 
                className="w-1.5 h-1.5 rounded-full animate-ping"
                style={{ backgroundColor: `rgba(${planet.color >> 16 & 255}, ${planet.color >> 8 & 255}, ${planet.color & 255}, 1)` }}
              />
              {planet.name.toUpperCase()}
            </div>
          );
        })}
      </div>

      {/* 3. Selected Planet Details Sidebar panel */}
      {selectedPlanet && (
        <div className="absolute top-16 bottom-5 right-5 w-80 p-5 rounded-2xl glass-neo border border-white/10 text-slate-200 shadow-2xl flex flex-col justify-between text-left animate-in fade-in slide-in-from-right-5 z-20 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest font-mono">Planet Vector Active</span>
                <h4 className="font-display font-extrabold text-lg text-white mt-1 flex items-center gap-2">
                  <selectedPlanet.icon 
                    size={18} 
                    style={{ color: `rgb(${selectedPlanet.color >> 16 & 255}, ${selectedPlanet.color >> 8 & 255}, ${selectedPlanet.color & 255})` }} 
                  />
                  {selectedPlanet.name}
                </h4>
              </div>
              <button 
                onClick={handleResetCamera}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            <div 
              className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold border inline-block w-max"
              style={{
                borderColor: `rgba(${selectedPlanet.color >> 16 & 255}, ${selectedPlanet.color >> 8 & 255}, ${selectedPlanet.color & 255}, 0.25)`,
                color: `rgb(${selectedPlanet.color >> 16 & 255}, ${selectedPlanet.color >> 8 & 255}, ${selectedPlanet.color & 255})`,
                backgroundColor: `rgba(${selectedPlanet.color >> 16 & 255}, ${selectedPlanet.color >> 8 & 255}, ${selectedPlanet.color & 255}, 0.08)`
              }}
            >
              {selectedPlanet.badge}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-semibold">
              {selectedPlanet.description}
            </p>

            <div className="p-3 bg-slate-900/50 rounded-xl border border-white/5 font-mono text-[9px] text-slate-400 flex flex-col gap-1.5">
              <div className="flex justify-between">
                <span>SECTOR COORD:</span>
                <span className="text-white font-bold">{selectedPlanet.orbitRadius}R, {Math.round(selectedPlanet.speed * 1000)}V</span>
              </div>
              <div className="flex justify-between">
                <span>ATMOSPHERE:</span>
                <span className="text-emerald-400 font-bold">STABLE</span>
              </div>
              <div className="flex justify-between">
                <span>LATENCY INDEX:</span>
                <span className="text-white font-bold">12ms (FAST)</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate(selectedPlanet.link)}
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-1.5 cursor-pointer mt-6"
          >
            <span>{selectedPlanet.actionLabel}</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}

      {/* 4. Controls guide overlay */}
      {!selectedPlanet && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] text-slate-500 uppercase tracking-widest font-bold pointer-events-none flex items-center gap-1.5 select-none opacity-60">
          <Compass size={11} className="animate-spin duration-3000" /> Click or drag on system grid • Tap planets to inspect details
        </div>
      )}
    </div>
  );
};
