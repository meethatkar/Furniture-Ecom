import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useBlog } from '../../Context/Blogs/BlogContext'
import { Link, NavLink, useNavigate } from 'react-router';

const BlogOverview = () => {
    const { blog, category } = useBlog(); // Accessing category from BlogContext
    const navigate = useNavigate();
    const [searchedKey, setsearchedKey] = useState("")

    function getResult(val){
        // alert(val)
        navigate(`/blog/search?searchVal=${encodeURIComponent(val)}`);
    }

    return (
        <div className="w-full">
            {/* Search Bar */}
            <div className="relative mb-10">
                <form>
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="w-full p-3 border border-gray-300 rounded-md pr-10"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                            //   alert(e.target.value);
                              // optional: prevent form submit
                              e.preventDefault();
                              setsearchedKey(e.target.value);
                              getResult(e.target.value);
                            }
                          }}
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" onClick={()=>{getResult(searchedKey)}} size={20}/>
                </form>
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
                            <NavLink
                                key={index}
                                to={cat.name}
                                className={({ isActive }) =>
                                    `flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0 ${isActive ? "bg-gray-100 font-semibold px-[1%]" : ""}`
                                }
                            >
                                <span className="text-gray-700 hover:underline hover:text-gray-800">{cat.name}</span>
                                <span className="text-gray-500 text-sm">{blog.filter((b) => b.category === cat.name).length}</span>
                            </NavLink>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default BlogOverview