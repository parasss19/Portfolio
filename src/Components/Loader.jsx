import { Html } from "@react-three/drei"

const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-20 h-20 rounded-full animate-spin border-2 border-opacity-20 border-blue-500 border-t-blue-500'/>
    </div>
  )
}

export default Loader

// Note = As loader is not 3d and we using it with our model(island) which is 3d 
//  so we have to use "react drei"