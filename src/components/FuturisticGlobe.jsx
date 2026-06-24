import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { useApp } from '../context/AppContext';
import { mockDestinations } from '../data/mockData';
import { MapPin, Plane, CloudSun, Compass, X, Calendar, Eye } from 'lucide-react';

const GLOBE_COORDS = [
  { name: 'Goa', lat: 15.2993, lon: 74.1240, destId: 'dest-goa' },
  { name: 'Jaipur', lat: 26.9124, lon: 75.7873, destId: 'dest-jaipur' },
  { name: 'Kerala', lat: 10.8505, lon: 76.2711, destId: 'dest-kerala' },
  { name: 'Kashmir', lat: 34.0837, lon: 74.7973, destId: 'dest-kashmir' },
  { name: 'Ladakh', lat: 34.1526, lon: 77.5771, destId: 'dest-ladakh' },
  { name: 'Agra', lat: 27.1767, lon: 78.0081, destId: 'dest-agra' },
  { name: 'Varanasi', lat: 25.3176, lon: 82.9739, destId: 'dest-varanasi' },
  { name: 'Mumbai', lat: 19.0760, lon: 72.8777, destId: 'dest-mumbai' },
  { name: 'Udaipur', lat: 24.5854, lon: 73.7125, destId: 'dest-udaipur' },
  { name: 'Delhi', lat: 28.7041, lon: 77.1025, destId: 'dest-delhi' },
  { name: 'Ziro Valley', lat: 27.6328, lon: 93.8378, destId: 'dest-ziro' },
  { name: 'Tawang', lat: 27.5861, lon: 91.8594, destId: 'dest-tawang' },
  { name: 'Spiti Valley', lat: 32.2461, lon: 78.0349, destId: 'dest-spiti' },
  { name: 'Gokarna', lat: 14.5479, lon: 74.3188, destId: 'dest-gokarna' },
  { name: 'Majuli', lat: 26.9602, lon: 94.2188, destId: 'dest-majuli' }
];

