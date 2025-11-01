import React from 'react'
import Checkout from '../components/Cart/Checkout'
import { useCart } from '../Context/Shopping/Cart'
import ProductList from '../components/Wishlist/ProductList';
import { Link } from 'react-router';

const Cart = () => {
  const { cartedProducts, setCartedProducts } = useCart();
  return (
    <div className='py-[2%] px-[5vw]'>
      {cartedProducts.length > 0 ? 
      <div className='flex flex-col md:flex-row w-full gap-[5%] relative'>
        <div id="product-list" className='w-full md:w-8/12'>
          {cartedProducts.map((product) => (
            <React.Fragment key={product.id}>
              <ProductList product={product} className="w-full" isCartPage={true} />
            </React.Fragment>
          ))}
        </div>
        <div className='w-full md:w-4/12'>
          <Checkout />
        </div>
      </div> : 
      <div className='w-full flex flex-col items-center'>
        <img src="https://www.shareicon.net/data/128x128/2015/09/04/95997_important_512x512.png" alt="" className='invert md:scale-100 scale-70'/>
        <h2 className='text-xl md:text-3xl'> No Products Found </h2>
        <p className='w-10/12 md:w-full my-[1.5%] text-base md:text-lg text-gray-500 text-center'> You have not added any product add first product now </p>
        <button className='mt-[3%] md:mt-0 px-[3.5%] py-[1%] bg-yellow-600/80 text-white font-medium text-base md:text-xl'> 
          <Link to="/product">
            Shop Now
          </Link>
        </button>
      </div>
      }
    </div>
  )
}

export default Cart