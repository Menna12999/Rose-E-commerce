import {  removeItem, updateQuantity } from '@/lib/actions/cart.action'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from '@/hooks/use-toast'
import React from 'react'

export default function useUpdateItem() {
    //translation
    const t = useTranslations()
   const{isPending,error,mutate} = useMutation({
    mutationFn:async({token,productId,quantity}:{token:string,productId:string,quantity:number})=>{
       const response = await updateQuantity({token,productId,quantity})
       return response
    },
    onSuccess: () => {
        toast({
            description:(t('product-updated-successfully'))
        })

   },
   onError:()=>{
    toast({
        description:(t('something-wrong'))
    })
   }
})
return{isPending,error,updateQuantity:mutate}

}
