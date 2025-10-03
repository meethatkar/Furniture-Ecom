import React, { useState, useEffect } from 'react'
import { useProduct } from '../../Context/Products/ProductContext'
import { Search } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const ProductCategory = ({ }) => {
    const { products, categories, colors, setselectedCategory, selectedCategory } = useProduct();
    // console.log(products, categories, colors);

    const [searchedKey, setsearchedKey] = useState("");
    function getResult(searchedStr){
        setselectedCategory([searchedStr, "search"]);
    }

    return (
        <div className='w-full'>
            {/* Search Bar */}
            <div className="relative mb-[5%]">
                <form>
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="w-full p-3 border border-gray-300 rounded-md pr-10"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                setsearchedKey(e.target.value);
                                getResult(e.target.value);
                            }
                        }}
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" onClick={() => { getResult(searchedKey) }} size={20} />
                </form>
            </div>
            {/* Categories Section */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold mb-[2%]">Categories</h3>
                <ul>
                    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <li onClick={()=>setselectedCategory("ALL")} className="text-gray-700 hover:underline hover:text-gray-800"> ALL </li >
                        <span className="text-gray-500 text-sm"> {products.length} </span>
                    </li>
                    {
                        categories.map((cat, index) => (
                            <li
                                key={index}
                                // to={cat.name}
                                onClick={()=>setselectedCategory(cat.name)}
                                className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                            >
                                <span className="text-gray-700 hover:underline hover:text-gray-800">{cat.name}</span>
                                {/* LOGIC TO DISPALY PRODUCT COUNT */}
                                <span className="text-gray-500 text-sm">{products.filter(pro => pro.category.includes(cat.name)).length}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* COLORS */}
            <div id="colors">
                <h3 className='text-2xl font-bold mb-[5%]'> Colors </h3>
                {colors.map((clr, i) => (
                    <span key={i} style={{ background: clr.value, display: 'inline-block', width: '2vmax', height: '2vmax', borderRadius: "50%", marginRight: "5%", marginBottom: "5%" }} className='border-[1px] hover:border-[2px] border-[#ccc] hover:scale-105 hover:-translate-y-[10%] transition-all ease-linear duration-200'></span>
                ))}
            </div>
        </div>
    )
}

export default ProductCategory