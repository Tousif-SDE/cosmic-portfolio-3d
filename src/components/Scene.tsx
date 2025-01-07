import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            fade
            speed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;