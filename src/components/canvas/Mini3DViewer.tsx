import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Mini3DViewerProps {
  type?: 'tooth' | 'gem' | 'torus' | 'cylinder';
  accentColor?: string; // hex string, e.g. '#00BFA6'
  className?: string;
}

export const Mini3DViewer: React.FC<Mini3DViewerProps> = ({
  type = 'gem',
  accentColor = '#00BFA6',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    const canvas = document.createElement('canvas');
    if (!canvas.getContext('webgl') && !canvas.getContext('experimental-webgl')) {
      return;
    }

    const width = container.clientWidth || 280;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry selection
    let geometry: THREE.BufferGeometry;
    if (type === 'gem') {
      geometry = new THREE.OctahedronGeometry(1.4, 0);
    } else if (type === 'torus') {
      geometry = new THREE.TorusGeometry(1.2, 0.45, 16, 60);
    } else if (type === 'cylinder') {
      geometry = new THREE.CylinderGeometry(0.8, 0.9, 1.8, 32);
    } else {
      geometry = new THREE.IcosahedronGeometry(1.3, 1);
    }

    const color = new THREE.Color(accentColor);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.35,
      sheen: 0.8,
      sheenColor: color,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Orbit wire ring
    const ringGeom = new THREE.TorusGeometry(1.9, 0.02, 16, 60);
    const ringMat = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.4 });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(color, 2.5, 10);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0xffffff, 1.5, 10);
    backLight.position.set(-3, -2, -2);
    scene.add(backLight);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.008;
      mesh.rotation.y += 0.012;
      ring.rotation.z += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      ringGeom.dispose();
      ringMat.dispose();
    };
  }, [type, accentColor]);

  return (
    <div
      ref={containerRef}
      className={`relative w-44 h-44 md:w-56 md:h-56 flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    />
  );
};
