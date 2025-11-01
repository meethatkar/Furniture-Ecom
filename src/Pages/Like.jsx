import React from 'react'
import { useWishlist } from '../Context/Shopping/Wishlist'
import ProductList from '../components/Wishlist/ProductList';
import { Link } from 'react-router';

const Like = () => {
  const { wishlistProductList, removeProduct } = useWishlist();
  return (
    <div className='px-[5vw] py-[2%]'>
      {
        wishlistProductList.length > 0 ?
          <div>
            {wishlistProductList.map((product) => (
              <React.Fragment key={product.id}>
                <ProductList product={product} className="w-[70%]" isCartPage={false} />
              </React.Fragment>
            ))}
          </div>
          :
          <div className='w-full flex flex-col items-center'>
            <img src="https://www.shareicon.net/data/128x128/2015/09/04/95997_important_512x512.png" alt="" className='invert md:scale-100 scale-70' />
            <h2 className='text-xl md:text-3xl'> No Products Found </h2>
            <p className='w-10/12 md:w-full my-[5%] md:my-[1.5%] text-lg text-gray-500 text-center'> You have not added any product add first product now </p>
            <button className='mt-[3%] md:mt-0 px-[3.5%] py-[1%] bg-yellow-600/80 text-white font-medium text-xl'>
              <Link to="/product">
                Shop Now
              </Link>
            </button>
          </div>
      }
    </div>
  )
}

export default Like