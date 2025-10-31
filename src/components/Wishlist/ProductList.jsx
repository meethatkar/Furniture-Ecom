import React, { useEffect, useState } from 'react'
import { IoTrashBinOutline } from 'react-icons/io5';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../../Context/Shopping/Wishlist';
import { useCart } from '../../Context/Shopping/Cart';
import { FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6';
import { RxCross1 } from "react-icons/rx";

const ProductList = ({ product, className, isCartPage }) => {
  const [CartNum, setCartNum] = useState(1);
  const [avgRatings, setAvgRatings] = useState({});
  const { removeProduct } = useWishlist();
  const { addToCart, removeFromCart } = useCart();

  const getAvgRating = (ratingObj)=>{
    const values = Object.values(ratingObj);
    const sumRatings = values.reduce((acc, val)=>(acc+val), 0);
    return values.length > 0 ? (sumRatings/values.length) : 0;
  }

  const renderStars = (avg)=>{
    let stars = [];
    for (let i=1; i<=5; i++){
      if(avg >= i){
        stars.push(<span key={i}> <FaStar /> </span>);
      }
      else if(avg >= i-0.5){
        stars.push(<span key={i}> <FaStarHalfStroke /></span>)
      }
      else{
        stars.push(<span key={i}> <FaRegStar /> </span>)
      }
    }
    return stars;
  }

  useEffect(()=>{
    setAvgRatings(getAvgRating(product.customer_rating));
  }, [product]);

  return (
    <div className={`Wishlist-card min-h-[20vh] max-h-[40vh] mx-auto py-4 px-4 border-b-2 border-b-gray-300 bg-[#F7F7F7] flex items-center gap-[5%] mb-[2%] overflow-hidden ${className} relative`}>
      <div id="img-wrapper" className='w-4/12 h-full overflow-hidden'>
        <img src={product.product_img} alt="" className='w-9/12 mx-auto' />
      </div>
      <div id="text-wrapper">
        <h2 className='text-3xl font-semibold'> {product.product_name} </h2>
        <h5 className='text-xl font-semibold text-yellow-600'> ₹{product.product_price} </h5>
        {/* Ratings as show in product-dets */}
        <span className='flex gap-[1%] items-center my-[0.5%]'> 
          {renderStars(avgRatings)} 
          {Object.keys(product.customer_rating).length} Reviews
        </span>
        <div className="btns flex  gap-[5%] items-center">
          {isCartPage ? 
          <div className='flex flex-col mt-[5%]'>
             <p className='text-lg rounded-md flex items-center border-[1px] pl-2 pr-8 py-1 w-fit mb-[3%]'>
              OTY:- {product.quantity ? product.quantity : CartNum}
              </p>
               <button className='scale-150 absolute top-[7%] right-[3%] cursor-pointer opacity-40 hover:opacity-80 transition-all ease' onClick={() => { removeFromCart(product.product_name) }}> <RxCross1 /> </button>
          </div> :
            (<>
              <button className='flex items-center bg-black/80 text-white px-4 py-1.5 rounded-md text-base font-medium mt-[4%] whitespace-nowrap cursor-pointer'
                onClick={() => { addToCart(product) }}> Add To Cart <ShoppingCart className='ml-4' /> </button>
              <button className='flex items-center bg-red-600/80 text-white px-4 py-1.5 rounded-md text-base font-medium mt-[4%] cursor-pointer' onClick={() => { removeProduct(product.product_name) }}> Remove <IoTrashBinOutline className='ml-4' /> </button>
            </>)
          }
        </div>
      </div>
    </div>
  )
}

export default ProductList