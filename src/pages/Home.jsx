import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../Components/Loader'

const Home = () => {
  return (
   <section className='relative w-full h-screen'>

    {/* This is the POPUP msg show when we move over island */}
    {/* <div className='absolute top-28 left-0 right-0 text-center'>
        POPUP msg
    </div> */}

    {/*All 3d models render here */}
    <Canvas className = 'w-full h-screen bg-transparent'  camera = {{near: 0.1, far:1000}} >
    
    {/* it consist of loader and used for rendering loading screen */}
     <Suspense fallback = {<Loader/>}>
       {/* different types of lights this light show their effect when we add our model(island) */}
       <directionalLight/>
       <ambientLight/>
       <pointLight/>
       <spotLight/>
       <hemisphereLight/>
     </Suspense>

    </Canvas>
   </section>
  )
}

export default Home
