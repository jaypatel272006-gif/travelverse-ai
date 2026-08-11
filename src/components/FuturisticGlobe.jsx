import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

// Country Coordinate Mapping
const COUNTRIES_LIST = [
  { name: 'India', code: 'IN', lat: 20.5937, lon: 78.9629 },
  { name: 'Switzerland', code: 'CH', lat: 46.8182, lon: 8.2275 },
  { name: 'Japan', code: 'JP', lat: 36.2048, lon: 138.2529 },
  { name: 'France', code: 'FR', lat: 46.2276, lon: 2.2137 },
  { name: 'USA', code: 'US', lat: 37.0902, lon: -95.7129 },
  { name: 'Australia', code: 'AU', lat: -25.2744, lon: 133.7751 },
  { name: 'Brazil', code: 'BR', lat: -14.2350, lon: -51.9253 },
  { name: 'UAE', code: 'AE', lat: 23.4241, lon: 53.8478 }
];

export const FuturisticGlobe = ({ selectedCountry, viewMode = 'hologram', onSelectCountry }) => {
  const mountRef = useRef(null);
  const [loadingTexture, setLoadingTexture] = useState(false);

  // References to keep ThreeJS resources alive across render cycles
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const globeMeshRef = useRef(null);
  const dotGlobeRef = useRef(null);
  const activeHighlightGroupRef = useRef(null);
  const beaconsGroupRef = useRef(null);
  const satelliteMaterialRef = useRef(null);
  const hologramMaterialRef = useRef(null);

  const radius = 50;

  const convertLatLonToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -(radius * Math.sin(phi) * Math.sin(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.cos(theta)
    );
  };

  // 1. Scene Setup & Initialization (runs once on mount)
  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 600;
    const height = mountRef.current.clientHeight || 500;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 80, 200);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 90;
    controls.maxDistance = 300;
    controls.autoRotateSpeed = 0.5;
    controlsRef.current = controls;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(50, 30, 50);
    scene.add(dirLight);

    // Textures
    setLoadingTexture(true);
    const textureLoader = new THREE.TextureLoader();
    const dayTexture = textureLoader.load(
      'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
      () => setLoadingTexture(false),
      undefined,
      () => setLoadingTexture(false)
    );

    const satelliteMaterial = new THREE.MeshPhongMaterial({
      map: dayTexture,
      shininess: 15,
      specular: new THREE.Color('grey')
    });
    satelliteMaterialRef.current = satelliteMaterial;

    const hologramMaterial = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    hologramMaterialRef.current = hologramMaterial;

    const isMobile = window.innerWidth < 768;
    const globeSegments = isMobile ? 32 : 64;
    const dotsCount = isMobile ? 650 : 1800;
    const weatherCount = isMobile ? 3 : 8;

    // Globe Mesh
    const globeGeometry = new THREE.SphereGeometry(radius, globeSegments, globeSegments);
    const globeMesh = new THREE.Mesh(globeGeometry, hologramMaterial);
    scene.add(globeMesh);
    globeMeshRef.current = globeMesh;

    // Dot Globe continents
    const dotGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(dotsCount * 3);
    const landColor = new THREE.Color(0x2dd4bf);
    const colors = new Float32Array(dotsCount * 3);
    for (let i = 0; i < dotsCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      colors[i * 3] = landColor.r;
      colors[i * 3 + 1] = landColor.g;
      colors[i * 3 + 2] = landColor.b;
    }
    dotGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    dotGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const dotMaterial = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true
    });
    const dotGlobe = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dotGlobe);
    dotGlobeRef.current = dotGlobe;

    // Beacons
    const beaconsGroup = new THREE.Group();
    scene.add(beaconsGroup);
    beaconsGroupRef.current = beaconsGroup;

    const countryBeacons = [];
    COUNTRIES_LIST.forEach((c) => {
      const pos = convertLatLonToVector3(c.lat, c.lon, radius);
      const markerGeo = new THREE.SphereGeometry(1.2, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: 0x2dd4bf,
        transparent: true,
        opacity: 0.9
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(pos);
      marker.userData = c;
      beaconsGroup.add(marker);
      countryBeacons.push(marker);

      const ringGeo = new THREE.RingGeometry(1.6, 2.4, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x2dd4bf,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(0, 0, 0);
      ring.userData = { isPulse: true };
      beaconsGroup.add(ring);
    });

    // Active Highlight Group
    const activeHighlightGroup = new THREE.Group();
    scene.add(activeHighlightGroup);
    activeHighlightGroupRef.current = activeHighlightGroup;

    // Weather Systems Overlay
    const weatherGroup = new THREE.Group();
    const weatherNodes = [];
    for (let i = 0; i < weatherCount; i++) {
      const stormGeo = new THREE.DodecahedronGeometry(1.8, 1);
      const stormMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.25,
        wireframe: true
      });
      const stormMesh = new THREE.Mesh(stormGeo, stormMat);
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = radius + 4;
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
    scene.add(weatherGroup);

    // Flight paths
    const flightGroup = new THREE.Group();
    const curves = [];
    const flightParticles = [];
    const hubPos = convertLatLonToVector3(20.5937, 78.9629, radius); // India center as hub
    COUNTRIES_LIST.forEach((pin) => {
      if (pin.name === 'India') return;
      const targetPos = convertLatLonToVector3(pin.lat, pin.lon, radius);
      const midPoint = new THREE.Vector3().addVectors(hubPos, targetPos).multiplyScalar(0.5);
      const dist = hubPos.distanceTo(targetPos);
      midPoint.normalize().multiplyScalar(radius + dist * 0.35);

      const curve = new THREE.QuadraticBezierCurve3(hubPos, midPoint, targetPos);
      curves.push(curve);

      const points = curve.getPoints(50);
      const pathGeo = new THREE.BufferGeometry().setFromPoints(points);
      const pathMat = new THREE.LineBasicMaterial({
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.25
      });
      const flightLine = new THREE.Line(pathGeo, pathMat);
      flightGroup.add(flightLine);

      const pGeo = new THREE.SphereGeometry(0.5, 8, 8);
      const pMat = new THREE.MeshBasicMaterial({ color: 0x2dd4bf });
      const particle = new THREE.Mesh(pGeo, pMat);
      particle.userData = { curve, progress: Math.random() };
      flightGroup.add(particle);
      flightParticles.push(particle);
    });
    scene.add(flightGroup);

    // Raycasting click
    const raycaster = new THREE.Raycaster();
    const mouseCoord = new THREE.Vector2();

    const handleCanvasClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseCoord.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseCoord.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseCoord, camera);
      const intersects = raycaster.intersectObjects(countryBeacons);

      if (intersects.length > 0) {
        const clickedC = intersects[0].object.userData;
        if (onSelectCountry) {
          onSelectCountry(clickedC.name);
        }
      }
    };

    renderer.domElement.addEventListener('click', handleCanvasClick);

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
    const startTime = Date.now();
    let animationFrameId;
    let animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedSeconds = (Date.now() - startTime) / 1000;

      // Rotate when no country is selected
      const isFocused = !!scene.userData.isFocused;
      if (!isFocused) {
        globeMesh.rotation.y = elapsedSeconds * 0.04;
        dotGlobe.rotation.y = elapsedSeconds * 0.04;
        beaconsGroup.rotation.y = elapsedSeconds * 0.04;
        activeHighlightGroup.rotation.y = elapsedSeconds * 0.04;
        flightGroup.rotation.y = elapsedSeconds * 0.04;
      } else {
        globeMesh.rotation.y = 0;
        dotGlobe.rotation.y = 0;
        beaconsGroup.rotation.y = 0;
        activeHighlightGroup.rotation.y = 0;
        flightGroup.rotation.y = 0;
      }

      // Live light sweep
      dirLight.position.x = Math.cos(elapsedSeconds * 0.1) * 150;
      dirLight.position.z = Math.sin(elapsedSeconds * 0.1) * 150;

      // Pulsing rings
      beaconsGroup.children.forEach(child => {
        if (child.userData.isPulse) {
          const scale = 1.0 + Math.sin(elapsedSeconds * 4) * 0.2;
          child.scale.set(scale, scale, 1);
          child.material.opacity = 0.6 - (scale - 0.8) * 0.5;
        }
      });

      // Pulsing glow ground rings
      activeHighlightGroup.children.forEach(child => {
        if (child.userData.isGlow) {
          const scale = 1.0 + Math.sin(elapsedSeconds * 5) * 0.15;
          child.scale.set(scale, scale, 1);
        }
      });

      // Flight particles
      flightParticles.forEach(p => {
        p.userData.progress += 0.0035;
        if (p.userData.progress > 1) p.userData.progress = 0;
        const pos = p.userData.curve.getPointAt(p.userData.progress);
        p.position.copy(pos);
      });

      // Weather systems
      weatherNodes.forEach(node => {
        node.position.applyAxisAngle(node.userData.axis, node.userData.speed * 0.015);
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('click', handleCanvasClick);
      }
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  // 2. React to dynamic View Mode changes (swaps materials smoothly)
  useEffect(() => {
    if (globeMeshRef.current && dotGlobeRef.current) {
      globeMeshRef.current.material = (viewMode === 'satellite' ? satelliteMaterialRef.current : hologramMaterialRef.current);
      dotGlobeRef.current.visible = (viewMode === 'hologram');
    }
  }, [viewMode]);

  // 3. React to dynamic Country Selection (animates camera and places lasers)
  useEffect(() => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const activeHighlightGroup = activeHighlightGroupRef.current;

    if (!scene || !camera || !controls || !activeHighlightGroup) return;

    // Reset focused state
    scene.userData.isFocused = !!selectedCountry;

    // Clear previous highlights
    while (activeHighlightGroup.children.length > 0) {
      const obj = activeHighlightGroup.children[0];
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
      activeHighlightGroup.remove(obj);
    }

    const match = COUNTRIES_LIST.find(c => c.name.toLowerCase() === selectedCountry?.toLowerCase());
    if (match) {
      const basePos = convertLatLonToVector3(match.lat, match.lon, radius);
      
      // Draw Laser Beam
      const beamGeo = new THREE.CylinderGeometry(0.1, 1.5, 20, 16, 1, true);
      beamGeo.translate(0, 10, 0);
      const beamMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.copy(basePos);
      beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), basePos.clone().normalize());
      activeHighlightGroup.add(beam);

      // Draw Ground Ring
      const glowRingGeo = new THREE.RingGeometry(2.0, 3.8, 32);
      const glowRingMat = new THREE.MeshBasicMaterial({
        color: 0x26c6da,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9
      });
      const glowRing = new THREE.Mesh(glowRingGeo, glowRingMat);
      glowRing.position.copy(convertLatLonToVector3(match.lat, match.lon, radius + 0.4));
      glowRing.lookAt(0, 0, 0);
      glowRing.userData = { isGlow: true };
      activeHighlightGroup.add(glowRing);

      // Camera pan transition using GSAP
      controls.autoRotate = false;
      const cameraTargetPos = convertLatLonToVector3(match.lat, match.lon, radius * 2.3);
      const lookTarget = convertLatLonToVector3(match.lat, match.lon, radius);

      gsap.to(camera.position, {
        x: cameraTargetPos.x,
        y: cameraTargetPos.y,
        z: cameraTargetPos.z,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => controls.update()
      });

      gsap.to(controls.target, {
        x: lookTarget.x,
        y: lookTarget.y,
        z: lookTarget.z,
        duration: 1.5,
        ease: 'power2.inOut'
      });
    } else {
      // Return camera to default zoom out
      gsap.to(camera.position, {
        x: 0,
        y: 80,
        z: 200,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => controls.update()
      });
      gsap.to(controls.target, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      });
      controls.autoRotate = true;
    }
  }, [selectedCountry]);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {loadingTexture && (
        <div className="absolute z-10 flex flex-col items-center gap-2 font-mono text-[9px] text-teal-400">
          <div className="w-6 h-6 rounded-full border border-teal-500 border-t-transparent animate-spin" />
          <span>DOWNLOADING ORBITAL TEXTURES...</span>
        </div>
      )}
      <div ref={mountRef} className="w-full h-full min-h-[460px] cursor-grab active:cursor-grabbing" />
    </div>
  );
};
