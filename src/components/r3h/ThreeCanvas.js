import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { useGLTF, OrbitControls } from "drei";
import * as THREE from "three";
import dog from "../img/1.jpg";

function Plane(props) {
  const mesh = useRef();
  const texture = useMemo(() => new THREE.TextureLoader().load(dog), []);
  return (
    <mesh {...props} ref={mesh} scale={[5, 5, 5]}>
      <planeBufferGeometry args={[1, 1, 1]}></planeBufferGeometry>
      <meshStandardMaterial side={THREE.DoubleSide}>
        <primitive attach="map" object={texture}></primitive>
      </meshStandardMaterial>
    </mesh>
  );
}

const ThreeCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Plane position={[0, 0, 0]}></Plane>
      <OrbitControls></OrbitControls>
    </Canvas>
  );
};

export default ThreeCanvas;
