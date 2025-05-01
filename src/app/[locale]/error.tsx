"use client";

import ErrorComponent from "@/components/common/error-component";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
    return (
      
     
          <main className="h-screen flex items-center justify-center"><ErrorComponent/></main>
      
  
  )
  }