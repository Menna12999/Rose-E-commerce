import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useCategories() {

    const {isLoading,error,data} = useQuery({
        queryKey:['categories'],
        queryFn:async()=>{
            const response = await fetch (`${process.env.NEXT_PUBLIC_API}/categories`);
            const payload:APIResponse<PaginatedResponse<{categories:Category[]}>> = await response.json()
            if ('error' in payload) throw new Error(payload.error)
            return payload
        }
    })
  return {isLoading,error,payload:data}
}
