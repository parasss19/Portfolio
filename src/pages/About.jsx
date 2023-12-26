import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {experiences, skills} from '../constants'
import CTA from '../Components/CTA'
import Socials from '../Components/Socials';

import { Typewriter } from 'react-simple-typewriter'


const About = () => {
 
  return (
    <section className='max-container'>
    
     <h1 className='head-text'>  Hello, I am   
        <span className='blue-gradient_text font-semibold drop-shadow ml-2'>
        <Typewriter 
          words={['Paras', 'Developer']}
          loop={false}
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        </span> 
     </h1>

     <Socials/>

     <div className='mt-5 text-slate-500 flex flex-col gap-3'>
      <p>
        Software Engineer based in India, specializing in technical
        education through hands-on learning and building applications.
      </p>
     </div>

    <div className='py-10 flex flex-col'>
       <h3 className='subhead-text'>My Skills</h3>

       {/* this map function will return our skills */}
       <div className='flex flex-wrap gap-12 mt-16'>
          {skills.map((skill) => (
            <div className='block-container w-[70px] h-[70px] sm:w-20 sm:h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='flex justify-center flex-col items-center rounded-xl btn-front'>
                <img 
                  src={skill.imageUrl}  
                  alt={skills.name}  
                  className='w-1/2 h-1/2 object-contain mt-3' 
                />
                <span className='text-xs text-black-500/60'>{skill.name}</span>
              </div>
            </div>
            )
          )}
       </div>
    </div>


    <div className='py-16'>
       <h3 className='subhead-text'>Work Experience</h3>

       <div className='mt-5 text-slate-500 flex flex-col gap-3'>
        <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
        </p>
       </div>

       <div>
        <VerticalTimeline>
          {experiences.map((experience) =>(

            <VerticalTimelineElement
               key={experience.company_name}
               date={experience.date}
               icon={
                <div className='flex justify-center w-full h-full'>
                  <img src={experience.icon} alt={experience.company_name} />
                </div>
               }
               iconStyle={{backgroundColor:experience.iconBg}}
               contentStyle= {{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none'
               }}
          
            >
              <div>
                <h3 className='font-semibold font-poppins text-black text-xl'>{experience.title}</h3>
                <p className='text-black-500 text-base'
                   style={{margin:0}}      //to remove the default style of verticaltimeline component
                >  
                {experience.company_name}
                </p>
              </div>

              <ul className='my-5 list-disc ml-5'>
                {experience.points.map((point)=>(
                  <li className='text-sm text-black-500/65'>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>

          ))}
        </VerticalTimeline>

       </div>
    </div>
   
    <hr className='border-slate-400' />

    <CTA />

    </section>
  )
}

export default About
