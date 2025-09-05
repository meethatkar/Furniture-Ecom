import React from 'react'
import { useParams } from 'react-router'
import { useBlog } from '../../Context/Blogs/BlogContext';
import { Calendar, Tag, User } from 'lucide-react';

const SingleBlog = () => {
    const routeObj = useParams();

    const { blog } = useBlog();

    const singleBlog = blog.filter((b)=>b.id===routeObj.id);
    // console.log(singleBlog);
    
  return (
    <div>
        <img src={singleBlog[0].img_src} alt="" className='w-full'/>
        <span className='w-full flex items-center text-[1.9vmax] md:text-[0.9vmax] text-black/50  whitespace-nowrap'> <User className='mr-[1%] scale-80' />admin - <Calendar className='ml-[1%] mx-[1%] scale-80'/> {singleBlog[0].date} - <Tag className='-scale-x-80 scale-80 ml-[1%] mx-[1%]' /> {singleBlog[0].category} </span>
        <h2 className='text-[2.5vmax] font-medium mb-[1%]'> {singleBlog[0].title} </h2>
        {singleBlog[0].desc}
    </div>
  )
}

export default SingleBlog