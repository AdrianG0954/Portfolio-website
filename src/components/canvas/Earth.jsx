import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={10} />
      <primitive
        object={earth.scene}
        scale={0.45}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthModel = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthModel;
