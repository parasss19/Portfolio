import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'
import {faDownload} from '@fortawesome/free-solid-svg-icons'

const Socials = () => {
  return (
    <div className="flex flex-row items-center gap-4 ml-2 mt-7 cursor-pointer ">
       <a href="https://github.com/parasss19" target="blank"> <FontAwesomeIcon icon={faGithub}  className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a>
       <a href="https://www.linkedin.com/in/paras-mehta19/" target="blank"> <FontAwesomeIcon icon={faLinkedin}   className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a>
       <a href="https://twitter.com/ParasMe12853105" target="blank"> <FontAwesomeIcon icon={faTwitter}   className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a> 
       <a href="https://discordapp.com/users/929032026978398238" target="blank"><FontAwesomeIcon icon={faDiscord}  className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a>  
      
       <a href="https://azure-alaine-60.tiiny.site" download target="blank" className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff]  font-medium rounded-lg text-xs sm:text-sm  px-3 py-2 sm:py-2.5 text-center">Resume <FontAwesomeIcon icon={faDownload}/> </a>
      </div>
  )
}

export default Socials
