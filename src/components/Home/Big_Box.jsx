import React from 'react'
import { Link } from 'react-router'

const Big_Box = () => {
  let data = [
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/h1_banner-1.jpg",
      text: "Chairs"
    },
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/h1_banner-2.jpg",
      text: "Lighting"
    }
  ]
  return (
    <div className='w-full my-[10%] md:my-[3%] flex flex-col md:flex-row px-[2vmax] md:px-[5vw] gap-[5%] font-TASA-Orbiter'>
      {data.map((single_data,index)=>(
        <div className="big-box relative group overflow-hidden my-[7%] md:my-0" key={index}>
          <img src={single_data.img_src} alt="" className='w-12/12 group-hover:blur-xs group-hover:scale-120 group-hover:-translate-x-[10%] transition-all ease-in-out duration-500'/>
          <div className="BB-text-div absolute bottom-[10%] left-[5%]">
            <h3 className='text-[3.8vmax] md:text-[2.8vmax] font-medium mb-[5%]'> {single_data.text} </h3>
            <Link to="/product" className='border-b-2 text-[2.2vmax] md:text-[1.2vmax] font-medium font-Inter'> View More </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Big_Box