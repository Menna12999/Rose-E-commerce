import React from 'react'
import catchError from '@/lib/utils/catch-error';
import Image from "next/image";
import { fetchProducts } from '@/lib/apis/product.api';
import Product from '@/components/features/product/product';
type ProductListProps={
    searchParams:SearchParams;
}
export default  async function ProductsList({searchParams}:ProductListProps) {
    const[ payload ,error]= await catchError(()=>fetchProducts(searchParams)) 

  return (
 
 <>
 {payload?.products.map((product)=>
 (
   <div key={product._id} className=''>
    <Product product={product}/>
   </div>
 ))}
 </>

  )
}
