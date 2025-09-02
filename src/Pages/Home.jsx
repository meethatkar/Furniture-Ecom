import React from 'react'
import { Link } from 'react-router'
import Big_Box from '../components/Home/Big_Box'
import Top_picks from '../components/Home/Top_picks'
import Button from '../components/Button'
import Blogs from '../components/Home/Blogs'

const Home = () => {
  return (
    <div className='w-screen font-TASA-Orbiter absolute  top-0'>
      <div id="sec-1" className='bg-[#F5E5D7] pt-[10%] overflow-hidden h-screen w-full flex items-center justify-center gap-[5vw]'>
        <div id="sec-1-1" className='w-fit'>
          <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/rev_home1.png" alt="" />
          <h2 className='text-[6vw] font-semibold leading-none font-Asimovian my-[10%]'> Wooden <br /> Floor Lamp </h2>
          <Link to="/shop" className='text-[2vw] pb-[1.5%] font-medium border-b-3'> Shop Now </Link>
        </div>
        <div id="sec-1-2" className='w-fit'>
          <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/rev_home1_2.png" alt="" className='w-[71%]'/>
        </div>
      </div>
      <div id="sec-2">
        <Big_Box />
      </div>
      <div id="sec-3">
        <Top_picks />
      </div>
      <div id="sec-4" className='w-screen px-[5vw] my-[5%] relative'>
        <img src="https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/h1_section-banner.jpg" alt="" className='w-full object-cover' />
        <div id="sec-4-text-div" className='absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
          <h4 className='text-[1.5vw] font-medium'> NEW ARRIVALS </h4>
          <h2 className='text-[4vw] font-semibold my-[2%]'> Classical Decor </h2>
          <Button message="Order Now" Customclass='bg-transparent border-2 px-[6%] mt-[3%] hover:text-yellow-600 hover:border-yellow-600 transition-all ease-linear duration-300 font-medium text-[1.5vw] py-[1.7%] font-Inter'/>
        </div>
      </div>
      <div id="sec-5">
        <Blogs />
      </div>
      <div id="sec-6" className='relative w-screen my-[5%]'>
        <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/h1_section-banner-2.jpg" alt="" className='w-full' />
        <div id="sec-6-text-div" className='absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-[3vw] font-medium leading-none'> Out Instagram </h2>
          <p className='my-[4%] text-[1.1vw] text-black/50'> Follow our store on Instagram </p>
          <a href="#" target='_blank' className='font-Inter text-[1.1vw] border-b-1 pb-1'> Follow Us </a>
        </div>
      </div>
    </div>
  )
}

export default Home