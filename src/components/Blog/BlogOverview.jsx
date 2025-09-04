import { Search } from 'lucide-react'
import React from 'react'
import { useBlog } from '../../Context/Blogs/BlogContext'
import { Link } from 'react-router';

const BlogOverview = () => {
    const { blog, category } = useBlog(); // Accessing category from BlogContext


    return (
        <div className="w-full">
            {/* Search Bar */}
            <div className="relative mb-10">
                <input
                    type="text"
                    placeholder="Search ..."
                    className="w-full p-3 border border-gray-300 rounded-md pr-10"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>

            {/* Categories Section */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Categories</h3>
                <ul>
                    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <Link to={"/blog"} className="text-gray-700 hover:underline hover:text-gray-800"> ALL </Link >
                            <span className="text-gray-500 text-sm"> {blog.length} </span> 
              </li>
                    {
                        category.map((cat, index) => (
                            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                                <Link to={cat.name} className="text-gray-700 hover:underline hover:text-gray-800">{cat.name}</Link>
                                <span className="text-gray-500 text-sm">{blog.filter((b) => (b.category === cat.name)).length}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default BlogOverview