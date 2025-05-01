import React from 'react'
import Categories from '../(public)/(homepage)/categories/categories'
import Slider from '../(public)/(homepage)/slider/slider'
import Services from '../(public)/(homepage)/services/services'
import Premiumgifts from '../(public)/(homepage)/Premium Gifts/premium-gifts'
import PopularProducts from '../(public)/(homepage)/popularProducts/popular-products'
import AboutPart1 from '../(public)/(homepage)/Aboutp1/about-part1'
import OurGallery from '../(public)/(homepage)/our-gallery/our-gallery'
import Companies from '../(public)/(homepage)/companies/companies'
type PageProps={
  searchParams :SearchParams;
}
export default function page({searchParams}:PageProps) {
  return (
    <main className="container pt-[100px]" >
          <Categories/>
          
          <Slider/>

          <Services/>

          <Premiumgifts searchParams={searchParams}/>

          <PopularProducts searchParams={searchParams}/>

        <AboutPart1/>

        <OurGallery/>

        <Companies/>

     
          </main>
  )
}
