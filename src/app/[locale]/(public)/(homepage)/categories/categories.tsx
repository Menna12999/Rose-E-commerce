"use client"


import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Category from "./category";
import useCategories from "@/hooks/category/use-categories";

export default function Categories() {
  const {payload} = useCategories();
 
  if(!payload?.categories || payload.categories.length===0){
    return <div className="text-center py-8">loading....</div>
  }
  return (
    <Carousel className="mt-8 container">
      <CarouselContent>
        {payload?.categories.map((category) => (
          <CarouselItem className="xl:basis-1/5  basis-2/5" key={category._id}>
            <Category category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}