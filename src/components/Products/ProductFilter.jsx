import React from 'react'

const ProductFilter = () => {
  return (
    <div className='flex justify-between items-center bg-gray-100 p-4 rounded-md mb-8'>
      {/* Left section: View Toggles and Results */} 
      <div className='flex items-center space-x-4'>
        {/* View Toggles */}
        <div className='flex space-x-2 text-gray-600'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3"/><rect width="7" height="7" x="14" y="3"/><rect width="7" height="7" x="14" y="14"/><rect width="7" height="7" x="3" y="14"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-collapse"><path d="M11 12H3"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="M16 6H3"/><path d="M22 6h-2"/><path d="M22 18h-2"/><path d="M16 18H3"/></svg>
        </div>
        <div className='h-6 w-px bg-gray-300'></div> {/* Divider */} 
        <span className='text-gray-700'>Showing 1–12 of 21 results</span>
      </div>

      {/* Right section: Show and Sort By dropdowns */} 
      <div className='flex items-center space-x-4'>
        <div className='flex items-center space-x-2'>
          <label htmlFor="show-select" className='text-gray-700'>Show</label>
          <select id="show-select" className='border border-gray-300 rounded-md p-2 bg-white'>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>

        <div className='flex items-center space-x-2'>
          <label htmlFor="sort-select" className='text-gray-700'>Sort By</label>
          <select id="sort-select" className='border border-gray-300 rounded-md p-2 bg-white'>
            <option value="default">Default sorting</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter