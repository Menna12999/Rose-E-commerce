import Footer from "@/components/features/footer/footer";
import Header from "@/components/layout/header/Header";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { routing } from "@/i18n/routing"
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type LocaleLayoutProps ={
    children: React.ReactNode;
}& Pick<BaseParams,"params">


export default function Layout({ params:{locale},children }: LocaleLayoutProps){
    if(!routing.locales.includes(locale)) notFound();
    setRequestLocale(locale)
    return(
        <html lang={locale} dir={locale==='ar'?'rtl':'ltr'}>
        <body className="pt-[100px] flex flex-col justify-between">
<Providers>
    {/******Toast***** */}
    <Header/>
    <Toaster />

    {children}
    <Footer/>
    </Providers>  
</body>
      </html>
    )
}