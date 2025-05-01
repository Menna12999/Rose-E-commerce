import { useTranslations } from 'next-intl'
import React from 'react'
import SigninForm from '../signin/_components/signin-form'
import Header from '@/components/layout/header/Header';
export default function page() {
    //Translation
    const t = useTranslations();
  return (
   <section className='flex justify-center items-center min-h-screen bg-black bg-opacity-80 z-40'>
    <div className='flex flex-col p-10 bg-white border rounded-[20px] shadow-custom-box md:min-w-[608px]'>
    
      <SigninForm></SigninForm>
    </div>
   </section>
  )
}
