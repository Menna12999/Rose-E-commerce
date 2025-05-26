import React from 'react'
import { ArrowRight} from 'lucide-react';

export default function CartSummery({cart}:{cart:Cart}) {
  return (
   <div className='md:max-w-[250px] max-w-[300px] m-auto p-5 bg-rose-50 rounded-xl mt-5 md-mt-0'>
    <h3 className="text-blue-950 font-bold text-xl mb-5">Cart summery</h3>
    <ul className='flex flex-wrap justify-between gap-y-4'>
        <li className='w-[45%]  text-blue-950 font-bold'>Sub Total:</li>
        <li className='w-[45%]  text-blue-950'>${cart?.totalPrice}</li>
        <li className='w-[45%]  text-blue-950 font-bold'>Discount:</li>
        <li className='w-[45%]  text-blue-950'>{cart?.discount}</li>
        <li className='w-[45%]  text-blue-950 font-bold'>Shipping:</li>
        <li className='w-[45%]  text-blue-950'>1500</li>
        <li className='w-[45%]  text-blue-950 font-bold'>Taxes:</li>
        <li className='w-[45%]  text-blue-950'>1500</li>
        <li className='w-[45%]  text-blue-950 font-bold'>Total:</li>
        <li className='w-[45%]  text-rose-900 font-bold'>${cart?.totalPrice}</li>

      
    </ul>
<div className='flex justify-end'>
<button className='capitilize p-2 rounded-lg text-white mt-3 bg-rose-900 flex gap-2 items-center'>checkout now 
<ArrowRight />

</button>

  </div>   
  </div>
  )
}
