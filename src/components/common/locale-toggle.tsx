'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { Button } from '../ui/button'
import { Globe } from 'lucide-react';
import {Link,usePathname,useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

export default function LocaleToggle() {


  //navigation

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()

  //varriables
  const searchQuery = new URLSearchParams(searchParams)

  //Functions

  const switchLocale = (locale:'en'|'ar')=>{
   router.push(`${pathname}?${searchQuery.toString()}`,{locale})
  }



  
  return (
<>
<DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Button size='icon' variant='outline'>
        <Globe size={18}/>

   </Button>
  </DropdownMenuTrigger>
  {/**content */}
  <DropdownMenuContent>
  {/**English */}
    <DropdownMenuItem asChild>
      <button onClick={()=>switchLocale('en')}>English</button>
    </DropdownMenuItem>
     {/**Arabic */}
     <DropdownMenuItem asChild>
      <button onClick={()=>switchLocale('ar')}>العربية</button>
    </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>

  
</>
  )
}
