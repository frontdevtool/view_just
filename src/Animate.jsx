import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"

export default function Animate() {
    useFrame(() => {})
  return (
    <>

      <ambientLight intensity={5} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
        {/* <meshBasicMaterial {...props} wireframe /> */}
      </mesh>
    </>
  )
}
