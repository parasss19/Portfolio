import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import {a} from "@react-spring/three"    //for animation
import islandScene from '../assets/3d/island.glb'


const Island = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
  
  const islandRef = useRef()

  const { nodes, materials } = useGLTF(islandScene);
  const {gl, viewport} = useThree()         //to get 3js renderer and viewPort we use "useThree" hook

  const lastX = useRef(0);                  //Use a ref for the last mouse x position
  const rotationSpeed = useRef(0);          //Use a ref for rotation speed
  const dampingFactor = 0.95;               //damping factor = when we scroll island how fast it moves after scolled it (Define a damping factor to control rotation damping)

  // First function =  Handle pointer (mouse or touch) down event
  const handlePointerDown = (e)=>{
    e.stopPropagation()                 //it means the mouse click only going to do what our function wants to do and it wont touch other elements in screen
    e.preventDefault()
    setIsRotating(true)

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = e.touches ? e.touches[0].clientX : e.clientX

     // Store the current clientX position for reference
     lastX.current  = clientX;
  }

  // Second function =  Handle pointer (mouse or touch) up event
  const handlePointerUp = (e)=>{
    e.stopPropagation();                
    e.preventDefault()
    setIsRotating(false)
  }

  // Third function =  Handle pointer (mouse or touch) move event
  const handlePointerMove = (e)=>{
    e.stopPropagation();                
    e.preventDefault()

    if(isRotating) {

    // If rotation is enabled, calculate the change in clientX position
     const clientX = e.touches ? e.touches[0].clientX  : e.clientX

    // calculate the change in the horizontal position of the mouse cursor or touch input, relative to the viewport's width
     const delta = (clientX - lastX.current) / viewport.width

    // Update the island's rotation based on the mouse/touch movement
     islandRef.current.rotation.y += delta * 0.01 * Math.PI;        //0.01 can be any factor and We use Math.PI coz we working with circle

    // Update the reference for the last clientX position
     lastX.current = clientX;

     //update rotation speed 
     rotationSpeed.current = delta * 0.01 * Math.PI
    }
  }

  //This func use when we rotate island using keys in keyboard
  const handleKeyDown = (e)=>{
    if(e.key === 'ArrowLeft'){
      if(!isRotating) setIsRotating(true)
      islandRef.current.rotation.y += 0.05 * Math.PI; 
      rotationSpeed.current = 0.007;
    } 
    else if(e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating(true)
      islandRef.current.rotation.y -=  0.05 * Math.PI; 
      rotationSpeed.current = -0.007;
    }
  }

  const handleKeyUp = (e)=>{
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setIsRotating(false)
    }
  }


  //we cannot directly call this function coz we have to call them whenever we press mouse button down,up or move
  useEffect( ()=>{

    // Add event listeners for pointer(mouse) and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    //for mobile touch event
    canvas.addEventListener("touchstart", handlePointerDown);
    canvas.addEventListener("touchmove", handlePointerMove);
    canvas.addEventListener("touchend", handlePointerUp);


    //we also remove this func when we exit the page
    return ()=>{
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handlePointerDown);
      canvas.removeEventListener("touchmove", handlePointerMove);
      canvas.removeEventListener("touchend", handlePointerUp);
    }
  }, [gl, handlePointerDown,handlePointerUp, handlePointerMove])

  
  //This function is called on each frame update
  useFrame( ()=>{
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if(!isRotating){
      rotationSpeed.current *= dampingFactor
    
    // Stop rotation when speed is very small
    if(Math.abs(rotationSpeed.current) < 0.001){
      rotationSpeed.current = 0
    }

    islandRef.current.rotation.y += rotationSpeed.current;
    }

  else {
  // When rotating, determine the current stage based on island's orientation
  const rotation = islandRef.current.rotation.y;

  /**
   * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
   * The goal is to ensure that the rotation value remains within a specific range to
   * prevent potential issues with very large or negative rotation values.
   *  Here's a step-by-step explanation of what this code does:
   *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
   *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
   *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
   *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
   *     This is done to ensure that the value remains positive and within the range of
   *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
   *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
   *     modulo operation to the value obtained in step 2. This step guarantees that the value
   *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
   *     circle in radians.
   */
  const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

  // Set the current stage based on the island's orientation
  switch (true) {
    case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
      setCurrentStage(4);
      break;
    case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
      setCurrentStage(3);
      break;
    case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
      setCurrentStage(2);
      break;
    case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
      setCurrentStage(1);
      break;
    default:
      setCurrentStage(null);
    }
  }
  
 })


  return (
     // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
    <a.group ref={islandRef} {...props} >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh 
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  )
}

export default Island
