import React from 'react'
import Button from '../Button'

const Top_picks = () => {
  let data_obj = [
    {
    img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-500x591.jpg",
    name: "Afterroom Coat Hanger",
    price : "$183.76"
    },
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-3-500x591.jpg",
      name : "Norm Stone Lamp",
      price : "$150.40"
    },
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-2-500x591.jpg",
      name: "Norm Wall Clock",
      price : "$101.21"
    },
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-1-500x591.jpg",
      name: "Pack Bobber Lamps ",
      price: "$147.52"
    }
  ]
  return (
    <div className='w-screen px-[5vw] text-center my-[5%] font-TASA-Orbiter'>
      <h3 className='text-[2.5vw] font-medium mb-[1%]'> Top Picks For You </h3>
      <p className='text-[1.1vw] text-black/50'> Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights. </p>
      <div id="product-wrapper" className='w-full flex gap-[1%] my-[3%]'>
        {
          data_obj.map((single_data)=>(
            <div className="product-det w-3/12 text-start">
              <img src={single_data.img_src} alt="" className='w-11/12'/>
              <p className='text-[1.3vw] mt-[5%]'> {single_data.name} </p>
              <h5 className='font-semibold'> {single_data.price} </h5>
            </div>
          ))
        }
      </div>
      <Button message="View More" />
    </div>
  )
}

export default Top_picks