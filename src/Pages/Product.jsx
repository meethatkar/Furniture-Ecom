import React, { useState } from 'react'
import ProductCategory from '../components/Products/ProductCategoryMenu'
import { ProductContextProvider } from '../Context/Products/ProductContext'
import { Outlet } from 'react-router'
import ProductFilter from '../components/Products/ProductFilter';
import  PaginationBar  from '../components/Products/PaginationBar';
import { usePagination } from '../Context/PaginationContext';
import MobileProductFilter from '../components/Products/MobileProductFilter';


const Product = () => {
  const { perPage, setPerPage, setCurrentPage, pageCount } = usePagination();
  const [showCategory, setShowCategory] = useState(false);

  return (
    <ProductContextProvider>
      <div className='px-[5vw] w-screen font-sans flex justify-between my-[2%] relative'>
        <div id="product-left" className='w-full md:w-[70%] flex flex-col gap-[5%]'>
          <div id="filter-sec" className='w-full hidden md:block'>
            <ProductFilter perPage={perPage} setPerPage={setPerPage} setCurrentPage={setCurrentPage} />
          </div>
          <div id="filter-sec-mobile">
          {/* Toggle Button for Category Section (visible on mobile) */}
          <button
            className="md:hidden block bg-yellow-500 text-white px-4 py-2 rounded mb-4 w-fit mx-auto"
            onClick={() => setShowCategory((prev) => !prev)}
            aria-expanded={showCategory}
            aria-controls="category-mobile"
          >
            {showCategory ? 'Hide Categories' : 'Show Categories'}
          </button>
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
        <div className='w-[25%] hidden md:block sticky top-[10%]'>
          <ProductCategory />
        </div>
      </div>
    </ProductContextProvider>
  );
};

export default Product;