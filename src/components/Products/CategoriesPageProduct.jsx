import React from 'react'
import { useParams } from 'react-router'
import { useProduct } from '../../Context/Products/ProductContext';

const CategoriesPageProduct = () => {
    const routeData = useParams();
    const {products} = useProduct();
    let filteredData = []

    products.map((p)=>{
      p.category.forEach((cat)=>{
        if(cat===routeData.category){
          filteredData.push(p);
        }
      })
    });
    
    console.log(filteredData);
    
    
  return (
    <div>CategoriesPageProduct</div>
  )
}

export default CategoriesPageProduct