import React, { useRef } from 'react';
import { Canvas, useLoader, extend, useThree,useFrame  } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });


const Scene = () => {
  const { camera, gl } = useThree();
  const gltf = useLoader(GLTFLoader, 'resume-gallery.glb');
  const group = useRef();

    // Set initial camera position
    camera.position.set(0, 8, -20);

  // Set up a container object for camera rotation
  const containerRef = useRef();
  useFrame(() => {
    // Rotate the container object
    containerRef.current.rotation.x = -0.9;
    containerRef.current.rotation.y = 4.7;
    containerRef.current.rotation.z = -0.9;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <group ref={group}>
        <primitive object={gltf.scene} />
      </group>
      <group ref={containerRef}>
        <primitive object={camera} />
      </group>
    </>
  );
};


const App = () => {
  return (
    <Canvas style={{
      width:"100vw",
      height:"100vw",
      // backgroundImage:"url(rsume-bg.jpg)",
      backgroundSize:"contain"
      }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Scene />
    </Canvas>
  );
};

export default App;
