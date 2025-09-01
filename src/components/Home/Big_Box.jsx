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
    <div className='w-full my-[3%] flex px-[5vw] gap-[5%] font-TASA-Orbiter'>
      {data.map((single_data)=>(
        <div className="big-box relative">
          <img src={single_data.img_src} alt="" className='w-12/12'/>
          <div className="BB-text-div absolute bottom-[10%] left-[5%]">
            <h3 className='text-[2.8vw] font-medium mb-[5%]'> {single_data.text} </h3>
            <Link to="/shop" className='border-b-2 text-[1.2vw] font-medium font-Inter'> View More </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Big_Box