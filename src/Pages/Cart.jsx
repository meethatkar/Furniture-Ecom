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
      <div className='flex w-full gap-[5%] relative'>
        <div id="product-list" className='w-8/12'>
          {cartedProducts.map((product) => (
            <React.Fragment key={product.id}>
              <ProductList product={product} className="w-full" isCartPage={true} />
            </React.Fragment>
          ))}
        </div>
        <div className='w-4/12'>
          <Checkout />
        </div>
      </div> : 
      <div className='w-full flex flex-col items-center'>
        <img src="https://www.shareicon.net/data/128x128/2015/09/04/95997_important_512x512.png" alt="" className='invert'/>
        <h2 className='text-3xl'> No Products Found </h2>
        <p className=' my-[1.5%] text-lg text-gray-500'> You have not added any product add first product now </p>
        <button className='px-[3.5%] py-[1%] bg-yellow-600/80 text-white font-medium text-xl'> 
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