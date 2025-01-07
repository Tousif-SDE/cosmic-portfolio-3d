import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SpaceParticles = ({ count = 2000 }) => {
  const points = useRef<THREE.Points>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame(() => {
    if (points.current) {
      points.current.rotation.x += 0.0001;
      points.current.rotation.y += 0.0001;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
};

export default SpaceParticles;