import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SpaceParticles = ({ count = 2000 }) => {
  const mesh = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0001;
      mesh.current.rotation.y += 0.0001;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
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