import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroToothSceneProps {
  className?: string;
}

/**
 * Procedurally generates a smooth anatomical 3D tooth sculpture with realistic crown cusps and dual roots.
 */
function createToothGeometry(): THREE.BufferGeometry {
  const geom = new THREE.CylinderGeometry(1.4, 0.9, 2.2, 36, 24);
  const pos = geom.attributes.position;
  const v = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const y = v.y;
    const angle = Math.atan2(v.z, v.x);
    const radius = Math.sqrt(v.x * v.x + v.z * v.z);

    if (y > 0.5) {
      // Create 4 distinct natural crown cusps (lobes)
      const cuspModifier = Math.cos(angle * 2) * 0.22 + Math.sin(angle * 4) * 0.08;
      // Central fossa dip
      const dip = Math.exp(-radius * 2.5) * 0.35;
      v.y += cuspModifier - dip;
      // Slight outward flare of the enamel crown
      v.x *= 1.0 + Math.max(0, y - 0.5) * 0.2;
      v.z *= 1.0 + Math.max(0, y - 0.5) * 0.2;
    } else if (y < -0.2) {
      // Cervical constriction towards roots
      const neckFactor = Math.abs(y);
      // Split into dual roots as we go further down
      const rootSplit = Math.max(0, -y - 0.4);
      if (v.x > 0) {
        v.x += rootSplit * 0.45;
      } else {
        v.x -= rootSplit * 0.45;
      }
      // Taper the roots
      v.x *= 1.0 - neckFactor * 0.35;
      v.z *= 1.0 - neckFactor * 0.45;
      // Gentle natural curvature
      v.z += Math.sin(y * 3) * 0.12;
    }

    pos.setXYZ(i, v.x, v.y, v.z);
  }

  geom.computeVertexNormals();
  return geom;
}

