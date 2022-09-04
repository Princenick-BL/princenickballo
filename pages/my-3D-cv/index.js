import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import styles from "./index.module.scss";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

function DynamicResolution({ min = 0.1, max = 1, step = 0.1 }) {
  const { gl } = useThree();
  const orbitRef = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    orbitRef.current.addEventListener("start", () => {
      setActive(true);
    });
    orbitRef.current.addEventListener("end", () => {
      setActive(false);
    });
  }, [orbitRef]);

  useFrame(() => {
    if (active) {
      gl.setPixelRatio(THREE.MathUtils.lerp(gl.getPixelRatio(), min, step));
    } else {
      if (gl.getPixelRatio() < max - step) {
        gl.setPixelRatio(THREE.MathUtils.lerp(gl.getPixelRatio(), max, step));
      } else if (gl.getPixelRatio() < max) {
        gl.setPixelRatio(max);
      }
    }
  });

  return <OrbitControls ref={orbitRef} />;
}

const App = () => {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      camera={{ position: [10, 10, 10] }}
    >
      <pointLight position={[15, 15, 15]} />
      <SmallBox />
      <Box />
      <Ball />
      <Wall />
      <Ground />
      <DynamicResolution min={0.25} max={1} step={0.1} />
      <Stats />
    </Canvas>
  );
};

export default App