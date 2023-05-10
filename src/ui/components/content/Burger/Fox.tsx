import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
// import { useControls } from 'leva'

export default function Fox() {
  const fox = useGLTF('./Fox/glTF/Fox.gltf')

  return <primitive object={fox.scene} scale={0.02} position={[-2.5, 0, 2.5]} rotation-y={0.3} />
}
