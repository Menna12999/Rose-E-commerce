import React from 'react'
import { useTranslations } from "next-intl";
import CartItems from './CartItems';
import { ArrowRight, Divide } from 'lucide-react';


import Image from 'next/image';


  

export default  function CartTable({cart,token}:{cart:Cart;token:string}) {

  const t = useTranslations();
   

    if(cart?.cartItems?.length==0)
      return (<div className='m-auto'>
        <Image src="/assets/images/cart.png" alt="empty cart" width={500} height={0} />
      </div>);
    
  
return (
<div className="container">
<table className='block md:w-full md:table border-separate border-spacing-x-5'>
  <thead className='block md:table-header-group'>
    <tr className='text-gray-600 hidden  md:table-row'>
     <th className='uppercase block w-full md:table-cell md:w-auto border-b border-slate-200 pb-2'>{t('image')}</th>
     <th className='uppercase block w-full md:table-cell md:w-auto  border-b border-slate-200 pb-2'>{t('productName')}</th>
     <th className='uppercase block w-full md:table-cell md:w-auto border-b border-slate-200 pb-2'>{t('price')}</th>
     <th className='uppercase block w-full md:table-cell md:w-auto border-b border-slate-200 pb-2'>{t('quantity')}</th>
     <th className='uppercase block w-full md:table-cell md:w-auto border-b border-slate-200 pb-2'>{t('subTotal')}</th>
     <th className='uppercase block w-full md:table-cell md:w-auto border-b border-slate-200 pb-2'>{t('deleteProduct')}</th>
    
    </tr>
  </thead>
  <tbody className='block md:table-header-group' >
    {cart?.cartItems.map((item:CartItem) => (
             <CartItems key={item._id} item={item} token={token} />
           ))} 
  </tbody>
</table>
<div className='flex flex-col md:flex-row justify-center gap-x-4 items-center mt-5'>
<div className='flex justify-center  relative'>
<input type="text" className='focus:outline-none focus:border focus:border-rose-800 py-2 ps-5 pe-[200px] rounded-3xl border border-gray-200' placeholder={t('year-coupon-code')} />
<button className='py-2 px-3 text-white rounded-3xl absolute right-0 bg-rose-800 flex'>{t('apply-coupon')}<ArrowRight/></button>
</div>
<button className='capitilize p-2 rounded-lg text-white mt-5 md:mt-0 bg-rose-900 flex gap-2 items-center'>checkout now 
<ArrowRight />

</button>
</div>
</div>

  )
}
