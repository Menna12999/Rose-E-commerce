import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { useTranslations } from "next-intl";
import { TbEye, TbHeart } from "react-icons/tb";

export default function Product({ product }: { product: Product }) {
  //  Translation
  const t = useTranslations();

 // Current timestamp
const currentTime = new Date().getTime();

// Last update timestamp for the product
const lastUpdatedTime = new Date(product?.updatedAt).getTime();

// Time difference in milliseconds
const timeDifference = currentTime - lastUpdatedTime;

// Convert difference to full days
const totalDaysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Quantity of the product
const availableQuantity = product?.quantity ?? 0

  return (
    <>
      <div className="group relative rounded-[20px] overflow-hidden min-h-[222px] w-full ">
        {timeDifference < 7 && (
          <>
            <div className="absolute rtl:text-sm font-roboto font-medium text-xs leading-5 tracking-[1px] z-[9] top-2 right-2 bg-custom-rose-900  text-white px-4 py-1 rounded-full">
              {t("new")}
            </div>
          </>
        )}

        {availableQuantity === 0 && (
          <>
            <div className="absolute font-roboto font-medium text-xs leading-5 tracking-[1px] z-[9] top-2 right-2 bg-custom-red  text-white px-2 py-1 rounded-full">
              {t("out-of-stock")}
            </div>
          </>
        )}

        {/* Product image */}
        <Image
          className="rounded-[20px]  w-full h-full object-fit"
          src={product?.imgCover}
          alt={product?.title}
          fill
          sizes="100%"
        />

        {/* The heart and eye icons who appeare after hover  */}
        <div className="absolute inset-0 bg-rose-900 flex items-center justify-center gap-10 duration-300 z-[9] bg-opacity-70 opacity-0 transition-all group-hover:opacity-100">
          <TbEye className="w-10 h-10 text-white   cursor-pointer  z-10 bg-rose-900 rounded-full p-2" />
          <TbHeart className="w-10 h-10 text-white cursor-pointer z-10 bg-rose-900 rounded-full p-2" />
        </div>
      </div>

      {/* Product details */}
      <div className=" flex items-center justify-between  mt-4">
        <div className="item-details ps-4 ">
          {/* Product title */}
          <h3
            className="font-semibold text-base  line-clamp-1  text-custom-blue-900 mb-[9px]"
            title={product?.title}
          >
            {/* Formating the title if it has '|' */}
            {product?.title}
          </h3>

          {/* Stars div for rating product */}
          <div className="stars flex gap-1">
            <IoStar className="text-custom-gold" />
            <IoStar className="text-custom-gold" />
            <IoStar className="text-custom-gold" />
            <IoIosStarOutline className="text-custom-gold" />
          </div>

          {/* Product price and product price after discount */}
          <div className="mt-2  space-x-1">
            <span className="text-custom-red text-base rtl:mx-1 font-medium ">
              {"$" + product?.priceAfterDiscount}
            </span>
            <span className=" before:absolute before:top-1/2 before:-translate-y-1/2 before:w-full before:h-[1px] before:bg-custom-muted relative text-[#DEE2E6] text-base font-medium">
              {"$" + product?.price}
            </span>
          </div>
        </div>

      </div>
    </>
  );
}
