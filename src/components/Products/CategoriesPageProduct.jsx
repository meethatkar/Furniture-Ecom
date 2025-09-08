import React from 'react'
import { useParams } from 'react-router'
import { useProduct } from '../../Context/Products/ProductContext';
import ProductPreview from './ProductPreview';

const CategoriesPageProduct = () => {
    const routeData = useParams();
    const {products, categories, colors } = useProduct();
    let filteredData = []

    products.map((p)=>{
      p.category.forEach((cat)=>{
        if(cat===routeData.category){
          filteredData.push(p);
        }
      })
    });
    
  if(filteredData.length>0){
    return (
      <div>
        <ProductPreview products={filteredData} categories={categories} colors={colors}/>
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