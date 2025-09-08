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
    const filteredData = blog.filter((b) => b.category === routeData.category);         //extracted category based data.
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
}

export default BlogCategory