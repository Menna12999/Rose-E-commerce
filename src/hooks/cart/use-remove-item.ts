import {  removeItem } from '@/lib/actions/cart.action'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from '@/hooks/use-toast'
import React from 'react'

export default function useRemoveItemFromCart() {
    //translation
    const t = useTranslations()
   const{isPending,error,mutate} = useMutation({
    mutationFn:async({token,productId}:{token:string,productId:string})=>{
       const response = await removeItem({token,productId})
       return response
    },
    onSuccess: () => {
        toast({
            description:(t('product-removed-successfully'))
        })

   },
   onError:()=>{
    toast({
        description:(t('something-wrong'))
    })
   }
})
return{isPending,error,removeItem:mutate}

}
