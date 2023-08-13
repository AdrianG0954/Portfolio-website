import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useEffect, useState } from "react";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./earth/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={4} />
      <primitive
        object={earth.scene}
        scale={isMobile ? 0.3 : 0.35}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthModel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //sets the state to the current state of the media query
    setIsMobile(mediaQuery.matches);

    // Create an event listener to update the state when the user changes their device size
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the event listener to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the event listener on cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthModel;
