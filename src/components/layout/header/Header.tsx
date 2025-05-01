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




export default async function Header(){

 

  const session = await getServerSession(authOptions);




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
          <LocaleToggle/>
        </div>
    </header>
  )
}


