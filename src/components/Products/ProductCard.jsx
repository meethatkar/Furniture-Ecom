import React, { useRef, useState } from 'react';
import { Heart, Search, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../../Context/Shopping/Wishlist';
import { Link } from 'react-router';
import { useCart } from '../../Context/Shopping/Cart';

const ProductCard = ({ product }) => {
  const imgSpanRef = useRef(null);
  const imgRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const wishlistContextObj = useWishlist();
  const {addToCart, removeFromCart, isProductCart} = useCart();

  const toggleWishlist = ()=>{
    if(!wishlistContextObj.isInWishlist(product.product_name)){
      wishlistContextObj.addProduct(product);
      // Add react toastify
    }
    else{
      wishlistContextObj.removeProduct(product.product_name);
    }
  }

  const toggleCart = ()=>{
    if(!isProductCart(product.product_name)){
      addToCart(product);
    }
    else{
      removeFromCart(product.product_name);
    }
  }

  return (
    <div className="product-view w-full flex flex-col" key={product.id}>
      <span
        ref={imgSpanRef}
        className='w-full overflow-hidden relative group'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/product/${product.product_name.replaceAll(" ","_")}`}> <img ref={imgRef} src={product.product_img} alt="" className='h-full flex-grow object-cover'/> </Link>
        <span className={`flex scale-[120%] items-center w-full justify-center gap-[10%] absolute bottom-0 z-10 left-0 right-0 transform transition-all duration-300 ease-in-out ${isHovered ? '-translate-y-[80%] opacity-100' : 'translate-y-full opacity-0'}`}>
          <ShoppingCart className= {`${isProductCart(product.product_name) ? "text-yellow-600" : ""} hover:text-yellow-600 transition-colors duration-200`} 
          type='button' onClick={toggleCart}/>
          <Heart className={`${wishlistContextObj.isInWishlist(product.product_name) ? "text-yellow-600": "hover:text-yellow-600"} transition-colors duration-200`} type='button' onClick={toggleWishlist}/>
          <Search className='hover:text-yellow-600 transition-colors duration-200' />
        </span>
      </span>
      <p className='text-[2vmax] md:text-[1.3vmax] font-light mt-[5%]'> {product.product_name} </p>
      <div className="clr-div flex gap-2 my-2">
        {product.clr_arr.map((clr, i) => (
          <span
            key={i}
            style={{ backgroundColor: clr, display: 'inline-block', width: '1vmax', height: '1vmax', borderRadius: '9999px', border: '1px solid #ccc' }}
          ></span>
        ))}
      </div>
      <h5 className='font-semibold text-[2vmax] md:text-[1.3vmax]'> {product.product_price} </h5>
    </div>
  );
};

export default ProductCard;
