import React from 'react'
import { useProduct } from '../../Context/Products/ProductContext'

const ProductPreview = ({
  products,
  categories,
  colors,
}) => {
  // const { products, categories, colors } = useProduct();
  console.log(products, categories, colors);

  return (
    <div className='w-full grid grid-cols-3 gap-[2%] pb-[20%]'>
      {products.map((p,index) => (
        <div className="product-view w-full flex flex-col" key={index}>
          <span className='w-full'>
            <img src={p.product_img} alt="" className='h-full flex-grow object-cover'/>
          </span>
          <p className='text-[1.3vmax] font-light mt-[5%]'> {p.product_name} </p>
          <div className="clr-div flex gap-2 my-2">
            {p.clr_arr.map((clr, i) => (
              <span
                key={i}
                style={{ backgroundColor: clr, display: 'inline-block', width: '1vmax', height: '1vmax', borderRadius: '9999px', border: '1px solid #ccc' }}
              ></span>
            ))}
          </div>
          <h5 className='font-semibold'> {p.product_price} </h5>
        </div>
      ))}
    </div>
  )
}

export default ProductPreview