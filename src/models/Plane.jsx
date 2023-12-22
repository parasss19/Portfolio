import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import planeScene from '../assets/3d/plane.glb'

const Plane = ({isRotating, ...props}) => {
  const planeRef = useRef();

  const {scene, animations} = useGLTF(planeScene)    //Load the 3D model and its animations
  const {actions} = useAnimations(animations, planeRef)     //Get animation actions associated with the plane

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(()=>{
    if(isRotating){
      actions['Take 001'].play()      // Play the "Take 001" animation when the component mounts
    }else{
      actions['Take 001'].stop()
    }
  }, [actions, isRotating])

  return (
    <mesh {...props}  ref={planeRef} >
      <primitive object={scene}/>
    </mesh>
  )
}

export default Plane
