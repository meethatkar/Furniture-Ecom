
import React, { useState } from 'react';
import { useProduct } from '../../Context/Products/ProductContext';
import { Search, Blocks, BetweenHorizonalEnd } from 'lucide-react';

const MobileProductFilter = ({
  perPage, setPerPage, setCurrentPage
}) => {
  const { products, categories, colors, setselectedCategory, selectedCategory, filteredProducts } = useProduct();
  const [searchedKey, setsearchedKey] = useState("");

  function getResult(searchedStr) {
    setselectedCategory([searchedStr, "search"]);
  }

  return (
    <div className="w-full px-2 py-4 bg-white rounded-md shadow-md md:hidden">
      {/* Search Bar */}
      <div className="relative mb-4">
        <form>
          <input
            type="text"
            placeholder="Search ..."
            className="w-full p-2 border border-gray-300 rounded-md pr-10 text-sm"
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
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Categories</h3>
        <ul>
          <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
            <span onClick={() => setselectedCategory("ALL")} className="text-gray-700 hover:underline hover:text-gray-800 text-sm"> ALL </span>
            <span className="text-gray-500 text-xs"> {products.length} </span>
          </li>
          {categories.map((cat, index) => (
            <li
              key={index}
              onClick={() => setselectedCategory(cat.name)}
              className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
            >
              <span className="text-gray-700 hover:underline hover:text-gray-800 text-sm">{cat.name}</span>
              <span className="text-gray-500 text-xs">{products.filter(pro => pro.category.includes(cat.name)).length}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* COLORS */}
      <div className="mb-6">
        <h3 className='text-lg font-bold mb-2'> Colors </h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((clr, i) => (
            <span key={i} style={{ background: clr.value }} className='border border-[#ccc] w-7 h-7 rounded-full hover:border-2 hover:scale-105 transition-all'></span>
          ))}
        </div>
      </div>

      {/* Filter & Pagination Section */}
      <div className='flex flex-col gap-4 bg-gray-50 p-3 rounded-md'>
        {/* View Toggles and Results */}
        <div className='flex items-center justify-between'>
          <span className='flex items-center gap-2 scale-90'>
            <Blocks size={18} />
            <BetweenHorizonalEnd size={18} />
          </span>
          <span className='text-gray-700 text-xs'>Showing {perPage} of {filteredProducts.length} results</span>
        </div>
        {/* Products Per Page Dropdown */}
        <div className='flex items-center justify-between'>
          <label htmlFor="PP" className='text-gray-700 text-xs'>Products Per Page</label>
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              setCurrentPage(0);
            }}
            className='border px-2 py-1 rounded text-xs'
            id="PP"
          >
            {[4, 8, 13].map((num) => (
              <option value={num} key={num}> {num} </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MobileProductFilter;