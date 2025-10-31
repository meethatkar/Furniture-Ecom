import React from 'react'
import { useWishlist } from '../Context/Shopping/Wishlist'
import ProductList from '../components/Wishlist/ProductList';

const Like = () => {
  const {wishlistProductList, removeProduct} = useWishlist();
  return (
    <div className='px-[5vw] py-[2%]'>
      {wishlistProductList.map((product)=>(
        <React.Fragment key={product.id}>
          <ProductList product={product} className="w-[70%]" isCartPage={false}/>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Like