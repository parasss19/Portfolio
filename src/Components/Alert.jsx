
const Alert = ({type, text}) => {
  return (
    <div className="absolute top-64 left-0 right-0 flex justify-center items-center">
       
       <div className= {`${type === 'danger' ? "bg-red-800" : "bg-blue-700"} text-white p-2 leading-none lg:rounded-full flex items-center lg:inline-flex`}>  
         
          {/* this p will show "failed"  or "successfull" in left side of our text*/}
          <p className= { `rounded-full uppercase font-semibold mr-3 px-3 text-xs  ${type === 'danger' ? "bg-red-500" : "bg-blue-500"} `}>    
          {type === "danger" ? "Failed" : "Success"}
          </p>
          
          {/* this p will show the text(message sent successfully or not) */}
          <p className="text-left mr-2">{text}</p>  
       </div>

    </div>
  )
}

export default Alert
