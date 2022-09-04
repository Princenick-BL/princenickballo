import React from "react";

export const Wall = () => {
  return (
    <>
      <mesh 
        position={[0, 25, -150]} 
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[100, 50, 1]} />
        <meshLambertMaterial color={"white"} />
      </mesh>
      <mesh
        position={[-50, 25, 0]}
        rotation={[0, -Math.PI * 0.5, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[300, 50, 1]} />
        <meshLambertMaterial color={"white"} />
      </mesh>
      <mesh 
        position={[0, 25, 150]} 
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[100, 50, 1]} />
        <meshLambertMaterial color={"white"} />
      </mesh>
    </>
  );
};

export const Box = () => {
  return (
    <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[5, 5, 5]} />
      <meshLambertMaterial color={"red"} />
    </mesh>
  );
};

export const SmallBox = () => {
  return (
    <mesh position={[6, 1, -1.5]} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshLambertMaterial color={"green"} />
    </mesh>
  );
};

export const Ball = () => {
  return (
    <mesh position={[1, 6, -1]} castShadow receiveShadow >
      <sphereGeometry args={[1, 128, 128]} />
      <meshLambertMaterial color={"yellow"} />
    </mesh>
  );
};

export const Ground = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[100, 300]} />
      <meshStandardMaterial color={"#ddddff"} />
    </mesh>
  );
};
