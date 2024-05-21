import { useEffect, useRef, useState } from "react"
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

export default function SceneThree() {
  const width = window.innerWidth
  const height = window.innerHeight
  const [update, setUpdate] = useState()

  const [cameraObject1] = useState(() => {
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

  const camera1 = new THREE.PerspectiveCamera(75, width / 2 / height, 0.01, 100)
camera1.position.set(0, 0, 2)

  const ref = useRef()
  const refCamera1 = useRef()
  const cloneRef = useRef()
  const presp_1 = useRef()


  useEffect(() => {
    // console.log("screen1: ", screen1)
    // cloneRef.current

    setTimeout(() => {
      presp_1.current.updateMatrix()
      CamerObj1.matrix.copy(presp_1.current?.matrix)
      console.log(" CamerObj1.matrix", CamerObj1.matrix)
      // console.log("  presp_1.matrix: ", presp_1.current?.matrix)
    }, 300)
    //  CamerObj1.matrix.copy()
  })

  let cam2 = cameraObject1.clone()
  cam2.matrixAutoUpdate = false

  return (
    <>
      <View index={1} className=' border-2 border-blue-500 m-1 w-1/2'>
        <OrbitControls camera={camera1}/>
        {/* <PerspectiveCamera
          makeDefault
          position={[0, 1, -8]}
          ref={presp_1}
          // onClick={() => console.log("==> presp_1", presp_1.current)}
        /> */}
        {/* <CubeComponent color={"yellow"} /> */}
        <primitive object={cameraObject1} />

        {/* <CubeComponent position={[1, 1, 1]} /> */}

        {/* <OrbitControls makeDefault /> */}
        {/* <CameraControls
          ref={refCamera1}
          onUpdate={() => console.log("==>", "update")}
       /> */}

        <CameraControls
          makeDefault
          //        // ref={refCamera2}
        />
        <gridHelper position={[0, -1, 0]} scale={3} />
      </View>

      <View index={2} className=' border-2 border-green-500 m-1 w-1/2'>
        {/* <PerspectiveCamera makeDefault position={[0, 1, -8]} /> */}
        <CameraControls
          makeDefault
          // ref={refCamera2}
          onUpdate={() => console.log("==>", "update")}
        />

        <gridHelper position={[0, -1, 0]} scale={3} />

        {/* <Lights controls={false} preset='city' /> */}

        {/* <OrbitControls /> */}

        {/* <CubeComponent color={"red"} /> */}

        <Clone ref={cloneRef} object={cam2} />
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
