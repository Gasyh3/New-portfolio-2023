import { Canvas } from "@react-three/fiber";
import { Ambient } from "./Ambient/Ambient";
import { Cam } from "./cam";
import { Ground } from "./ground";
import { MountainRidges } from "./MountainRidge";
import "./Mountain.scss"

export const Scene = () => {
  return (
    <Canvas flat shadows>
      <Cam />
      <MountainRidges animate />
  
      <Ambient />
    </Canvas>
  );
};