import { useState , useRef} from "react"
import { Island } from "../models"
import emailjs from '@emailjs/browser'

import useAlert from '../hooks/useAlert'      //it is our custom hook for an alert
import Alert from "../Components/Alert"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
  const formRef = useRef()

  const[form , setForm] = useState({name:'' , email:'' , message:''})     //it is used to update name, email and message input
  const[isLoading, setIsLoading] = useState(false)                        //it is used to update button text ("send message" or "sending..." based on isLoading)
  const {alert, showAlert, hideAlert} = useAlert()                        //it is used for the alert feature in the contact page


  //handle when we write in any fields
   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //handle when we submit the form
  const handleSubmit = (e) => {
    e.preventDefault()         //prevent loading the page
    setIsLoading(true)         //start loading the content and it show "sending..." in the button  

    //Emailjs feature
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,

      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

      {
        from_name:form.name,
        to_name: "Paras",
        from_email : form.email,
        to_email : 'parasss0708@gmail.com',
        message: form.message
      },

      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    //after submiting it make the setIsLoading to false(button will show "send message" again) and clear the form 
    .then(() => {
      setIsLoading(false)

      //show alert
      showAlert({show:true, text:'Message sent succesfully', type:'success' })

      //to hide alert
      setTimeout(() => {
        //clean the form after submiting
        setForm({name:'' , email:'' , message:''});
        hideAlert(false)
      }, 3000);

    })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)

      //show alert
      showAlert({show:true, text:"'I didn't received your message ", type:'danger' })
    });

  }


  return (
   <section className="relative flex flex-col lg:flex-row max-w-5xl min-h-[calc(100vh-80px)] mx-auto px-8 pt-32 pb-12 ">
   
   {/* ALERT */}
   {/* <Alert text="tesstt"/> */}

   {alert.show && <Alert {...alert} />}  
  

    <div className="flex flex-col flex-1 min-w-[50%]">

      <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-semibold">G<span className="text-red-500">e</span>t in To<span className="text-blue-300">u</span>ch</h1>
 
      <div className="flex flex-row gap-4 mt-7 cursor-pointer ">
       <a href="https://github.com/parasss19" target="blank"> <FontAwesomeIcon icon={faGithub}  className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a>
       <a href="https://www.linkedin.com/in/paras-mehta19/" target="blank"> <FontAwesomeIcon icon={faLinkedin}   className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a>
       <a href="https://twitter.com/ParasMe12853105" target="blank"> <FontAwesomeIcon icon={faTwitter}   className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a> 
       <a href="https://discordapp.com/users/929032026978398238" target="blank"><FontAwesomeIcon icon={faDiscord}  className="w-7 h-7  hover:text-black-500/80 rounded-full" /> </a>  
      </div>

      <form onSubmit={handleSubmit}  className="w-full lg:w-[80%] flex flex-col gap-7 mt-14 "  >
      
          <label className="text-black-500 font-semibold"> Name
            <input 
            className="bg-white border outline-none border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal ;"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            required
            onChange={handleChange}
            />
          </label>

          <label className="text-black-500 font-semibold"> Email
            <input 
            className="bg-white outline-none border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal ;"
            type="text"
            name="email"
            placeholder="Your Email"
            value={form.email}
            required
            onChange={handleChange}
            />
          </label>

          <label className="text-black-500 font-semibold"> Your Message
            <textarea 
            className="bg-white outline-none border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal ;"
            rows={4}
            name="message"
            placeholder="Let me know how I can help you!"
            value={form.message}
            required
            onChange={handleChange}
            />
          </label>

          <button
            className=" text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit" 
            disabled={isLoading}
          >

          {isLoading ? "Sending..." : "Send Message"}

          </button>
      </form>

    </div>
   </section>
  )
}

export default Contact
