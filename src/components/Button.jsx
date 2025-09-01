import React from 'react'

const Button = ({
  className = "bg-black text-white text-[1.3vw] font-medium px-[3%] py-[0.8%] hover:bg-yellow-600 transition-all ease-linear duration-500",
  message,
}) => {
  return (
    <div className={`${className} w-fit mx-auto font-Inter`}>
      {message}
    </div>
  )
}

export default Button