import React from 'react'
import {Tilt} from 'react-tilt'
import { projects } from '../constants'
import { Typewriter } from 'react-simple-typewriter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'


//Card
const ProjectCard = ({ index, name, description, tags, image, source_code_link}) =>{
   return (
   <Tilt
     className="bg-slate-300/40 p-3 rounded-2xl w-full sm:w-[360px] hover:border border-cyan-600"
     options = {{
      max:40,
      scale:1,
      speed:450
     }}
    >

    <div className='w-[full] h-[230px] relative'>
      
      {/* Project Image */}
      <img src={image} alt={name} className='w-full h-full object-cover rounded-xl'/>
      
      {/* Github icon over img */}
      <div className='absolute flex justify-end m-2 inset-0'>
      <a href="https://github.com/parasss19" target="blank"> <FontAwesomeIcon icon={faGithub}  className="w-5 h-7  hover:text-black-500/80 rounded-full" /> </a>
      </div>

      {/*Live Link */}
      <div className='absolute flex justify-end mr-8 my-3 inset-0'>
      <a href="https://github.com/parasss19" target="blank"> <FontAwesomeIcon icon={faLink} className=" text-black w-5 h-5  hover:text-blue-500 rounded-full" /> </a>
      </div>


      {/* Name and discription of project */}
      
    
    </div>
    
  </Tilt>

  )}


const Projects = () => {
  return (
   <>
    <section className='max-container'>

    <h1 className='head-text '>Projects on
        <span className='blue-gradient_text sm:text-5xl text-xl font-semibold drop-shadow ml-2'>
        <Typewriter 
          words={['<Tailwind>', "<Nodejs>", '<Javascript>', '<Frontend>', "<Fullstack>"]}
          loop={false}
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        </span> 
     </h1>

    <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects many of them are open-source, so 
        if you come across something that piques your interest, feel free 
        to explore the codebase. Your collaboration is highly valued!
    </p>

    <div className='flex flex-wrap mt-20 gap-7'>
      {projects.map((project)=> (
          <ProjectCard {...project}  //here we pass all the properties of project( array in index.js)
          key={project.name} 
          />
      ))}
    </div>

   </section>
   </>
  )
}

export default Projects
