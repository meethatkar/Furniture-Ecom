import React, { useState } from 'react'
import ProductCategory from '../components/Products/ProductCategoryMenu'
import { ProductContextProvider } from '../Context/Products/ProductContext'
import { Outlet } from 'react-router'
import ProductFilter from '../components/Products/ProductFilter';
import  PaginationBar  from '../components/Products/PaginationBar';
import { usePagination } from '../Context/PaginationContext';

const Product = () => {

  // const [perPage, setPerPage] = useState(6);
  // const [currentPage, setCurrentPage] = useState(0);

  // // Page count in PaginationBar only
  //  const offset = currentPage * perPage;

  // // getting products for that page, using slice.

  const {perPage, setPerPage, setCurrentPage, pageCount} = usePagination();

  return (
    <ProductContextProvider>
      <div className='px-[5vw] w-screen font-sans flex justify-between my-[5%]'>
        <div id="product-left" className='w-[70%] flex flex-col gap-[5%]'>
          <div id="filter-sec" className='w-full'>
            <ProductFilter perPage={perPage} setPerPage={setPerPage} setCurrentPage = {setCurrentPage} />
          </div>
          <div id="product-sec" className='w-full'>
            <Outlet />
            <PaginationBar setCurrentPage={setCurrentPage} pageCount={pageCount} />
          </div>
        </div>
        <div className='w-[25%]'>
        <ProductCategory />
        </div>
      </div>
    </ProductContextProvider>
  )
}

export default Product