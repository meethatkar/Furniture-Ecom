import { Clock, Clock10, Wallet } from 'lucide-react'
import React from 'react'

const Features = () => {
  
  const data = [
    {
      icon_tag: <Clock size={40} />,
      feature_name: "Free Delivery",
      feature_desc: "For all orders over $50, consectetur adipim scing elit."
    },
    {
      icon_tag: <Wallet size={40} />,
      feature_name: "Secure Payment",
      feature_desc: "100% secure payment, consectetur adipim scing elit."
    },
    {
      icon_tag: <Clock10 size={40} />,
      feature_name: "90 Days Return",
      feature_desc: "If goods have problems, consectetur adipim scing elit."
    },
  ]
  return (
    <div className='flex items-center justify-center gap-[5%] px-[5vw] py-[5%] bg-[#FCF6F2] '>
      {data.map((single_data)=>(
        <div className="feature-dets w-4/12 flex items-start gap-[5%]">
          {single_data.icon_tag}
          <div className="f-dets w-9/12 text-start">
            <h3 className='text-[1.8vw] leading-none mb-[6%] font-semibold'> {single_data.feature_name} </h3>
            <p className='text-[1.1vw] text-black/60'> {single_data.feature_desc} </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features