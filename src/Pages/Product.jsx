import React, { useState } from 'react'
import ProductCategory from '../components/Products/ProductCategoryMenu'
import { ProductContextProvider, useProduct } from '../Context/Products/ProductContext'
import { Outlet } from 'react-router'
import ProductFilter from '../components/Products/ProductFilter';
import PaginationBar from '../components/Products/PaginationBar';
import { usePagination } from '../Context/PaginationContext';
import MobileProductFilter from '../components/Products/MobileProductFilter';
import { Search } from 'lucide-react';
import { FaFilter } from "react-icons/fa6";



const Product = () => {
  const { perPage, setPerPage, setCurrentPage, pageCount } = usePagination();
  const [showCategory, setShowCategory] = useState(false);

  const { setselectedCategory } = useProduct();
  const [searchedKey, setsearchedKey] = useState("");

  function getResult(searchedStr) {
    setselectedCategory([searchedStr, "search"]);
  }

  return (
    <div className='px-[5vw] w-screen font-sans flex justify-between my-[2%]'>
      <div id="product-left" className='w-full md:w-[70%] flex flex-col gap-[5%]'>
        <div id="filter-sec" className='w-full hidden md:block'>
          <ProductFilter perPage={perPage} setPerPage={setPerPage} setCurrentPage={setCurrentPage} />
        </div>
        <div id="filter-sec-mobile" className='mb-4'>
          <div className='flex  items-center gap-[5%]'>
            {showCategory ?
              <>
                {/* Toggle Button for Category Section (visible on mobile) */}
                <form className='relative'>
                  <input
                    type="text"
                    placeholder="Search ..."
                    className="w-full p-2 border border-gray-300 rounded-md pr-10 text-sm outline-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        setsearchedKey(e.target.value);
                        getResult(e.target.value);
                      }
                    }}
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" onClick={() => { getResult(searchedKey) }} size={18} />
                </form>
              </> :
              ""
            }
            <button
              className="md:hidden bg-yellow-500 text-white px-4 py-2 rounded w-fit mx-auto whitespace-nowrap flex items-center gap-[5%]"
              onClick={() => setShowCategory((prev) => !prev)}
              aria-expanded={showCategory}
              aria-controls="category-mobile"
            >
              <FaFilter className='scale-120' />
              {showCategory ? " Hide Filters" : "Show Filters"}
            </button>
          </div>
          {/* Category Section (mobile) */}
          {showCategory && (
            <div id="category-mobile" className="md:hidden block w-full mb-4">
              <MobileProductFilter />
            </div>
          )}
        </div >
        <div id="product-sec" className='w-full'>
          <Outlet />
          <PaginationBar setCurrentPage={setCurrentPage} pageCount={pageCount} />
        </div>
      </div>
      <div className='w-[25%] hidden md:block'>
        <ProductCategory />
      </div>
    </div>
  );
};

export default Product;