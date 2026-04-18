import React from 'react'
import { BlogContextProvider } from '../Context/Blogs/BlogContext';
import BlogPreview from '../components/Blog/BlogPreview';
import { Outlet, useParams } from 'react-router';
import BlogOverview from '../components/Blog/BlogOverview';
import SEO from '../components/SEO';

const Blog = () => {
  const routeObj = useParams();

  return (
    <BlogContextProvider>
      <SEO
        title="Furniture & Interior Design Blog — Urbanwoods"
        description="Read expert tips, interior design ideas, and furniture guides on the Urbanwoods blog. Discover how to style your home with modern and classic furniture."
        keywords="furniture blog, interior design tips, home decor ideas, furniture buying guide, urbanwoods blog"
        ogUrl="https://urbanwood-rosy.vercel.app/blog"
        canonicalUrl="https://urbanwood-rosy.vercel.app/blog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Urbanwoods Blog",
          "url": "https://urbanwood-rosy.vercel.app/blog",
          "description": "Interior design tips, furniture guides, and home decor inspiration from Urbanwoods.",
          "publisher": {
            "@type": "Organization",
            "name": "Urbanwoods",
            "logo": "https://urbanwood-rosy.vercel.app/logo.png"
          }
        }}
      />
      <h1 className='w-fit mx-auto text-[3vmax] md:text-[1.5vmax] leading-none font-Asimovian underline font-light my-[2%]'> BLOGS
        <span className='font-TASA-Orbiter'>{routeObj.category ? (` > ${routeObj.category}`) : " > ALL"}</span>
      </h1>
      <div className='flex md:flex-row flex-col-reverse justify-between w-screen px-[5vw]'>
        <div id="blogs" className='md:w-[73%] w-full'>
          <Outlet />
          {/* <BlogPreview /> */}
        </div>
        <div id="blog-overview" className='md:w-3/12 w-full'>
          <BlogOverview />
        </div>
      </div>
    </BlogContextProvider>
  )
}

export default Blog