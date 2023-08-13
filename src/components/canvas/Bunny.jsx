import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Bunny = () => {
  const bunny = useGLTF("./bunny/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={bunny.scene}
        scale={0.9}
        rotation-y={-1.1}
        position-y={-3}
      />
    </mesh>
  );
};

const BunnyModel = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [-4, 3, 6],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // make it so the bunny model doesn't rotate
          enableRotate={false}
        />
        <Bunny />
      </Suspense>
    </Canvas>
  );
};

export default BunnyModel;