const DEPARTURE_HUBS = {
  'Delhi': { name: 'Delhi', lat: 28.7041, lon: 77.1025 },
  'Mumbai': { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
  'Surat': { name: 'Surat', lat: 21.1702, lon: 72.8311 },
  'Bengaluru': { name: 'Bengaluru', lat: 12.9716, lon: 77.5946 },
  'Chennai': { name: 'Chennai', lat: 13.0827, lon: 80.2707 }
};

export const FuturisticGlobe = ({ onSelectDestination }) => {
  const mountRef = useRef(null);
  const { departureHub } = useApp();
  const [activePin, setActivePin] = useState(null);
  const [hoveredPinName, setHoveredPinName] = useState('');

  const convertLatLonToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -(radius * Math.sin(phi) * Math.sin(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.cos(theta)
    );
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 220;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.minDistance = 120;
    controls.maxDistance = 350;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x2dd4bf, 1.8);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    const radius = 55;

    // 1. Procedural Holographic Sphere
    const globeGeometry = new THREE.SphereGeometry(radius, 40, 40);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x112240,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globeMesh);

    // 2. Procedural Glowing Dot continents
    const dotsCount = 2000;
    const dotGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(dotsCount * 3);
    const colorArray = new Float32Array(dotsCount * 3);
    const landColor = new THREE.Color(0x2dd4bf);
    
    for (let i = 0; i < dotsCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colorArray[i * 3] = landColor.r;
      colorArray[i * 3 + 1] = landColor.g;
      colorArray[i * 3 + 2] = landColor.b;
    }
    
    dotGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    dotGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const dotMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });
    
    const dotGlobe = new THREE.Points(dotGeometry, dotMaterial);
    globeMesh.add(dotGlobe);

    // 3. Pinned Travel Destinations
    const pinGeometry = new THREE.SphereGeometry(1.5, 16, 16);
    const pinsGroup = new THREE.Group();
    const pinObjects = [];

    GLOBE_COORDS.forEach((pin) => {
      const isHub = pin.name.toLowerCase() === departureHub.toLowerCase();
      const pinMat = new THREE.MeshBasicMaterial({
        color: isHub ? 0x38bdf8 : 0xf43f5e,
        transparent: true,
        opacity: 0.95
      });
      const pinMesh = new THREE.Mesh(pinGeometry, pinMat);
      const pos = convertLatLonToVector3(pin.lat, pin.lon, radius + 0.5);
      pinMesh.position.copy(pos);
      pinMesh.userData = pin;
      pinsGroup.add(pinMesh);
      pinObjects.push(pinMesh);

      // Pulsing glow rings around each pin
      const ringGeo = new THREE.RingGeometry(1.8, 2.2, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isHub ? 0x38bdf8 : 0xf43f5e,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos);
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
      ringMesh.userData = { isRing: true };
      pinsGroup.add(ringMesh);
    });
    globeMesh.add(pinsGroup);

    // 4. Dynamic Flight Paths (emitting from current active hub)
    const flightGroup = new THREE.Group();
    const activeHub = DEPARTURE_HUBS[departureHub] || DEPARTURE_HUBS['Delhi'];
    const startPoint = convertLatLonToVector3(activeHub.lat, activeHub.lon, radius);
    
    const curves = [];
    const flightParticles = [];

    GLOBE_COORDS.forEach((pin) => {
      if (pin.name.toLowerCase() === departureHub.toLowerCase()) return;

      const endPoint = convertLatLonToVector3(pin.lat, pin.lon, radius);
      const midPoint = new THREE.Vector3().addVectors(startPoint, endPoint).multiplyScalar(0.5);
      const dist = startPoint.distanceTo(endPoint);
      midPoint.normalize().multiplyScalar(radius + dist * 0.4); // Curved height

      const curve = new THREE.QuadraticBezierCurve3(startPoint, midPoint, endPoint);
      curves.push(curve);

      const points = curve.getPoints(50);
      const pathGeo = new THREE.BufferGeometry().setFromPoints(points);
      const pathMat = new THREE.LineBasicMaterial({
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.35
      });
      const flightLine = new THREE.Line(pathGeo, pathMat);
      flightGroup.add(flightLine);

      const particleGeo = new THREE.SphereGeometry(0.7, 8, 8);
      const particleMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const particle = new THREE.Mesh(particleGeo, particleMat);
      particle.userData = { curve, progress: Math.random() };
      flightGroup.add(particle);
      flightParticles.push(particle);
    });
    globeMesh.add(flightGroup);

    // 5. Weather Systems Overlay (Orbital storm clouds)
    const weatherGroup = new THREE.Group();
    const weatherCount = 8;
    const weatherNodes = [];
    for (let i = 0; i < weatherCount; i++) {
      const stormGeo = new THREE.DodecahedronGeometry(2, 1);
      const stormMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.35,
        wireframe: true
      });
      const stormMesh = new THREE.Mesh(stormGeo, stormMat);
      
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = radius + 6;
      
      stormMesh.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      stormMesh.userData = {
        speed: 0.08 + Math.random() * 0.1,
        axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize()
      };
      weatherGroup.add(stormMesh);
      weatherNodes.push(stormMesh);
    }
    globeMesh.add(weatherGroup);

    // Interaction Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(pinObjects);

      if (intersects.length > 0) {
        const clickedPin = intersects[0].object;
        const pinData = clickedPin.userData;
        
        const destObj = mockDestinations.find(d => d.id === pinData.destId);
        if (destObj) {
          setActivePin(destObj);
          if (onSelectDestination) {
            onSelectDestination(destObj);
          }
        }

        controls.autoRotate = false;
        const targetPos = clickedPin.position.clone().normalize().multiplyScalar(190);
        
        gsap.to(camera.position, {
          x: targetPos.x,
          y: targetPos.y,
          z: targetPos.z,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate: () => {
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
      const intersects = raycaster.intersectObjects(pinObjects);

      if (intersects.length > 0) {
        setHoveredPinName(intersects[0].object.userData.name);
        document.body.style.cursor = 'pointer';
      } else {
        setHoveredPinName('');
        document.body.style.cursor = 'default';
      }
    };

    renderer.domElement.addEventListener('click', handleCanvasClick);
    renderer.domElement.addEventListener('mousemove', handleCanvasMouseMove);

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Slow rotation
      globeMesh.rotation.y = elapsedTime * 0.02;

      // Day/Night Shadow light sweep
      dirLight.position.x = Math.cos(elapsedTime * 0.1) * 150;
      dirLight.position.z = Math.sin(elapsedTime * 0.1) * 150;

      // Animate rings
      pinsGroup.children.forEach((child) => {
        if (child.userData.isRing) {
          const scale = 1.0 + Math.sin(elapsedTime * 5) * 0.25;
          child.scale.set(scale, scale, 1);
          child.material.opacity = 0.5 - (scale - 0.75) * 0.5;
        }
      });

      // Animate flight paths
      flightParticles.forEach((part) => {
        part.userData.progress += 0.003;
        if (part.userData.progress > 1) {
          part.userData.progress = 0;
        }
        const pos = part.userData.curve.getPointAt(part.userData.progress);
        part.position.copy(pos);
      });

      // Rotate weather systems
      weatherNodes.forEach(node => {
        node.position.applyAxisAngle(node.userData.axis, node.userData.speed * 0.01);
      });

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
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
  }, [departureHub]);

  return (
    <div className="w-full h-full relative">
      <div ref={mountRef} className="w-full h-full min-h-[380px] cursor-grab active:cursor-grabbing" />

      {hoveredPinName && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-950/80 border border-teal-500/30 rounded-xl text-teal-400 font-bold text-xs uppercase tracking-widest pointer-events-none shadow-lg backdrop-blur-md">
          {hoveredPinName}
        </div>
      )}

      {activePin && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 p-5 rounded-2xl glass-neo border border-teal-500/20 text-slate-200 shadow-2xl flex flex-col gap-4 text-left animate-in fade-in slide-in-from-bottom-5 z-20">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest text-left">Selected Hub Node</span>
              <h4 className="font-display font-extrabold text-lg text-white mt-0.5 flex items-center gap-1.5 text-left">
                <MapPin size={15} className="text-rose-500" />
                {activePin.name}, {activePin.country}
              </h4>
            </div>
            <button 
              onClick={() => setActivePin(null)} 
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          <img 
            src={activePin.image} 
            alt={activePin.name} 
            className="w-full h-28 object-cover rounded-xl border border-white/5"
          />

          <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
            {activePin.description}
          </p>

          <div className="grid grid-cols-2 gap-3 text-[10px] bg-slate-950/40 p-2.5 rounded-xl border border-white/5 font-semibold">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 uppercase font-bold text-[8px]">Index Price</span>
              <span className="text-white font-mono">₹{activePin.price.toLocaleString('en-IN')} / traveller</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500 uppercase font-bold text-[8px]">Weather Advisory</span>
              <span className="text-teal-400 font-mono">Moderate / Active</span>
            </div>
          </div>

          <Link
            to={`/destination/${activePin.id}`}
            className="py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-center text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Eye size={13} />
            Inspect Coordinates
          </Link>
        </div>
      )}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-slate-500 uppercase tracking-widest font-bold pointer-events-none flex items-center gap-1.5 select-none opacity-60">
        <Compass size={11} className="animate-spin duration-3000" /> Drag to spin globe • Tap pins to inspect details
      </div>
    </div>
  );
};
