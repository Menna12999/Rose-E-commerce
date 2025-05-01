import { NextIntlClientProvider,useMessages,useTranslations } from 'next-intl'
import React from 'react'
import NextAuthProvider from './_components/next-auth-provider';
import ReactQueryProvider from './_components/react-query-provider';

type ProvidersProps ={
    children: React.ReactNode
}

export default function Providers({children}:ProvidersProps) {
    //translation 
    const messages = useMessages();
  return (
    
    <NextIntlClientProvider messages={messages}>
      <ReactQueryProvider>
        <NextAuthProvider>
        {children}
        </NextAuthProvider>
        </ReactQueryProvider>
    </NextIntlClientProvider>
  

  )
}
