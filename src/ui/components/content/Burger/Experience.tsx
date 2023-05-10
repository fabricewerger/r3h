import { OrbitControls, View } from '@react-three/drei'
// import { Perf } from 'r3f-perf'
// import Model from './Model.jsx'
import Placeholder from './Placeholder.tsx'
import Hamburger from './Hamburger.tsx'
import Fox from './Fox.tsx'
import { Suspense } from 'react'

export default function Experience() {
  return (
    <>
      {/* <Perf position='top-left' /> */}
      <OrbitControls makeDefault />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
      <ambientLight intensity={0.5} />
      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>

      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        {/* <Hamburger scale={0.35} /> */}
        <View>
          <Fox />
        </View>
      </Suspense>
    </>
  )
}