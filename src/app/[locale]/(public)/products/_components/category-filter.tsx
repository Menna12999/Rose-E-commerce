"use client"
import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import useCategories from '@/hooks/category/use-categories'
import { usePathname, useSearchParams,useRouter } from 'next/navigation'


export default function Categoryfilter() {
    //navigation
    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const {error,isLoading,payload} = useCategories();
    console.log(payload)
    if(isLoading) return <p>Loading categories...</p>
    if(error) <p className='text-red-600'>{error.message}</p>;
    //functions
   const handleClick = (id:string)=>{
    const searchQuery = new URLSearchParams(searchParams)
    if(id === 'all'){
      searchQuery.delete('category')
    }
    else{
      searchQuery.set('category',id)

    }
    router.push(`${pathname}?${searchQuery.toString()}`)
   }
  return (
    <RadioGroup defaultValue="option-one">

    {/***all category */}
    <div className="flex items-center space-x-2">
    <RadioGroupItem checked={!(searchParams.get('category'))}value='all' id="all" onClick={()=>handleClick('all')}/>
    <Label htmlFor='all' >All categories</Label>
  </div>
    {payload?.categories.map(category=>
    <div key={category._id} className="flex items-center space-x-2">
    <RadioGroupItem checked={category._id===searchParams.get('category')}value={category._id} id={category._id} onClick={()=>handleClick(category._id)}/>
    <Label htmlFor={category._id} >{category.name}</Label>
  </div>
 
     )}
  
</RadioGroup>

  )
}
