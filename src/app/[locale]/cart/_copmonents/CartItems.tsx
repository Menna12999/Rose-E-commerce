"use client";
import React from "react";
import Image from "next/image";
import { Plus, Minus, X } from "lucide-react";
import useRemoveItemFromCart from "@/hooks/cart/use-remove-item";
import useUpdateItem from "@/hooks/cart/use-update-item";

export default function CartItems({
  item,
  token,
}: {
  item: CartItem;
  token: string;
}) {
  const { removeItem } = useRemoveItemFromCart();
  const { updateQuantity } = useUpdateItem();
  return (
    <tr
      key={item?.product?._id}
      className="block mb-4 md-mb-0 md:table-row border border-gray-300 rounded-xl p-5 text-center"
    >
      <td className=" w-full flex justify-center md:table-cell md:w-auto">
        <Image
          alt="product"
          width={100}
          sizes="100vw"
          height={16}
          className="rounded"
          src={item?.product?.imgCover}
        />
      </td>
      <td className="md:text-left block font-medium text-blue-950 capitalize w-full md:table-cell md:w-auto ">
        {item?.product?.title}
      </td>
      <td className="block w-full md:table-cell md:w-auto">
        ${item?.product?.price}
      </td>
      <td className="block w-full md:table-cell md:w-auto">
        <div className="flex items-center justify-around text-rose-800">
          <Minus
            className="bg-rose-100 p-1 text-lg rounded-full cursor-pointer"
            onClick={() =>
              updateQuantity({
                token,
                productId: item?.product?._id,
                quantity: item?.quantity - 1,
              })
            }
          />
          {item.quantity}

          <Plus
            className="bg-rose-100 p-1 text-lg rounded-full cursor-pointer"
            onClick={() =>
              updateQuantity({
                token,
                productId: item?.product?._id,
                quantity: item?.quantity + 1,
              })
            }
          />
        </div>
      </td>
      <td className="block w-full md:table-cell md:w-auto">${item?.quantity * item?.price}</td>
      <td className="block w-full md:table-cell md:w-auto">
        <X className="border border-gray-200 rounded-full p-1 text-lg m-auto cursor-pointer" onClick={()=>removeItem({productId:item.product._id,token})} />
      </td>
    </tr>
  );
}
