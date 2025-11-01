import React, { useEffect, useState, useRef } from 'react'
import { useProduct } from '../../Context/Products/ProductContext'
import { useParams } from 'react-router';
import { Heart, Minus, Plus } from 'lucide-react';
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { useWishlist } from '../../Context/Shopping/Wishlist';
import { useCart } from '../../Context/Shopping/Cart';
import { toast, ToastContainer } from 'react-toastify';


const ProductDets = () => {
  const productContextObj = useProduct();
  const [selectedProducted, setSelectedProducted] = useState([]);
  const [avgRating, setAvgRating] = useState({});
  const [CartNum, setCartNum] = useState(1);
  const [currentIdx, setCurrentIdx] = useState(0);
  const routerObj = useParams("slug");
  const imgSilderRef = useRef(null);
  const  {addProduct, removeProduct, isInWishlist} = useWishlist();
  const {isProductCart, addToCart, removeFromCart} = useCart();

  // RATINGS STARS
  const getAverageRating = (ratingObj) => {
    const values = Object.values(ratingObj);
    const sum = values.reduce((acc, val) => (acc + val), 0);
    return values.length ? sum / values.length : 0;
  }

  const renderStars = (avg) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (avg >= i) {
        // i.e 3.589 > 1 yes, 3.589 > 2 yes, 3.589 > 3 yes, so render full stars, 3.589 > 4 no, then go to else if
        stars.push(<span key={i}> <FaStar /></span>);   //Full Star
      }
      else if (avg >= i - 0.5) {
        // 3.589 >= 4-0.5==> 3.5 yes, render half star, 3.589 >= 5 no, then goto else 
        stars.push(<span key={i}> <FaStarHalfStroke /></span>);    //half star
      }
      else {
        stars.push(<span key={i}><FaRegStar /> </span>)
      }
    }
    return stars;
  }

  // IMAGE SILDING
  const sildeImg = (idx) => {
    setCurrentIdx(idx);
  };

  // WISHLIST AND CART 
  const changeWishlist = ()=>{
    if(!isInWishlist(selectedProducted[0].product_name)){
      addProduct(selectedProducted[0]);
      toast.success("Product Added to Wishlist");
    }
    else{
      removeProduct(selectedProducted[0].product_name);
      toast.warning("Product Removed to Wishlist");
    }
  }

  const toggleCart =()=>{
    if(!isProductCart(selectedProducted[0].product_name)){
      addToCart(selectedProducted[0],CartNum);
      toast.success("Product Added to Cart");
    }
    // else{
    //   removeFromCart(selectedProducted[0].product_name);
    // }
  }

  useEffect(() => {
    let temp = productContextObj.products.filter((p) => { return p.product_name === routerObj.slug.replaceAll("_", " ") });
    if (temp) {
      setSelectedProducted(temp);
      setAvgRating(getAverageRating(temp[0].customer_rating));
    }
  }, [])


  return (
    <>
      {selectedProducted.length > 0 ?
        <div className='px-[5vw] flex flex-col md:flex-row items-start w-full gap-[5%] my-[2%]'>

          {/* IMAGE DIV */}
          <div id="img-div" className='flex flex-col-reverse md:flex-row items-start justify-between w-full md:w-1/2'>
            <div id="img-preview" className='w-[20%] flex md:flex-col flex-row gap-[30%] md:gap-0'>
              {/* List of other images in small size */}
              <img src={selectedProducted[0].product_img} alt="" className='border-[1px] border-gray-400 mb-[20%]' type="button" onClick={() => { sildeImg(0) }} />
              {selectedProducted[0].more_imgs.map((img, i) => (
                <img key={i} src={img} alt="" className='border-[1px] border-gray-400 mb-[20%]' type="button" onClick={() => { sildeImg(i + 1) }} />
              ))}
            </div>
            <div id="img-slider" className='w-full md:w-[75%] overflow-hidden'>
              <div ref={imgSilderRef} style={{display: "flex", transition: "0.3s", transform: `translateX(-${currentIdx * 100}%)`}}>
                <img src={selectedProducted[0].product_img} alt="" className='w-full object-cover'/>
                {selectedProducted[0].more_imgs.map((img, i) => (
                  <img key={i} src={img} alt="" className='w-full object-cover'/>
                ))}
              </div>
            </div>
          </div>

          {/* TEXT DIV */}
          <div id="text-div" className='w-full md:w-1/2 mt-[5%] md:mt-0'>
            <h2 className='text-5xl font-semibold'> {selectedProducted[0].product_name}</h2>
            <h5 className='text-3xl font-semibold text-yellow-600 my-[1%]'> {selectedProducted[0].product_price} </h5>
            {/* Customer Review */}
            <h5 className='flex items-center gap-[2%]'>
              <div className='flex'>{renderStars(avgRating)}</div>
              {Object.keys(selectedProducted[0].customer_rating).length} Reviews </h5>
            <p className='text-gray-400 text-base mt-[1%] mb-[5%]'> {selectedProducted[0].product_description} </p>
            {/* Size & Color */}
            <div id="size-selector">
              {selectedProducted[0].size.map((s) => (
                <button className='px-2 py-1 border-[2px] border-gray-400 mr-[2%] '> {s} </button>
              ))}
            </div>
            <div id="color-selector">
              {selectedProducted[0].clr_arr.map((clr) => (
                <button style={{ backgroundColor: clr, color: clr }} className="px-2 py-0.8 border-[2px] border-gray-400 mr-[2%] my-[2%]"> b </button>
              ))}
            </div>
            {/* Cart */}
            <div id="functional-div" className='flex items-center gap-[3%] mt-[2%]'>
              <span className='flex items-center border-[1px] pl-2 pr-8 py-1 w-fit'>
                <button
                  onClick={() => {
                    setCartNum((prev) => {
                      if (prev <= 1) { return 1 }
                      else { return prev - 1 }
                    }
                    )
                  }}
                > <Minus /> </button>
                <p className='text-2xl mx-[20%]'>{CartNum}</p>
                <button onClick={() => {setCartNum(prev=>prev+1)}}> <Plus /> </button>
              </span>
              <button className='bg-black/80 text-white font-semibold px-3 py-1.5 text-xl' onClick={toggleCart}> Add To Cart </button>
            </div>
            {/* Wishlist */}
            <div id="wishlist-logic" className='flex items-center mt-[2%] gap-[2%]'>
              <button onClick={changeWishlist}> <Heart className={`${isInWishlist(selectedProducted[0].product_name) ? "fill-yellow-500" : ""}`} /> </button>
              <p className='text-xl'> add to wishlist </p>
            </div>
          </div>
        </div>
        :
        <div> Product Not Found </div>
      }
    </>
  )
}

export default ProductDets