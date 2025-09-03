import { Calendar, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import Button from '../Button'

const Blogs = () => {

  const data = [
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-1-740x415.jpg",
      title : "Going all-in with millennial design",
      date : "August 3, 2024"
    },
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-2-740x415.jpg",
      title : "Exploring new ways of decorating",
      date : "July 2, 2025"
    },
    {
      img_src : "https://demothemedh.b-cdn.net/kosi/wp-content/uploads/2021/08/blog-3-740x415.jpg",
      title : "Handmade pieces that took time to make",
      date : "August 25, 2025"
    }
  ]
  return (
    <div className='text-center w-screen my-[10%] md:my-0 px-[5vw]'>
      <h2 className='text-[5vmax] md:text-[3vmax] font-medium'> Our Blogs </h2>
      <p className='text-[2.2vmax]  md:text-[1.2vmax] text-black/50'> Find a bright ideal to suit your taste with our great selection </p>
      <div id="blogs-sec" className='flex md:flex-row flex-col w-full md:gap-[2%] justify-center my-[4%]'>
        {
          data.map((single_data,index)=>(
            <div className="blog-dets w-full md:w-4/12 group my-[4%] md:my-0" key={index}>
              <div className='overflow-hidden mb-[5%]'><img src={single_data.img_src} alt="" className='scale-120 transition-all duration-300 ease-linear group-hover:rotate-[5deg] group-hover:scale-140'/></div>
              <p className='flex w-fit mx-auto text-black/50'> <User className='scale-75' />admin -  <Calendar className='scale-75' /> {single_data.date} </p>
              <h4 className='my-[1%] text-2[2.4vmax] md:text-[1.4vmax] font-semibold'> {single_data.title} </h4>
              <Link to="/about" className='text-[2.3vmax] md:text-[1.3vmax] border-b-2 text-black/80'> Read More </Link>
            </div>
          ))
        }
      </div>
      <Button message="View More"/>
    </div>
  )
}

export default Blogs