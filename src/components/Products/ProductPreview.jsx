import React from 'react'
import ProductCard from './ProductCard';
import { PaginationProvider, usePagination } from '../../Context/PaginationContext';

const ProductPreview = () => {

  const { currentProducts } = usePagination();


  // DONE THIS CAUSE NEED TO ADD HOVER EFFECT ON IMG, USING useRef, but two issue occured.
  // !st:- when declared outside the .map(), when hovered on img all spans were sliding up.
  // 2nd issuse, i was declaring new useRef for every product (inside .map()), but The error "Rendered more hooks than during the previous render" occurs because React hooks like useRef and useState must be called at the top level of a functional component, not inside loops or conditional statements.
  // so done this.
  // here we are creating new prodcuts card for every product and using useRef in ProductCard.jsx 
  return (

    <div id="productPreview" className='w-full grid grid-cols-3 gap-[2%] pb-[10%]'>
      {currentProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>

  )
}

export default ProductPreview