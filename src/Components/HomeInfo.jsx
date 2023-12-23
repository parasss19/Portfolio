import { Link } from "react-router-dom"
import arrow from '../assets/icons/arrow.svg'


const InfoBox = ({text, link, btnText}) => {
    return (
    <div className="info-box">
    <p className="font-medium text-center sm:text-xl"> {text} </p>

    <Link to = {link}  className="neo-brutalism-white neo-btn" >
        {btnText}
        <img src={arrow} alt="arrow img" className='w-4 h-4' />
    </Link>
    </div >
   );
  }


const renderContent = {
    1:  <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> 
         Hi, I'm 
         <span className="font-semibold  text-white">Paras</span>👋
         <br/>
         A software Engineer from India
        </h1>
    ,
    2: <InfoBox 
         text="Worked with many companies and learned many skills along the way"
         link= '/about'
         btnText='Learn more'
        />
    ,
    3: <InfoBox 
        text='Led multiple projects and build many projects'
        link='/projects'
        btnText='Visit my Portfolio'
       />
    ,
    4: <InfoBox 
        text='Need a project done or looking for a dev? I am just few keystrokes away'
        link='/contact'
        btnText="Let's talk"
       />
}

const HomeInfo = ({currentStage}) => {
  return  renderContent[currentStage] || null
}

export default HomeInfo
