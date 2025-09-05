import React from 'react'
import { useBlog } from '../../Context/Blogs/BlogContext'
import { Calendar, Tag, User } from 'lucide-react';
import { Link, useParams } from 'react-router';

const BlogPreview = (
  {
    blog
  }
) => {

    
  return (
    <div className='w-full'>
        {blog.map((singleBlog)=>(
            <div className="blog-preview text-start mb-[10%] md:mb-[5%]" key={singleBlog.id}>
                <Link to={`blog-dets/${singleBlog.id}`}> <img src={singleBlog.img_src} alt="" className='w-full h-[30vh] md:h-[80vh] object-cover mb-[2%] md:mb-[1%]'/> </Link>
                <span className='w-full flex items-center text-[1.9vmax] md:text-[0.9vmax] text-black/50  whitespace-nowrap'> <User className='mr-[1%] scale-80' />admin - <Calendar className='ml-[1%] mx-[1%] scale-80'/> {singleBlog.date} - <Tag className='-scale-x-80 scale-80 ml-[1%] mx-[1%]' /> {singleBlog.category} </span>
                <h2 className='text-[3.2vmax]  md:text-[2.5vmax] font-medium leading-none my-[2%] md:my-[1%]'> {singleBlog.title} </h2>
                <p className='text-[2vmax] md:text-[1.2vmax] text-black/50 mb-[2%]'> {singleBlog.previewDesc}  </p>
                <Link className='underline text-[2.5vmax] md:text-[1.5vmax] font-normal' to="/"> Read more </Link>
            </div>
        ))}
    </div>    
  )
}

export default BlogPreview