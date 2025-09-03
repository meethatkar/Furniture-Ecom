import React from 'react'
import { Link } from 'react-router'
import Big_Box from '../components/Home/Big_Box'
import Top_picks from '../components/Home/Top_picks'
import Button from '../components/Button'
import Blogs from '../components/Home/Blogs'

const Home = () => {
  return (
    <div className='w-screen font-TASA-Orbiter -mt-[18%] md:-mt-[5%]'>
      <div id="sec-1" className='bg-[#F5E5D7] pt-[25%] md:pt-[10%] overflow-hidden md:h-[110vh] w-full flex md:flex-row flex-col items-center justify-center gap-[5vw]'>
        <div id="sec-1-1" className='w-fit md:mx-0 md:text-start text-center mx-auto'>
          <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/rev_home1.png" alt="" className='mx-auto md:mx-0 w-fit'/>
          <h2 className='text-[6vmax] font-semibold leading-none font-Asimovian my-[10%]'> Wooden <br /> Floor Lamp </h2>
          <Link to="/shop" className='text-[3vmax] md:text-[2vmax] pb-[1.5%] font-medium border-b-3'> Shop Now </Link>
        </div>
        <div id="sec-1-2" className='w-fit mt-[10%] md:mt-0'>
          <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/rev_home1_2.png" alt="" className='w-[71%] md:mx-0 mx-auto'/>
        </div>
      </div>
      <div id="sec-2">
        <Big_Box />
      </div>
      <div id="sec-3">
        <Top_picks />
      </div>
      <div id="sec-4" className='w-screen px-[5vw] my-[10%] md:my-[5%] relative'>
        <span className='w-fit inline-block overflow-hidden'>
        <img src="https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/h1_section-banner.jpg" alt="" className='md:w-full md:h-fit h-[50vh] object-cover hover:blur-sm hover:scale-102 hover:-translate-y-[2%] transition-all duration-500 ease-in-out' />
        </span>
        <div id="sec-4-text-div" className='absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
          <h4 className='text-[1.5vmax] font-medium'> NEW ARRIVALS </h4>
          <h2 className='text-[4vmax] font-semibold my-[2%] whitespace-nowrap'> Classical Decor </h2>
          <Button message="Order Now" Customclass='bg-transparent border-2 px-[6%] mt-[3%] hover:text-yellow-600 hover:border-yellow-600 transition-all ease-linear duration-300 font-medium text-[2vmax] md:text-[1.5vmax] py-[1.7%] font-Inter'/>
        </div>
      </div>
      <div id="sec-5">
        <Blogs />
      </div>
      <div id="sec-6" className='relative w-screen my-[10%] md:my-[5%]'>
        <img src="https://demo.leebrosus.com/kosi/wp-content/uploads/2021/08/h1_section-banner-2.jpg" alt="" className='md:w-full h-[20vh] md:h-fit' />
        <div id="sec-6-text-div" className='absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h2 className='text-[4vmax] md:text-[3vmax] font-medium leading-none'> Out Instagram </h2>
          <p className='my-[4%] text-[2.1vmax] whitespace-nowrap md:text-[1.1vmax] text-black/50'> Follow our store on Instagram </p>
          <a href="#" target='_blank' className='font-Inter text-[2.1vmax md:text-[1.1vmax] border-b-1 pb-1'> Follow Us </a>
        </div>
      </div>
    </div>
  )
}

export default Home