import { effect } from "@chakra-ui/react"
import { Edges, PerspectiveCamera } from "@react-three/drei"
import { useRef, useState,useEffect } from "react"

export default function CubeComponent(props) {
  const [selected, isSelected] = useState(false)
const ref = useRef()

useEffect(() => {
console.log("==>ref", ref.current.matrix)  

}, [])

  return (
    <>
    <PerspectiveCamera ref={ref}/>
      <mesh {...props} onClick={() => isSelected(!selected)}>
        <boxGeometry />
        {/* <meshStandardMaterial {...props} /> */}
        <meshBasicMaterial {...props} wireframe />

        {/* <Edges visible={selected} scale={1.08} color={props.edegesColor} /> */}
      </mesh>
    </>
  )
}
