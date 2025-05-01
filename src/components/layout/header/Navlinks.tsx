'use client'


import React from 'react'
import { usePathname } from "@/i18n/routing";
import Link from 'next/link'
import { useTranslations } from "next-intl";



export default function Navlinks() {

    const pathname = usePathname();
      const t = useTranslations();
    

    const links = [
        {
          title:t('home'),
          href:"/dashboard"
        },{
          title:t('products'),
          href: "/products"
        }
        ,{
          title:t('about'),
          href: "/about"
        },
        {
          title:t('contact'),
          href: "/contact"
        }
          ]

  return (
    <nav className='flex-col gap-5 md:flex md:flex-row items-center text-custom-blue-900 font-medium'>
      {links.map(link => <Link className={pathname === link.href ? "text-rose-900" : ""} key ={link.href} href={link.href}>{link.title}</Link>)}
    </nav>
  )
}
