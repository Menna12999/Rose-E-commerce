import React from 'react'
import ProductsList from '../../products/_components/products-list'
import { getTranslations } from "next-intl/server";


type ProductListProps={
  searchParams:SearchParams;
}
export default async function PopularProducts({searchParams}:ProductListProps) {

  const t = await getTranslations();

  return (
    <>
      <h2 className="mt-10 mb-10 capitalize after:absolute after:w-[53px] after:h-[2px] after:bg-rose-900 rtl:after:right-0 after:left-0 after:top-full  font-bold text-cutom-blue text-lg sm:text-xl md:text-3xl relative">
        {t("propular-items")}
      </h2>
          <div className='grid xl:grid-cols-5 gap-5 justify-center items-center sm:lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-4 mb-6'>
         <ProductsList searchParams={searchParams}/>
         </div>
    </>
  )
}
