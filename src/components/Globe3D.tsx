import { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { cameraStreams, CameraStream } from '../data/cameraStreams';

interface GlobeProps {
  onMarkerClick: (location: CameraStream) => void;
  isRotating: boolean;
}

export function Globe3D({ onMarkerClick, isRotating }: GlobeProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Load Earth Textures (Standard high-quality maps)
  const [colorMap, bumpMap, specMap] = useLoader(THREE.TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'
  ]);

  // Convert GPS Coordinates (Lat/Lng) to 3D Space Coordinates
  const markers = useMemo(() => {
    return cameraStreams.map((loc) => {
      const phi = (90 - loc.lat) * (Math.PI / 180);
      const theta = (loc.lng + 180) * (Math.PI / 180);
      const radius = 5.02; // Slightly larger than globe radius (5) to sit on top
      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      return { ...loc, position: [x, y, z] as [number, number, number] };
    });
  }, []);

  // Handle Rotation Logic
  useFrame((_, delta) => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. The Main Earth Sphere */}
      <mesh receiveShadow castShadow>
        <sphereGeometry args={[5, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={specMap}
          specular={new THREE.Color('grey')}
          shininess={5}
        />
      </mesh>

      {/* 2. Atmosphere Glow Layer */}
      <mesh scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshPhongMaterial
          color="#4338ca"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {/* 3. The 50 Camera Markers */}
      {markers.map((loc) => (
        <group 
          key={loc.id} 
          position={loc.position}
          onClick={(e) => {
            e.stopPropagation();
            onMarkerClick(loc);
          }}
        >
          {/* Main Hotspot */}
          <mesh onPointerOver={() => (document.body.style.cursor = 'pointer')} onPointerOut={() => (document.body.style.cursor = 'default')}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#6366f1" />
          </mesh>
          
          {/* Pulsing Outer Ring (helps visibility on iPhone) */}
          <mesh scale={[1.8, 1.8, 1.8]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshBasicMaterial color="#818cf8" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}

      {/* 4. Background Stars */}
      <StarsBackground />
    </group>
  );
}

function StarsBackground() {
  const starPositions = useMemo(() => {
    const positions = new Float32Array(4000 * 3);
    for (let i = 0; i < 4000; i++) {
      const radius = 40 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={4000} array={starPositions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="white" transparent opacity={0.6} />
    </points>
  );
}