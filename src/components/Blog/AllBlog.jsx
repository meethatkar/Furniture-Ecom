import React from 'react'
import BlogPreview from './BlogPreview'
import { useBlog } from '../../Context/Blogs/BlogContext'

const AllBlog = () => {
    const {blog} = useBlog();

  return (
    <div>
        <BlogPreview blog={blog} />
    </div>
  )
}

export default AllBlog