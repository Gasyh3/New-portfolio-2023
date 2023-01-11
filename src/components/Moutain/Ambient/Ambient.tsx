import { Stars } from "@react-three/drei";

type AmbientProps = {};

export const Ambient = ({}: AmbientProps) => {
  return (
    <>
      <directionalLight
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        intensity={0.25}
        castShadow
        position={[0, 12, 0]}
      />

      <fogExp2 attach="fog" color="#F7CFA3" density={0.05} />
      <ambientLight intensity={0.3} />
    </>
  );
};