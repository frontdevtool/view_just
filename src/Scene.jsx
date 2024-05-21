import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  View,
  Bounds,
  OrthographicCamera,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ArcballControls,
  PivotControls,
  Html,
  Center,
  CameraControls,
  Clone,
} from "@react-three/drei"
import { Soda } from "./Models"
import * as THREE from "three"
import CubeComponent from "./CubeComponent"
import Animate from "./Animate"

export default function Scene() {
  const [update, setUpdate] = useState()
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({
    color: "red",
    wireframe: true,
  })
  const cube = new THREE.Mesh(geometry, material)

  cube.position.x = 1
  const ref = useRef()
  const refCamera1 = useRef()
  const cloneRef = useRef()
  const presp_1 = useRef()
  const presp_2 = useRef()

  const [CamerObj1] = useState(() => {
    const scene = new THREE.Scene()

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: "yellow",
      wireframe: true,
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    return scene
  })

  const kazem = CamerObj1.clone()
  kazem.position.x = 3
  // console.log('kazem: ', kazem.matrix);

  useLayoutEffect(() => {
    
    // CamerObj1.matrixAutoUpdate = false
    // CamerObj1.matrix.copy(presp_1.current?.matrix)
    // console.log("screen1: ", screen1)
    // cloneRef.current
 console.log(" CamerObj1.matrix", CamerObj1.matrix)
    setTimeout(() => {
      // presp_1.current.updateMatrix()
      // CamerObj1.matrix.copy(presp_1.current?.matrix)
      // console.log("  presp_1.matrix: ", presp_1.current?.matrix)
      // CamerObj1.matrix.copy(presp_1.current?.matrix)
      // console.log(" CamerObj1.matrix", CamerObj1.matrix)
    }, 400)
  })
   const clonedMesh = CamerObj1.clone()
  const updateCam = () => {
    // CamerObj1.matrix.copy(presp_1.current?.matrix)
    // CamerObj1.position.x = cloneRef.current.position.x += 0.1

// cloneRef.current.pos
    // cloneRef.matrix.copy(presp_2.current?.matrix)
    // console.log("CamerObj1.matrix: ", CamerObj1.position)
    // console.log("cloneRef.matrix: ", cloneRef.current.position)
    // console.log("==>", (presp_1.current.position = new THREE.Vector3(1,1,1)))
    // cloneRef.current.position = 
    console.log('cloneRef.current.position: ', cloneRef.current.position);
    
    // presp_1.current.position
  }
     
//  useFrame(() => {})
  return (
    <>
      <View
        as='Canvas'
        index={1}
        className=' border-2 border-blue-500 m-1 w-1/2'
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 1, -8]}
          ref={presp_1}
          // onClick={() => console.log("==> presp_1", presp_1.current)}
        />
        {/* <CubeComponent color={"orang"} position={[1, 1, 1]} /> */}
        <primitive object={CamerObj1} />
        {/* <primitive object={kazem} /> */}
        {/* <Animate /> */}
        {/* <OrbitControls makeDefault /> */}
        {/* <CameraControls
          ref={refCamera1}
          onUpdate={() => console.log("==>", "update")}
       /> */}

        <CameraControls
          makeDefault
          //        // ref={refCamera2}
        />
        {/* <Animate /> */}

        <gridHelper position={[0, -1, 0]} scale={3} />
      </View>

      <View
        as='Canvas'
        index={2}
        className=' border-2 border-green-500 m-1 w-1/2'
      >
        <PerspectiveCamera makeDefault position={[0, 1, -8]} ref={presp_2} />
        <CameraControls
          makeDefault
          // ref={refCamera2}
        />

        <gridHelper position={[0, -1, 0]} scale={3} />

        {/* <Lights controls={false} preset='city' /> */}

        {/* <OrbitControls /> */}

        {/* <CubeComponent color={"red"} /> */}

        <Clone ref={cloneRef} object={clonedMesh} />

        <Html>
          <button className='text-white' onClick={updateCam}>
            update
          </button>
        </Html>
      </View>
    </>
  )
}

function Lights({ preset }) {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[20, 30, 10]} />
      <pointLight position={[-10, -10, -10]} color='blue' />
      <Environment preset={preset} />
    </>
  )
}
