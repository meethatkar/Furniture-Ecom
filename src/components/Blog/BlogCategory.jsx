import React from 'react'
import { Link, useParams } from 'react-router'
import { useBlog } from '../../Context/Blogs/BlogContext';
import { Calendar, Tag, User } from 'lucide-react';
import BlogPreview from './BlogPreview';
import SingleBlog from './SingleBlog';

const BlogCategory = () => {
    const routeData = useParams();          //return object which has category property.
    let hasId = false;

    const { blog } = useBlog();
    const filteredData = blog.filter((b) => b.category === routeData.category);
    if (Object.keys(routeData).length > 1) {
        // console.log(routeData);
        hasId = true;
    }
    else {
        // console.log("null");
        hasId = false;
    }




    if (!hasId) {
        return (<div>
            <BlogPreview blog={filteredData} />
        </div>
        )
    }
    else {
        return (
            <div>
                <SingleBlog />
            </div>
        )
    }
        // <div className='w-full'>
        //     {filteredData.map((blog) => (
        //         <div className="blog-preview text-start my-[5%]" key={blog.id}>
        //             <img src={blog.img_src} alt="" className='w-full h-[80vh] object-cover mb-[1%]' />
        //             <span className='w-full flex items-center text-[0.9vmax] text-black/50  whitespace-nowrap'> <User className='mr-[1%] scale-80' />admin - <Calendar className='ml-[1%] mx-[1%] scale-80' /> {blog.date} - <Tag className='-scale-x-80 scale-80 ml-[1%] mx-[1%]' /> {blog.category} </span>
        //             <h2 className='text-[2.5vmax] font-medium leading-none my-[1%]'> {blog.title} </h2>
        //             <p className='text-[1.2vmax] text-black/50 mb-[2%]'> {blog.previewDesc}  </p>
        //             <Link className='underline text-[1.5vmax] font-normal' to="/"> Read more </Link>
        //         </div>
        //     ))}
        // </div>
}

export default BlogCategory