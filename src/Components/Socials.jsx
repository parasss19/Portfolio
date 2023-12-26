import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
  return (
    <div className="flex flex-row gap-4 ml-2 mt-7 cursor-pointer ">
       <a href="https://github.com/parasss19" target="blank"> <FontAwesomeIcon icon={faGithub}  className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a>
       <a href="https://www.linkedin.com/in/paras-mehta19/" target="blank"> <FontAwesomeIcon icon={faLinkedin}   className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a>
       <a href="https://twitter.com/ParasMe12853105" target="blank"> <FontAwesomeIcon icon={faTwitter}   className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a> 
       <a href="https://discordapp.com/users/929032026978398238" target="blank"><FontAwesomeIcon icon={faDiscord}  className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a>  
      </div>
  )
}

export default Socials
