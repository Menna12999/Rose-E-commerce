import catchError from '@/lib/utils/catch-error';
import React, { Suspense } from 'react'
import Image from "next/image";
import ProductsList from './_components/products-list';
import Categoryfilter from './_components/category-filter';

type PageProps={
  searchParams :SearchParams;
}

export default  function page({searchParams}:PageProps) {

  return (
    <main className="container grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 pt-[150px] px-4">
    {/* Sidebar */}
    <aside className="bg-white p-4 rounded-lg shadow h-fit sticky top-[100px] max-h-[calc(100vh-120px)] overflow-y-auto">
      <Categoryfilter />
    </aside>
  
    {/* Product List */}
    <section className="w-full">
      <Suspense fallback={<p>Loading products...</p>}>
      <div className='grid xl:grid-cols-5 gap-5 justify-center items-center sm:lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-4 mb-6'>
        <ProductsList searchParams={searchParams} />
        </div>
      </Suspense>
    </section>
  
    </main>
  )
}
