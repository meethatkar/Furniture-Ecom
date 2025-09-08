import React, { useRef, useState } from 'react';
import { Heart, Search, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const imgSpanRef = useRef(null);
  const imgRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="product-view w-full flex flex-col" key={product.id}>
      <span
        ref={imgSpanRef}
        className='w-full overflow-hidden relative group'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img ref={imgRef} src={product.product_img} alt="" className='h-full flex-grow object-cover'/>
        <span className={`flex scale-[120%] items-center w-full justify-center gap-[10%] absolute bottom-0 left-0 right-0 transform transition-all duration-300 ease-in-out ${isHovered ? '-translate-y-[80%] opacity-100' : 'translate-y-full opacity-0'}`}>
          <ShoppingCart className='hover:text-yellow-600 transition-colors duration-200' />
          <Heart className='hover:text-yellow-600 transition-colors duration-200' />
          <Search className='hover:text-yellow-600 transition-colors duration-200' />
        </span>
      </span>
      <p className='text-[1.3vmax] font-light mt-[5%]'> {product.product_name} </p>
      <div className="clr-div flex gap-2 my-2">
        {product.clr_arr.map((clr, i) => (
          <span
            key={i}
            style={{ backgroundColor: clr, display: 'inline-block', width: '1vmax', height: '1vmax', borderRadius: '9999px', border: '1px solid #ccc' }}
          ></span>
        ))}
      </div>
      <h5 className='font-semibold'> {product.product_price} </h5>
    </div>
  );
};

export default ProductCard;
