import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useProduct } from '../../Context/Products/ProductContext';
import ProductPreview from './ProductPreview';
import { usePagination } from '../../Context/PaginationContext';

const CategoriesPageProduct = () => {
    const routeData = useParams();
    const {filteredProducts, categories, colors, setselectedCategory } = useProduct();
    
    // const  { currentProducts } = usePagination();

    // currentProducts.map((p)=>{
    //   p.category.forEach((cat)=>{
    //     if(cat===routeData.category){
    //       filteredData.push(p);
    //     }
    //   })
    // });

    useEffect(() => {
      if(routeData.category){
        setselectedCategory(routeData.category);
      }
    }, [routeData.category, setselectedCategory])
    

  if(filteredProducts.length>0){
    return (
      <div>
        <ProductPreview products={filteredProducts} categories={categories} colors={colors}/>
      </div>
    )
  }
  else{
    return(
      <p className='text-[2vmax] font-light'> No Product Yet !!! </p>
    )
  }
}

export default CategoriesPageProduct