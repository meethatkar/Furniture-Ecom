import React, { useState } from 'react'
import { useProduct } from '../../Context/Products/ProductContext';
import { BetweenHorizonalEnd, Blocks } from 'lucide-react';

const ProductFilter = ({
  perPage, setPerPage, setCurrentPage
}) => {
  const { filteredProducts, setselectedCategory } = useProduct();
  const [sortingVal, setsortingVal] = useState("Default Sorting");

  const handleSorting = (e)=>{
    setsortingVal(e.target.value);
    setselectedCategory([e.target.value, "sorting"]);
  }


  return (
    <div className='flex justify-between items-center bg-gray-100 p-4 rounded-md mb-8'>
      {/* Left section: View Toggles and Results */}
      <div className='flex items-center space-x-4'>
        {/* View Toggles */}
        <div className='text-gray-600'>
          {/* Use Lucide React icons instead of SVGs */}
          <span className='flex items-center gap-[15%] scale-85'>
            <i className="mr-1">
              <Blocks />
            </i>
            <i>
              <BetweenHorizonalEnd />
            </i>
          </span>
        </div>
        <div className='h-6 w-px bg-gray-300'></div> {/* Divider */}
        <span className='text-gray-700'>Showing {perPage} of {filteredProducts.length} results</span>
      </div>

      {/* Right section: Show and Sort By dropdowns */}
      {/* PRICE */}
      <div>
        <label htmlFor="PP" className='text-gray-700'> Products Per Page </label>
        <select
          value={perPage}     //taken from pagination context
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setCurrentPage(0);
          }}
          className='border px-2 py-1 rounded'
          id="PP"
        >
          {[4, 8, 13].map((num) => (
            <option value={num} key={num}> {num} </option>
          ))}
        </select>
      </div>

      {/* SORING */}
      <div className='flex items-center space-x-2'>
        <label htmlFor="sort-select" className='text-gray-700'>Sort By</label>
        <select id="sort-select" className='border border-gray-300 rounded-md p-2 bg-white outline-none' value={sortingVal} onChange={ handleSorting }>
          <option value="default">Default sorting</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
        </select>
      </div>
    </div>
  )
}

export default ProductFilter