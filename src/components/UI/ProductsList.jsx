import React from 'react';
import ProductCard from './ProductCard';



const ProductsList = ({data}) => {

  return (
    <div className='d-flex flex-wrap '>
        {
            data && data.map(item=>(
                <ProductCard item={item} />
            ))
        }
     
    </div>
  )
}

export default ProductsList
