import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Product from "@/components/features/product/product";
  
  type CarouselComponentProps = {
   products: Product[];
  };
  
  export default function CarouselComponent({products}:CarouselComponentProps) {
    return (
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        {/* Content */}
        <CarouselContent key={Math.random()} className="relative ">
          {products?.map((product: Product) => (
            <CarouselItem
              key={product._id}
              className=" rounded-tl-[50px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px] bg-white rounded-3xl  mr-1 px-2 !w-[15rem] lg:w-[20rem] sm:basis-3/6 md:basis-6/12 lg:basis-4/12 basis-full"
            >
              <Product product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
  
        {/* Prev item button */}
        <CarouselPrevious className="bg-transparent border-0 text-rose-900" />
  
        {/* Next item button */}
        <CarouselNext className="border-0 text-rose-900 bg-transparent" />
      </Carousel>
    );
  }
  