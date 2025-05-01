import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import CarouselComponent from "./carousal";
import catchError from "@/lib/utils/catch-error";
import { getTranslations } from "next-intl/server";
import { fetchProducts } from "@/lib/apis/product.api";
type ProductListProps={
  searchParams:SearchParams;
}
export default async function Premiumgifts({searchParams}:ProductListProps) {
  const t = await getTranslations();
     const[ payload ,error]= await catchError(()=>fetchProducts(searchParams)) 
 const products = payload?.products||[]

  return (
    <section>
      <div className="main container mx-auto justify-between items-center pt-20 flex md:flex-row flex-col   gap-6">
        <div className="best-info w-64">
          <h2 className="rtl:tracking-[0] rtl:text-xl text-custom-rose-900 leading-[30px] font-roboto  uppercase tracking-[4px] font-bold text-[17px] pb-7">
            {t("premium-gifts")}
          </h2>
          <h3 className="font-bold font-inter text-custom-blue-900 text-3xl capitalize leading-10">
            {t("best-selling-heading")}
          </h3>

          <p className="font-normal text-base font-roboto leading-7 text-custom-muted pt-4 pb-7 ">
            {t("premium-gifts-desc")}
          </p>

          <div>
            <Button className="bg-custom-rose-900 h-[50px] font-medium text-base text-white rounded-md hover:bg-rose-800 ps-5  py-[10px] ">
              {t("explore-more")}
              <FaArrowRight className="rtl:scale-x-[-1]" />
            </Button>
          </div>
        </div>

        <div className="carousel md:w-[calc(90%-15rem)] w-10/12">
          <CarouselComponent products={products} />
        </div>
      </div>
    </section>
  );
}
