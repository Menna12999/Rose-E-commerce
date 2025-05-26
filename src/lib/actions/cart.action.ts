'use server'

import { revalidateTag } from "next/cache";
import { JSON_HEADER } from "../constants/api.constant";




export async function getCart(token:string) {
 const response = await fetch(`${process.env.API}/cart`,{
    method: 'GET',
    headers:{...JSON_HEADER,Authorization:"Bearer "+token},
    next:{tags:["getCart"]}
 }) 
 const payload:Getcart = await response.json();
 return payload;
}

export async function removeItem({token,productId}:{token:string,productId:string}) {
    const response = await fetch(`${process.env.API}/cart/${productId}`,{
       method: 'DELETE',
       headers:{...JSON_HEADER,Authorization:"Bearer "+token},
       next:{tags:["getCart"]}
    }) 
    const payload:Getcart = await response.json();
    revalidateTag("getCart");
    return payload;
   }

   export async function updateQuantity({token,productId,quantity}:{token:string,productId:string,quantity:number}) {
    const response = await fetch(`${process.env.API}/cart/${productId}`,{
       method: 'PUT',
       headers:{...JSON_HEADER,Authorization:"Bearer "+token},
       body:JSON.stringify({quantity})
    }) 
    const payload:Getcart = await response.json();
    revalidateTag("getCart");
    return payload;
   }

   export async function addToCart({token,productId,quantity=1}:{token:string,productId:string,quantity:number}) {
    const response = await fetch(`${process.env.API}/cart`,{
       method: 'POST',
       headers:{...JSON_HEADER,Authorization:"Bearer "+token},
       body:JSON.stringify({product:productId,quantity})
    }) 
    const payload:Getcart = await response.json();
    revalidateTag("getCart");
    console.log('payload,' , payload)

    return payload;
   }

