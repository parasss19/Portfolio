import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>

      {/* LOGO (for home route)*/}
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex justify-center items-center font-bold shadow-md" >
       <p className='blue-gradient_text'>PM</p> 
      </NavLink>

      {/* other navbar icons */}
      <nav className='flex gap-7 font-medium text-lg ' >
        <NavLink to="/about" className = { ({isActive}) => isActive ? "text-indigo-500" : "text-black" } >
        <button className='bg-white px-2 py-1 rounded-lg shadow-lg hover:bg-yellow-300 font-semibold'>About</button>
        </NavLink>

        <NavLink to="/projects" className = { ({isActive})=> isActive ? "text-indigo-500" : "text-black" } >
        <button className='bg-white px-2 py-1 rounded-lg shadow-lg hover:bg-yellow-300 font-semibold'>Projects</button>
        </NavLink>
      </nav>

    </header>
  )
}

export default Navbar

