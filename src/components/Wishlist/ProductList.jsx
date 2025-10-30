import React from 'react'
import { IoTrashBinOutline } from 'react-icons/io5';
import { ShoppingCart } from 'lucide-react';

const ProductList = ({product}) => {
  return (
    <div className="Wishlist-card w-[70%] max-h-[30vh] mx-auto py-4 px-4 border-b-2 border-b-gray-300 bg-slate-50 flex items-center gap-[5%]">
        <div id="img-wrapper" className='w-5/12 h-full overflow-hidden'>
          <img src={product.product_img} alt="" className='w-full h-full object-cover'/>
        </div>
        <div id="text-wrapper">
          <h2 className='text-4xl font-semibold'> {product.product_name} </h2>
          <h5 className='text-2xl font-semibold text-yellow-600'> {product.product_price} </h5>
          {/* Ratings as show in product-dets */}
          <div className="btns flex  gap-[5%] items-center">
            <button className='flex items-center bg-black/80 text-white px-4 py-1.5 rounded-md text-xl font-medium mt-[4%]'> Add To Cart <ShoppingCart className='ml-4'/> </button>
            <button className='flex items-center bg-red-600 text-white px-4 py-1.5 rounded-md text-xl font-medium mt-[4%]'> Remove <IoTrashBinOutline className='ml-4'/> </button>
          </div>
        </div>
      </div>
  )
}

export default ProductList