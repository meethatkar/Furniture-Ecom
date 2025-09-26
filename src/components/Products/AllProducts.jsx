import React, { useEffect } from 'react'
import ProductPreview from './ProductPreview'
import { useProduct } from '../../Context/Products/ProductContext'
import { usePagination } from '../../Context/PaginationContext';

const AllProducts = () => {
    const {filteredProducts, categories, colors } = useProduct();

    const { currentPage, setCurrentPage, perPage, offset, setPageCount, currentProducts,  setCurrentProducts} = usePagination();

    console.log(filteredProducts);
    

    useEffect(() => {
      setPageCount(Math.ceil(filteredProducts.length / perPage));
      setCurrentProducts(filteredProducts.slice(offset, offset+perPage)); 
    }, [perPage, currentPage, filteredProducts]);

    useEffect(()=>{
      setCurrentPage(0);
    }, [filteredProducts])

    
  return (
    <div>
        <ProductPreview products={currentProducts} categories={categories} colors={colors} />
    </div>
  )
}

export default AllProducts