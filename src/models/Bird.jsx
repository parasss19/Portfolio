import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

import birdScene from "../assets/3d/bird.glb";
import { useFrame } from "@react-three/fiber";


const Bird = () => {
  const birdRef = useRef()
 
  const {scene, animations} = useGLTF(birdScene);          // Load the 3D model and animations from the provided GLTF file
  const {actions} =  useAnimations(animations, birdRef)    // Get access to the animations for the bird using (useAnimations) Hook
 
  useEffect(()=>{
    actions['Take 001'].play()       // Play the "Take 001" animation when the component mounts
  }, [])


  //Logic = To move around the bird 

  useFrame(({clock, camera})=>{
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

   // Check if the bird reached a certain endpoint relative to the camera(and the constant value (i.e 10) is added and subtracted so that
   // the bird move to end and come back to initial position else our bird will stuck in the midde and do back and forth motion)
   if(birdRef.current.position.x > camera.position.x + 10){
       // Change direction to backward and rotate the bird 180 degrees(Math.PI) on the y-axis
       birdRef.current.rotation.y = Math.PI
   } 
   else if(birdRef.current.position.x < camera.position.x - 10){
    // Change direction to forward and reset the bird's rotation
    birdRef.current.rotation.y = 0
   }

    // Update the X and Z positions based on the direction

    //means the bird is not rotation right now then move it in forward direction
    if(birdRef.current.rotation.y === 0) {
      //Moving forward
      birdRef.current.position.x += 0.01    //x(+) means bird simply move in +ve direction of x axis
      birdRef.current.position.z -= 0.01   //z(-) means move bird towards inside of screen (make it smaller when move forward)
    }
    
    //if bird is rotation then move it backward direction
    else {
      //Moving backward
      birdRef.current.position.x -= 0.01   //x(-) means bird simply move in -ve direction of x axis
      birdRef.current.position.z += 0.01   //z(+) means move bird towards outside of screen (make it larger when move back to initial position)
    }
  })


  return (
  <mesh  ref={birdRef}  position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
  <primitive object={scene} />
  </mesh>
  )};

  export default Bird;
