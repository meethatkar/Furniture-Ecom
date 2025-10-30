import React from 'react'
import { IoTrashBinOutline } from 'react-icons/io5';
import { ShoppingCart } from 'lucide-react';
import { useWishlist } from '../../Context/Shopping/Wishlist';
import { useCart } from '../../Context/Shopping/Cart';

const ProductList = ({product}) => {

  const {removeProduct} = useWishlist();
  const {addToCart} = useCart();

  return (
    <div className="Wishlist-card w-[70%] max-h-[30vh] mx-auto py-4 px-4 border-b-2 border-b-gray-300 bg-[#F7F7F7] flex items-center gap-[5%] mb-[2%] overflow-hidden">
        <div id="img-wrapper" className='w-4/12 h-full overflow-hidden'>
          <img src={product.product_img} alt="" className='w-9/12 mx-auto'/>
        </div>
        <div id="text-wrapper">
          <h2 className='text-3xl font-semibold'> {product.product_name} </h2>
          <h5 className='text-xl font-semibold text-yellow-600'> {product.product_price} </h5>
          {/* Ratings as show in product-dets */}
          <div className="btns flex  gap-[5%] items-center">
            <button className='flex items-center bg-black/80 text-white px-4 py-1.5 rounded-md text-base font-medium mt-[4%] whitespace-nowrap cursor-pointer' 
            onClick={()=>{addToCart(product)}}> Add To Cart <ShoppingCart className='ml-4'/> </button>
            <button className='flex items-center bg-red-600/80 text-white px-4 py-1.5 rounded-md text-base font-medium mt-[4%] cursor-pointer' onClick={()=>{removeProduct(product.product_name)}}> Remove <IoTrashBinOutline className='ml-4'/> </button>
          </div>
        </div>
      </div>
  )
}

export default ProductList