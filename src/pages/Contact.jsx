import { useState , useRef} from "react"
import { Island } from "../models"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()

  const[form , setForm] = useState({name:'' , email:'' , message:''})     //it is used to update name, email and message input
  const[isLoading, setIsLoading] = useState(false)                        //it is used to update button text ("send message" or "sending..." based on isLoading)

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

      //clean the form after submiting
      setForm({name:'' , email:'' , message:''} );
    })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
    });

  }


  //handle when we click on any input field (will be used for the FOX motion)
  const handleFocus = ()=> {

  }
  //handle when we click out any input field (will be used for the FOX motion)
  const handleBlur = ()=> {

  }


  return (
   <section className="relative flex flex-col lg:flex-row max-w-5xl min-h-[calc(100vh-80px)] mx-auto px-8 pt-32 pb-12 ">

    {/*First Part*/}
     <div className="flex flex-col flex-1 min-w-[50%]">

      <h1 className="font-poppins text-3xl font-semibold">Get in Touch</h1>

      <form onSubmit={handleSubmit}  className="w-full flex flex-col gap-7 mt-14"  >
        
        <label className="text-black-500 font-semibold"> Name
          <input 
          className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal ;"
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          required
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>

        <label className="text-black-500 font-semibold"> Email
          <input 
          className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal ;"
          type="text"
          name="email"
          placeholder="Your Email"
          value={form.email}
          required
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>

        <label className="text-black-500 font-semibold"> Your Message
          <textarea 
          className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal ;"
          rows={4}
          name="message"
          placeholder="Let me know how I can help you!"
          value={form.message}
          required
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>

        <button
          className=" text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center;"
          type="submit" 
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
         {isLoading ? "Sending..." : "Send Message"}
        </button>

      </form>

     </div>


    {/*Second Part FOX */}


   </section>
  )
}

export default Contact




