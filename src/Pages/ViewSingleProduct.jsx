import React from 'react'
import { ProductContextProvider } from '../Context/Products/ProductContext'
import ProductDets from '../components/Products/ProductDets'

const ViewSingleProduct = () => {
  return (
    <div>
      <ProductContextProvider>
        <ProductDets />
      </ProductContextProvider>
    </div>
  )
}

export default ViewSingleProduct