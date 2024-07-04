"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import Image from "next/image";
import RemoveProductButton from "@/components/buttons/RemoveProduct";
import FullClearItemButton from "@/components/buttons/FullClearItemButton";
import ReactStars from "react-stars";
import useSummaryItemCost from "@/utils/useSummaryItemCostHook";

export default function cartPage() {
  const cartProducts = useAppSelector((state: RootState) => state.cartProducts);

  const { summaryItemCost, totalPrice, totalProducts } = useSummaryItemCost();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      <div className="mx-auto py-10 px-12 flex">
        <div className="flex flex-col">
          <div className="text-2xl">Products</div>
          {cartProducts?.map((product: any) => (
            <div
              key={product.id}
              className="w-full flex justify-between bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden py-4 px-8 mt-8"
            >
              <div className="w-[100px] h-[100px] lg:min-w-[140px] lg:h-[140px]">
                <div className="relative h-full w-full ">
                  <Image
                    src={product.image[0]}
                    alt={product.title}
                    fill
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
              <div className="px-4">
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div>
                  Summary cost: ${(product.price * product.quantity).toFixed(2)}
                </div>
                <div className="flex">
                  <FullClearItemButton id={1} />
                  <ReactStars count={5} size={24} color2={"#ffd700"} />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className=" text-end">${product.price}</div>
                <div className="flex gap-4">
                  <button> -</button>
                  QUANTITY
                  <button> +</button>
                </div>
              </div>
            </div>
          ))}

          <div className="w-full flex justify-between bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden py-4 px-8 mt-8">
            <div className="w-[100px] h-[100px] lg:min-w-[140px] lg:h-[140px]">
              <div className="relative h-full w-full ">
                <div className="bg-black h-full w-full">black</div>
              </div>
            </div>
            <div className="px-4">
              <div>TITLE</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                quos corrupti accusantium iure autem odio pariatur ea atque
                laborum totam. Eius aspernatur, voluptatum fugiat non explicabo
                corrupti cupiditate qui laboriosam ratione, magnam dignissimos
                sit ipsa itaque?
              </div>
              <div>SUMMARY PRODUCT COST</div>
              <div className="flex">
                <FullClearItemButton id={1} />
                <ReactStars count={5} size={24} color2={"#ffd700"} />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>EACH PRICE</div>
              <div className="flex gap-4">
                <button> -</button>
                QUANTITY
                <button> +</button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[480px] h-[400px] mx-8">RESUME OF ORDER</div>
      </div>
    </div>
  );
}
