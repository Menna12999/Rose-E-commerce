import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Slider() {
  // Translation
  const t = useTranslations();

  // Variables
  const sliserImages = [
    "/assets/images/Slider/background-2.jpg",
    "/assets/images/Slider/Top-view-hand.png",
    "/assets/images/Slider/Christmas-cart.png",
  ];

  const giftBoxes = [
    {
      image: "/assets/images/Slider/Confetti.png",
     description: t("awesome-gifts-box-collections"),
      title: t("gifts-box"),
    },
    {
      image: "/assets/images/Slider/Top-view-hand.png",
      description: t("best-occasion-gifts-collections"),
      title: t("occasion-gifts"),
    },
    {
      image: "/assets/images/Slider/Christmas-cart.png",
      description: t("combo-sets-gift-box-up-to-50-off"),
      title: t("occasion-gifts-1"),
    },
  ];

  return (
    <section className="grid grid-cols-9  gap-4 mt-8 container">
      {/* Special Gifts Box card */}
      <div className="relative lg:col-span-3 lg:h-auto h-64 col-span-9  p-5 rounded-2xl flex items-end overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/images/Slider/Red-christmas.png"
          alt="Special Gifts"
          fill
          className="object-cover"
        />
        {/* Content */}
        <div className="rtl:text-start relative ">
          {/* Title */}
          <p className="text-custom-rose-900 text-base uppercase  tracking-[.2em] font-bold">
            {t("start-10-99")}
          </p>

          {/* Main text */}
          <h2 className="capitalize text-custom-blue-900 text-2xl font-bold my-3">
            {t("special-gifts-box-for-your-love")}
          </h2>

          {/* Shop button */}
          <Link href={"/products"}>
            <Button className="capitalize bg-rose-900  font-medium text-base text-white rounded-md hover:bg-rose-800 ps-5  py-[10px] ">
              {t("shop-now")}
              <span>
              <ArrowRight size={20} className="rtl:-scale-x-100" />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Carousel card */}
      <Carousel className="lg:col-start-4 col-start-1  col-end-10">
        <CarouselContent>
          {sliserImages.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative p-14 col-span-2 rounded-2xl overflow-hidden">
                {/* Background Image */}
                <Image src={image} alt="Background" fill className="object-cover" />

                {/* Content Overlay */}
                <div className=" relative  flex flex-col">
                  {/* Title */}
                  <p className="capitalize text-rose-900 text-xl mb-5  font-bold tracking-[.2em]">
                    {t("best-gift-shop")}
                  </p>

                  {/* Main text */}
                  <h2 className="capitalize text-custom-blue-900 font-bold sm:text-5xl text-3xl mb-5">
                    {t("choose-perfect")} <br />
                    <span className="text-rose-900 capitalize">{t("gifts")}</span> {t("from-us")}
                  </h2>

                  {/* Description */}
                  <p className="mb-5 max-w-96 capitalize">{t("offer-description")}</p>

                  {/* Shop button */}
                  <Link href={"/products"}>
                    <Button className="capitalize bg-rose-900 self-start mb-8 sm:mb-0  font-medium text-base text-white rounded-md hover:bg-rose-800 ps-5  py-[10px] ">
                      {t("shop-now")}
                      <ArrowRight size={20} className="rtl:-scale-x-100" />                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel navigation */}
        <CarouselPrevious className="top-[90%] right-24 rtl:right-auto rtl:left-24 text-white bg-gray-600" />
        <CarouselNext className="top-[90%] right-11 rtl:right-auto rtl:left-11 text-white bg-gray-600" />

      </Carousel>

      {/* Gift Boxes */}
      {giftBoxes.map((item, index) => (
        <div
          key={index}
          className="justify-end rtl:justify-start relative lg:col-span-3 col-span-9 h-72 p-5 flex items-center rounded-2xl overflow-hidden"
        >
          {/* Background Image */}
          <Image src={item.image} alt={item.title} fill className="object-cover" />

          {/* Content */}
          <div className="relative  flex flex-col items-end">
            {/* Label name */}
            <p className="text-rose-900">{item.title}</p>

            <h2 className="capitalize text-custom-blue-900 text-lg font-bold text-end">
              {item.description}
            </h2>

            {/* Shop button */}
            <Link href={"/products"}>
              <Button className="capitalize bg-rose-900 mt-4  text-white rounded-full hover:bg-rose-800  ">
                {t("shop-now")}
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