export const HeroToothScene: React.FC<HeroToothSceneProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check WebGL availability
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) {
      setHasWebGL(false);
      setIsLoading(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Three.js Scene Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Master Group for animations and pointer tilt
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Glossy Enamel Tooth Sculpture
    const toothGeom = createToothGeometry();
    const toothMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xffffff),
      roughness: 0.12,
      metalness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.22,
      ior: 1.54,
      reflectivity: 0.9,
      sheen: 0.6,
      sheenColor: new THREE.Color(0xd7f7f2),
      specularColor: new THREE.Color(0xffffff),
      wireframe: false,
    });
    const toothMesh = new THREE.Mesh(toothGeom, toothMaterial);
    toothMesh.scale.set(1.45, 1.45, 1.45);
    toothMesh.position.set(0, -0.2, 0);
    masterGroup.add(toothMesh);

    // 2. Translucent Orbital Ring 1 (Electric Teal)
    const ring1Geom = new THREE.TorusGeometry(2.35, 0.045, 24, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x00BFA6),
      roughness: 0.2,
      metalness: 0.85,
      transparent: true,
      opacity: 0.7,
      emissive: new THREE.Color(0x00BFA6),
      emissiveIntensity: 0.25,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    masterGroup.add(ring1);

    // 3. Translucent Orbital Ring 2 (Vivid Violet)
    const ring2Geom = new THREE.TorusGeometry(2.7, 0.035, 24, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x7957FF),
      roughness: 0.25,
      metalness: 0.8,
      transparent: true,
      opacity: 0.65,
      emissive: new THREE.Color(0x7957FF),
      emissiveIntensity: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 5;
    masterGroup.add(ring2);

    // 4. Accent Floating Ring 3 (Coral)
    const ring3Geom = new THREE.TorusGeometry(1.9, 0.025, 20, 80);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xFF786B),
      roughness: 0.3,
      metalness: 0.6,
      transparent: true,
      opacity: 0.55,
      emissive: new THREE.Color(0xFF786B),
      emissiveIntensity: 0.15,
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.x = Math.PI / 2.2;
    masterGroup.add(ring3);

    // 5. Floating Pearlescent & Crystal Sparkle Beads
    const particleGroup = new THREE.Group();
    const particleGeom = new THREE.IcosahedronGeometry(0.12, 1);
    const particleMatTeal = new THREE.MeshStandardMaterial({
      color: 0x00BFA6,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x00BFA6,
      emissiveIntensity: 0.3,
    });
    const particleMatViolet = new THREE.MeshStandardMaterial({
      color: 0x7957FF,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x7957FF,
      emissiveIntensity: 0.3,
    });
    const particleMatPearl = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.15,
      clearcoat: 1.0,
      transmission: 0.3,
    });

    const particles: { mesh: THREE.Mesh; orbitRadius: number; speed: number; angle: number; y: number }[] = [];
    for (let i = 0; i < 14; i++) {
      const mat = i % 3 === 0 ? particleMatTeal : i % 3 === 1 ? particleMatViolet : particleMatPearl;
      const mesh = new THREE.Mesh(particleGeom, mat);
      const scale = 0.5 + Math.random() * 0.7;
      mesh.scale.set(scale, scale, scale);
      const orbitRadius = 1.8 + Math.random() * 1.5;
      const speed = (0.2 + Math.random() * 0.4) * (Math.random() > 0.5 ? 1 : -1);
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 3;
      particles.push({ mesh, orbitRadius, speed, angle, y });
      particleGroup.add(mesh);
    }
    masterGroup.add(particleGroup);

    // 6. Lighting
    // Ambient pearl light
    const ambientLight = new THREE.AmbientLight(0xfaf9f6, 1.2);
    scene.add(ambientLight);

    // Directional top-front light
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(4, 6, 5);
    scene.add(dirLight);

    // Electric teal rim light
    const tealLight = new THREE.PointLight(0x00BFA6, 3.2, 12);
    tealLight.position.set(-4, -1, 3);
    scene.add(tealLight);

    // Vivid violet rim light
    const violetLight = new THREE.PointLight(0x7957FF, 2.8, 12);
    violetLight.position.set(4, 2, -2);
    scene.add(violetLight);

    // Coral subtle warmth
    const coralLight = new THREE.PointLight(0xFF786B, 1.8, 10);
    coralLight.position.set(0, -3.5, 2);
    scene.add(coralLight);

    setIsLoading(false);

    // Pointer Interactivity (desktop mouse move)
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Slow gentle floating motion
        toothMesh.position.y = -0.2 + Math.sin(elapsedTime * 1.5) * 0.12;
        toothMesh.rotation.y += delta * 0.35;

        // Counter rotating orbital rings
        ring1.rotation.z += delta * 0.25;
        ring2.rotation.z -= delta * 0.2;
        ring3.rotation.y += delta * 0.3;

        // Floating sparkle particles
        particles.forEach((p) => {
          p.angle += delta * p.speed * 0.8;
          p.mesh.position.x = Math.cos(p.angle) * p.orbitRadius;
          p.mesh.position.z = Math.sin(p.angle) * p.orbitRadius;
          p.mesh.position.y = p.y + Math.sin(elapsedTime * 2 + p.angle) * 0.2;
          p.mesh.rotation.x += delta * 0.5;
          p.mesh.rotation.y += delta * 0.7;
        });

        // Smooth damping for mouse tilt
        currentRotationX += (targetRotationX - currentRotationX) * 0.06;
        currentRotationY += (targetRotationY - currentRotationY) * 0.06;
        masterGroup.rotation.x = currentRotationX;
        masterGroup.rotation.y = currentRotationY;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      toothGeom.dispose();
      toothMaterial.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      ring3Geom.dispose();
      ring3Mat.dispose();
      particleGeom.dispose();
      particleMatTeal.dispose();
      particleMatViolet.dispose();
      particleMatPearl.dispose();
    };
  }, []);

  // WebGL Fallback View
  if (!hasWebGL) {
    return (
      <div className={`relative flex items-center justify-center p-8 ${className}`}>
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-electric-teal/20 via-electric-violet/20 to-pearl flex items-center justify-center p-8 shadow-card-elevated border border-white">
          <div className="w-48 h-48 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border border-navy/5">
            <svg viewBox="0 0 64 64" className="w-24 h-24 drop-shadow-md" fill="none">
              <path d="M32 10C24 10 18 16 18 24C18 31 22 36 24 45C25 49.5 27 54 30 54C32 54 32 46 32 43C32 46 32 54 34 54C37 54 39 49.5 40 45C42 36 46 31 46 24C46 16 40 10 32 10Z" fill="url(#fallbackGrad)" stroke="#17233F" strokeWidth="1.5"/>
              <defs>
                <linearGradient id="fallbackGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00BFA6"/>
                  <stop offset="100%" stopColor="#7957FF"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xs font-heading font-semibold text-navy/70 mt-3 tracking-wider uppercase">Precision Dental Care</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-[380px] sm:h-[450px] lg:h-[550px] flex items-center justify-center select-none ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-12 h-12 rounded-full border-4 border-electric-teal/20 border-t-electric-teal animate-spin" />
        </div>
      )}
      
      {/* 3D Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" aria-label="Interactive 3D dental tooth sculpture" role="img" />

      {/* Floating dimensional badges complementing the 3D visual */}
      <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white shadow-card-elevated flex items-center space-x-3 pointer-events-none animate-float-slow">
        <div className="w-3.5 h-3.5 rounded-full bg-electric-teal animate-ping" />
        <div>
          <p className="text-xs font-heading font-bold text-navy">Painless Digital Tech</p>
          <p className="text-[11px] text-navy/60 font-medium">Precision Guided Care</p>
        </div>
      </div>

      <div className="absolute top-2 right-2 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white shadow-card-elevated flex items-center space-x-3 pointer-events-none animate-float-reverse">
        <div className="w-3.5 h-3.5 rounded-full bg-electric-violet" />
        <div>
          <p className="text-xs font-heading font-bold text-navy">Aesthetic Harmony</p>
          <p className="text-[11px] text-navy/60 font-medium">Natural Enamel Realism</p>
        </div>
      </div>
    </div>
  );
};
