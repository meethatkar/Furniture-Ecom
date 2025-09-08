import React, { useState, useEffect } from 'react'
import ProductCategory from '../components/Products/ProductCategoryMenu'
import { ProductContextProvider, useProduct } from '../Context/Products/ProductContext'
import { Outlet } from 'react-router'
import ProductFilter from '../components/Products/ProductFilter';

const Product = () => {


  return (
    <ProductContextProvider>
      <div className='px-[5vw] w-screen font-sans flex justify-between my-[5%]'>
        <div id="product-left" className='w-[70%] flex flex-col gap-[5%]'>
          <div id="filter-sec" className='w-full'>
            <ProductFilter />
          </div>
          <div id="product-sec" className='w-full'>
            <Outlet />
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