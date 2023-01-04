import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  Text3D,
  OrbitControls,
} from "@react-three/drei";
import React from "react";

export default function KevinThreeD() {
  return (
    <div style={{ width: "70vw", height: "60vh" }}>
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Scene />
      <OrbitControls
      autoRotate={true}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
    </div>
  );
}

function Scene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport);
  
  return (
    <>
      <Center rotation={[-0.55, -0.15, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/Inter_Bold.json"
        >
          {`        Kevin\nRakotoniaina`}

          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
}
