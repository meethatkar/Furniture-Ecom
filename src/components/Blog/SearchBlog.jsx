import React from 'react'
import {  useSearchParams } from 'react-router'
import { useBlog } from '../../Context/Blogs/BlogContext';
import BlogPreview from './BlogPreview';

const SearchBlog = () => {
    const [routeObj] = useSearchParams();
    // const [searchParams, setSearchParams] = useSearchParams();
    //just like useState
    const routeVal = routeObj.get('searchVal');     //searchVal is key.

    const {blog} = useBlog();

    const filteredData = blog.filter((b)=>(b.category.toLowerCase()==routeVal.toLowerCase() || b.title.toLowerCase().includes(routeVal.toLowerCase())));
    console.log(filteredData);
    
    
  return (
    <div>
      {filteredData.length===0? <div>
        <h1 className='w-fit mx-auto text-[1vw]'> No result Found !! </h1>
         </div> : <BlogPreview blog={filteredData} />}
    </div>
  )
}

export default SearchBlog