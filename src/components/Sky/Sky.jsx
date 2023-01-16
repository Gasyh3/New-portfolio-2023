import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, useTexture, Environment, Cloud } from '@react-three/drei'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'

function Sphere(props) {
  const texture = useTexture('/texture-moon.jpeg')
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial map={texture} clearcoat={0.1} clearcoatRoughness={0} roughness={0} metalness={0.25} />
    </mesh>
  )
}

export default function Ciel() {
  return (
    <div style={{ width: "100vw", height: "60vh" }}>
    <Canvas shadows camera={{ position: [-50, -25, 150], fov: 15 }}>
      <Suspense fallback={null}>
        <hemisphereLight intensity={0.45} />
        <spotLight angle={0.4} penumbra={1} position={[20, 30, 2.5]} castShadow shadow-bias={-0.00001} />
        <directionalLight color="white" position={[-10, -10, 0]} intensity={1.5} />
        <Sphere scale={8} position={[0, 0, 0]} />
        <Cloud scale={1} position={[20, 0, 0]} />
        <Cloud scale={1} position={[-30, 0, 0]} />
        <Cloud scale={1.5} position={[0, 0, 10]} />
        <Cloud scale={0.25} position={[-25, 20, 0]} />
        <Cloud scale={1} position={[60, -10, 10]} />
        <Environment preset="city" />
 

        <OrbitControls 
        
      autoRotate={true}
      autoRotateSpeed={0.25}/>
      </Suspense>
    </Canvas>
    </div>
  )
}

