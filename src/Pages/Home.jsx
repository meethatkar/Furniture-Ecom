import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='w-screen font-Inter'>
      <div id="sec-1" className='bg-[#F5E5D7] h-screen w-full flex items-center justify-center gap-[5vw]'>
        <div id="sec-1-1" className='w-fit'>
          <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/rev_home1.png" alt="" />
          <h2 className='text-[6vw] font-semibold leading-none font-Asimovian my-[10%]'> Wooden <br /> Floor Lamp </h2>
          <Link to="/shop" className='text-[2vw] pb-[1.5%] font-medium border-b-3'> Shop Now </Link>
        </div>
        <div id="sec-1-2" className='w-fit'>
          <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/rev_home1_2.png" alt="" className='w-[71%]'/>
        </div>
      </div>
      
    </div>
  )
}

export default Home