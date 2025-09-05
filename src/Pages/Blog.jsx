import React from 'react'
import { BlogContextProvider } from '../Context/Blogs/BlogContext';
import BlogPreview from '../components/Blog/BlogPreview';
import { Outlet, useParams } from 'react-router';
import BlogOverview from '../components/Blog/BlogOverview';

const Blog = () => {
  const routeObj = useParams();
  // console.log(routeObj);
  
  return (
  <BlogContextProvider>     {/* abhi iske ander jho bhi components hoge vho sab blog context ko access kar payege, use karne ko useBlog() hook ks istamal karna hoga*/}
    <h1 className='w-fit mx-auto text-[1.5vmax] leading-none font-Asimovian underline font-light my-[2%]'> BLOGS 
      <span className='font-TASA-Orbiter'>{routeObj.category ? (` > ${routeObj.category}`):" > ALL"}</span>
    </h1>
    <div className='flex md:flex-row flex-col-reverse justify-between w-screen px-[5vw]'>
    <div id="blogs" className='md:w-[73%] w-full'>
    <Outlet/>
    {/* <BlogPreview /> */}
    </div>
    <div id="blog-overview" className='md:w-3/12 w-full'>
      <BlogOverview/>
    </div>
    </div>
  </BlogContextProvider>
  )
}

export default Blog