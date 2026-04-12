import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';

const MorphingCore = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[2.5, 64, 64]} position={[4, 0, -5]}>
        <MeshDistortMaterial 
          color="#111111" 
          distort={0.4} 
          speed={1.5} 
          roughness={0.1} 
          metalness={0.8}
          envMapIntensity={1}
        />
      </Sphere>
    </Float>
  );
};

const CameraRig = () => {
  useFrame((state) => {
    // Ultra smooth cinematic camera sway
    state.camera.position.x += (state.pointer.x * 2 - state.camera.position.x) * 0.02;
    state.camera.position.y += (state.pointer.y * 2 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, -5);
  });
  return null;
};

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505', pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <fog attach="fog" args={['#050505', 5, 15]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        
        {/* The single gradient accent lighting */}
        <pointLight position={[-5, -5, -5]} intensity={40} distance={20} color="#ec4899" />
        <pointLight position={[5, 10, -5]} intensity={50} distance={20} color="#6366f1" />
        
        <MorphingCore />
        <CameraRig />
      </Canvas>
    </div>
  );
};

export default React.memo(Background3D);
