import React, { useEffect } from 'react'
import ProductPreview from './ProductPreview'
import { useProduct } from '../../Context/Products/ProductContext'
import { usePagination } from '../../Context/PaginationContext';

const AllProducts = () => {
    const {products, categories, colors } = useProduct();

    const { currentPage, perPage, offset, setPageCount, currentProducts,  setCurrentProducts} = usePagination();

    useEffect(() => {
      setPageCount(Math.ceil(products.length / perPage));
      setCurrentProducts(products.slice(offset, offset+perPage)); 
    }, [perPage, currentPage])
    

    console.log(currentPage, perPage, offset, currentProducts);
    
    
  return (
    <div>
        <ProductPreview products={currentProducts} categories={categories} colors={colors} />
    </div>
  )
}

export default AllProducts