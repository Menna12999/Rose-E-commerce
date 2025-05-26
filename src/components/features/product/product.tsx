"use client";

import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { useTranslations } from "next-intl";
import { TbEye, TbHeart } from "react-icons/tb";
import { BsHandbag } from "react-icons/bs";
import { addToCart } from "@/lib/actions/cart.action";
import useAddToCart from "@/hooks/cart/use-add-to-cart";
import { useSession } from "next-auth/react";


export default function Product({ product }: { product: Product }) {
  //  Translation
  const t = useTranslations();
  const {addToCart} = useAddToCart();
  const {data} = useSession()

  return (
    <>
      <div className="group relative rounded-[20px] overflow-hidden min-h-[222px] w-full ">
       

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

      <div className=" flex items-center justify-between  mt-4">
        <div className="item-details ps-4 ">
          <h3
            className="font-semibold text-base  line-clamp-1  text-custom-blue-900 mb-[9px]"
            title={product?.title}
          >
            {product?.title}
          </h3>

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
         <button className="rounded-full bg-violet-700 p-3" onClick={()=>addToCart({token: data?.token as string,productId:product._id,quantity:1})}>
         <BsHandbag  className="text-white "/>
         </button>
      </div>
    </>
  );
}
