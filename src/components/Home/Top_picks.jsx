import React from 'react'
import Button from '../Button'

const Top_picks = () => {
  let data_obj = [
    {
    img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-500x591.jpg",
    name: "Afterroom Coat Hanger",
    price : "$183.76",
    colors: ["#D1C4B3", "#B0D9B1", "#F5EEB8", "#E0BBE4", "#FFC7B0"]
    },
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-3-500x591.jpg",
      name : "Norm Stone Lamp",
      price : "$150.40",
      colors: ["#F0F8DC", "#D3D3D3", "#ADD8E6", "#FDF5E6", "#E6E6FA"]
    },
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-2-500x591.jpg",
      name: "Norm Wall Clock",
      price : "$101.21",
      colors: ["#696969", "#90EE90", "#F5F5DC", "#E6E6FA", "#B0E0E6"]
    },
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/Product-IMG-1-500x591.jpg",
      name: "Pack Bobber Lamps ",
      price: "$147.52",
      colors: ["#F0F8DC", "#696969", "#FDF5E6", "#E6E6FA", "#B0E0E6"]
    }
  ]
  return (
    <div className='w-screen px-[5vw] text-center my-[10%] md:my-[5%] font-TASA-Orbiter'>
      <h3 className='text-[3.5vmax] md:text-[2.5vmax] font-medium mb-[1%]'> Top Picks For You </h3>
      <p className='text-[1.8vmax]  md:text-[1.1vmax] text-black/50'> Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights. </p>
      <div id="product-wrapper" className='w-full grid grid-cols-2  lg:grid-cols-4 gap-x-[2%] gap-y-8 my-[5%] md:my-[3%]'>
        {
          data_obj.map((single_data,index)=>(
            <div className="product-det text-start group" key={index}>
              <span className='overflow-hidden block w-full'>
                <img
                  src={single_data.img_src}
                  alt=""
                  className='w-full h-full object-cover group-hover:scale-115 transition-all duration-500'
                  style={{ display: 'block' }}
                />
              </span>
              <p className='text-[2vmax] md:text-[1.3vmax] mt-[5%]'> {single_data.name} </p>
              <div className="flex gap-2 mt-2">
                {
                  single_data.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))
                }
              </div>
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