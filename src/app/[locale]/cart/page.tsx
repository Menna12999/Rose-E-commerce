import React from 'react'
import CartTable from './_copmonents/CartTable'
import CartSummery from './_copmonents/CartSummery'
import { getCart } from '@/lib/actions/cart.action';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth';

export  default async function page() {
   const session = await getServerSession(authOptions);
      const {cart} = await getCart(session?.token as string)
      console.log('cart',cart)

  return (
    <div className='container flex flex-col lg:flex-row'>
    <CartTable cart={cart} token={session?.token as string}/>
    {cart?.cartItems?.length!==0&&<CartSummery cart={cart}/>}
    </div>
  )
}
