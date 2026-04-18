import React from 'react'

const Button = ({
  Customclass = "bg-black text-white text-[2.5vmax] md:text-[1.3vmax] font-medium px-8 py-3 hover:bg-yellow-600 transition-all ease-linear duration-300",
  message,
}) => {
  return (
    <div className={`${Customclass} w-fit mx-auto font-Inter whitespace-nowrap`}>
      {message}
    </div>
  )
}

export default Button