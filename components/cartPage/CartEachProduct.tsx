"use client";
import Image from "next/image";
import React from "react";
import FullClearItemButton from "../buttons/FullClearItemButton";
import QuantityControlers from "./QuantityControlers";
import useHandleToats from "@/utils/useHandleToasts";
import MoreDetailsBtn from "../buttons/MoreDetailsBtn";
import Link from "next/link";

interface CartProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string[];
  quantity: number;
}

interface CartEachProductProps {
  product: CartProduct;
}

export default function CartEachProduct({ product }: CartEachProductProps) {
  const { handleRemoveItemToast } = useHandleToats();

  return (
    <div
      key={product.id}
      className="w-full flex bg-white border border-gray-20 shadow-bottom-only rounded-lg overflow-hidden py-4 lg:px-8  mt-2 md:mt-8"
    >
      <div className="min-w-[100px] min-h-[100px] w-full max-w-[240px] max-h-[240px]">
        <Image
          src={product.image[0]}
          alt={product.title}
          height={240}
          width={240}
          priority
        />
      </div>
      <div className="flex sm:flex-row flex-col justify-between sm:justify-normal">
        <div className="px-4 flex flex-col gap-2 mr-auto justify-between">
          <Link
            href={{
              pathname: `/product/${product.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`,
              query: { productId: `${product.id}` },
            }}
          >
            <div className="text-sm sm:text-xl font-bold underline hover:no-underline cursor-pointer">
              {product.title}
            </div>
          </Link>
          <div className="hidden sm:flex">{product.description}</div>
          <div className="text-sm sm:text-base font-semibold">
            Summary cost: ${(product.price * product.quantity).toFixed(2)}
          </div>
          <div className="flex gap-10">
            <div onClick={handleRemoveItemToast}>
              <FullClearItemButton id={product.id} />
            </div>
          </div>
          <div className="sm:hidden flex">
            <MoreDetailsBtn currentProduct={product} buttonText={"Details"} />
          </div>
        </div>
        <div className="px-2 align-text-bottom">
          <div className="flex flex-col justify-between h-full">
            <div className="text-center hidden sm:flex">${product.price}</div>
            <QuantityControlers id={product.id} quantity={product.quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}
