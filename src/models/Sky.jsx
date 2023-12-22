import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

import skyScene from '../assets/3d/sky.glb'

const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()

  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.(it is the second argument of useFrame hook)
  useFrame(( _ , delta)=>{
   if(isRotating){
    skyRef.current.rotation.y += 0.18 * delta   // Adjust the rotation speed as needed
   }
  })

  return (
    <mesh ref={skyRef}>

    {/* use the primitive element when you want to directly embed a complex 3D model or scene */}
    <primitive object={sky.scene}/>

    </mesh>
  )
}
export default Sky

