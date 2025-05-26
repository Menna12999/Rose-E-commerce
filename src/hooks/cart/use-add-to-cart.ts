import { addToCart } from '@/lib/actions/cart.action'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { toast } from '@/hooks/use-toast'
import React from 'react'

export default function useAddToCart() {
    //translation
    const t = useTranslations()
   const{isPending,error,mutate} = useMutation({
    mutationFn:async({token,productId,quantity}:{token:string,productId:string,quantity:number})=>{
       const response = await addToCart({token,productId,quantity})
       return response
    },
    onSuccess: () => {
        toast({
            description:(t('add-to-cart-successfully'))
        })

   },
   onError:()=>{
    toast({
        description:(t('something-wrong'))
    })
   }
})
return{isPending,error,addToCart:mutate}

}
