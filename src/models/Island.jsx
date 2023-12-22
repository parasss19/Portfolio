import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import {a} from "@react-spring/three"    //for animation
import islandScene from '../assets/3d/island.glb'

const Island = ({isRotating, setIsRotating, ...props}) => {
  const islandRef = useRef()
  const { nodes, materials } = useGLTF(islandScene);

  const {gl, viewport} = useThree()         //to get 3js renderer and viewPort we use "useThree" hook

  const lastX = useRef(0);                  //we use "useRef()" hook to get the last mouse positon in x-axis
  const rotationSpeed = useRef(0);          //we use "useRef()" hook to get rotation speed of island
  const dampingFactor = 0.95;               //damping factor = when we scroll island how fast it moves after scolled it 

  return (
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
