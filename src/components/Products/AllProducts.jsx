import React from 'react'
import ProductPreview from './ProductPreview'
import { useProduct } from '../../Context/Products/ProductContext'

const AllProducts = () => {
    const {products, categories, colors } = useProduct();
  return (
    <div>
        <ProductPreview products={products} categories={categories} colors={colors} />
    </div>
  )
}

export default AllProducts