import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'

import Loader from '../Components/Loader'
import {Island, Bird, Sky, Plane} from '../models'
import HomeInfo from '../Components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import  soundoff from '../assets/icons/soundoff.png'
import  soundon from '../assets/icons/soundon.png'

const Home = () => {

  const [isRotating, setIsRotating] = useState(false)    //feature = Rotation(draging) of island 
  const [currentStage, setCurrentStage] = useState(1);   //this state is for different popup msg stages which show diff msg on diff stage
  const [isPlayingMusic , setIsPlayingMusic] = useState(false)     //update the music play or pause

  //for audio part
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;

  useEffect(()=>{
    if(isPlayingMusic) {
      audioRef.current.play()
    }
    return ()=> {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  const handleMusic = ()=>{
    setIsPlayingMusic(!isPlayingMusic)   //its toggle isPlaying 
  }


  // used to adjust the island position on different screens
    const adjustIslandForScreenSize = ()=> {
      let screenScale;
      let screenPosition = [0, -6.5, -43.4]
      let screenRotation = [0.1, 4.7077, 0]

  // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition , screenRotation];
  };

  // used to adjust the Plane position on different screens
  const adjustPlaneForScreenSize = ()=> {
    let screenScale, screenPosition, screenRotation = [0, 20.1, 0];
   
  if (window.innerWidth < 768) {
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [0, -1.5, 0];
  } else {
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4];
  }
  return [screenScale, screenPosition, screenRotation];
};

  //destructure the variables of the function "adjustIslandForScreenSize" , "adjustPlaneForScreenSize" and use where island, plane component is rendered
    const [islandScale, islandPosition, islandRoation] = adjustIslandForScreenSize()
    const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize()
 

  return (
   <section className='relative w-full h-screen'>

    {/* This is the POPUP msg show when we move over island */}
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {/* { console.log(currentStage)}      it shows the different stages as 1,2,3,4 in console(it just for the check that our currentStage is working or not) */}
      {currentStage   &&  <HomeInfo currentStage = {currentStage} />}     {/* here we render out HomeInfo component if currentStage is present and also pass it using props */}
    </div>


    {/*All 3d models render here */}
    <Canvas className = {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} `}  camera = {{near: 0.1, far: 1000}} >
    
    {/* it consist of loader and used for rendering loading screen */}
     <Suspense fallback = {<Loader/>} >
       
      {/* different types of lights this light show their effect in our model(island) */}
      <directionalLight position={[1,1,1]} intensity={2}/>   {/* directionallight set light coming from distance source like sun */}
       
      <ambientLight intensity={0.5} />                       {/*ambientlight illuminate all objects in the scene equally without casting shadow so position not use here */}
       
      <pointLight position={[10, 5, 10]} intensity={2}/>                                         {/*it emit light in all direction from a single point but here it has no use */}
       
      {/*it illuminates the scene with gradient */}
      <hemisphereLight  
          skyColor = "#b1e1ff" 
          groundColor="#000000" 
          intensity={1}
      />  
        
      <Bird/>

      <Sky 
      isRotating = {isRotating}
      />
      
      <Island
         scale = {islandScale}
         position = {islandPosition}
         rotation = {islandRoation}
         isRotating = {isRotating}
         setIsRotating = {setIsRotating}
         setCurrentStage = {setCurrentStage}
      />

     </Suspense>

     <Plane
      scale = {planeScale}
      position = {planePosition}
      rotation = {planeRotation}
      isRotating= {isRotating}
     />

    </Canvas>


    {/* audio button */}
    <div className='absolute bottom-2 left-2'>
      <img 
        className = 'w-10 h-10 cursor-pointer'
        src={!isPlayingMusic ? soundoff : soundon}
        alt="audio button" 
        onClick={handleMusic}
        />
    </div>

   </section>
   )
 }

export default Home
