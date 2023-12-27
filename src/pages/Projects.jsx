import React from 'react'
import {Tilt} from 'react-tilt'
import { Typewriter } from 'react-simple-typewriter'
import { projects } from '../constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import CTA from '../Components/CTA';


//Card
const ProjectCard = ({ index, name, description, tags, image, source_code_link , link}) => {
   return (

   <Tilt
     className="bg-slate-300/40 p-3 rounded-2xl w-full sm:w-[360px] hover:border border-cyan-600"
     options = {{
      max:40,
      scale:1,
      speed:450
     }}
    >

    {/* Project Image */}
    <div className='w-[full] h-[230px] relative'>
      <img src={image} alt={name} className='w-full h-full object-cover rounded-xl'/>
    </div>

    {/* Name of project */}
    <div className='mt-5'>
        <h3 className='font-bold font-poppins uppercase '> 
            {name} 
            <a href={link} target="blank"><FontAwesomeIcon icon={faLink} className="ml-3 mr-2 text-black w-5 h-5  hover:text-blue-500 rounded-full" /> </a>
            <a href={source_code_link} target="blank"><FontAwesomeIcon icon={faGithub}  className=" w-5 h-7 hover:text-black-500/80 rounded-full" /> </a> 
        </h3>
    </div>

    {/*Description of project*/}
    <div className='mt-2'>
      <p className='text-slate-700'>{description}</p>
    </div>
    
    {/* tags */}
    <div className='flex flex-wrap'>
      {tags.map((tag)=>(
        <div key={tag.name}  className='flex justify-center flex-col items-center rounded-xl btn-front'>
        <img 
          src={tag.imageUrl}  
          alt={tag.name}  
          className='w-1/2 h-1/2 object-contain mt-3' 
        />
        <span className='text-xs text-black-500/60'>{tag.name}</span>
      </div>
      ))}
    </div>
 
  </Tilt>
  )}


const Projects = () => {
  return (
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

    <hr className='border-slate-400 mt-16' />

    <CTA />


   </section>
  )
}

export default Projects
