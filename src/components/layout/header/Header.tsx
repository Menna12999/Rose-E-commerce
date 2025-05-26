import React,{useState} from 'react'
import LocaleToggle from '@/components/common/locale-toggle'
import Link from 'next/link'
import Image from "next/image";
import { useTranslations } from "next-intl";
import Navlinks from './Navlinks';
import Searchcomponent from './Searchcomponent';
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { Button } from '@/components/ui/button';
import Loginbtn from './Loginbtn';
import { PiBagBold } from "react-icons/pi";
import { getCart } from '@/lib/actions/cart.action';





export default async function Header(){

 

  const session = await getServerSession(authOptions);

  const cart = await getCart(session?.token as string);


  return (

  <header className='flex justify-between items-center container   fixed top-0 right-0 left-0 z-10 bg-white shadow-md'>
    {/***logo */}
    <Link href={"/"}>
        <Image src="/assets/images/header/Logo.png" alt="Logo" width={80} height={0} />
      </Link>
      {/***links */}
      <div className="md:block hidden ">
       <Navlinks/>
    </div>
    <div className="flex gap-5  items-center">
   < Searchcomponent/>
        {/* Login Button: Only show if user is not logged in */}
        {!session?.user && (
        <div className="flex items-center">
         <Loginbtn/>

        </div>

      )}
       {session?.user && (
      <Link href={'/cart'} className='relative text-2xl text-rose-900 font-bold'>
      <PiBagBold />
           <span className='flex justify-center items-center text-lg text-white w-6 h-6 rounded-full bg-rose-900 absolute right-[-15px] top-[-20px]'>{cart?.numOfCartItems}</span>
          </Link>
       )}
          <LocaleToggle/>
          
        </div>
    </header>
  )
}


