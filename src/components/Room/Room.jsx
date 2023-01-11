import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import Sudo from './Sudo'
import Camera from './Camera'
import Cactus from './Cactus'
import Icon from './Icon'
import "./Room.scss"
import Level from './Level'

export default function Room() {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>

      <color attach="background" args={['#f1dfd1']} />
      <ambientLight />
      <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <group position-y={-0.75} dispose={null}>
         <Level />
          <Camera />
          <Cactus />
            <Icon />
        </group>
      </PresentationControls>
    </Canvas>
  )
}
