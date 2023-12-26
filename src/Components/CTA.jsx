import { Link } from "react-router-dom"

const CTA = () => {
  return (
   <section className="w-full mt-9 sm:mt-16 flex items-center flex-col md:flex-row gap-7 md:gap-28">
    <p className="text-black-500 font-extrabold text-3xl text-center">Have a project in mind? <br className="sm:block hidden"/> Let's build something together</p>
   
    <Link to='/contact' className="btn"> Contact </Link>
   </section>
  )
}

export default CTA
