"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import Image from "next/image";
import FullClearItemButton from "@/components/buttons/FullClearItemButton";
import QuantityControlers from "@/components/cartPage/QuantityControlers";
import OrderResume from "@/components/cartPage/OrderResume";
import dynamic from "next/dynamic";

export default function cartPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cartProducts = useAppSelector((state: RootState) => state.cartProducts);

  const ReactStars = dynamic(() => import("react-stars"), { ssr: false });

  return (
    <div className="flex mx-auto flex-col max-w-[1440px] w-full">
      <h1 className="text-3xl font-bold mb-4 text-center mt-4">Yours Cart</h1>

      <div className="mx-auto py-10 px-12 flex flex-col sm:flex-row">
        <div className="flex flex-col">
          <div className="text-2xl">Products</div>
          {cartProducts?.map((product: any) => (
            <div
              key={product.id}
              className="w-full flex bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden py-4 px-8 mt-8"
            >
              <div className="w-[100px] h-[100px] lg:min-w-[140px] lg:h-[140px] my-auto">
                <div className="relative h-full w-full ">
                  <Image
                    src={product.image[0]}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 260px, 200px"
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
              <div className="px-4 flex flex-col gap-2 mr-auto">
                <div className="text-xl font-bold">{product.title}</div>
                <div>{product.description}</div>
                <div className="font-semibold">
                  Summary cost: ${(product.price * product.quantity).toFixed(2)}
                </div>
                <div className="flex gap-10">
                  <FullClearItemButton id={product.id} />
                  <ReactStars count={5} size={24} color2={"#ffd700"} />
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-between h-full">
                  <div className="text-center">${product.price}</div>
                  <QuantityControlers
                    id={product.id}
                    quantity={product.quantity}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="w-full flex justify-between bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden py-4 px-8 mt-8">
            <div className="w-[100px] h-[100px] lg:min-w-[140px] lg:h-[140px] my-auto">
              <div className="relative h-full w-full">
                <div className="bg-black h-full w-full">black</div>
              </div>
            </div>
            <div className="px-4 flex flex-col gap-2">
              <div className="text-xl font-bold">TITLE</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                quos corrupti accusantium iure autem odio pariatur ea atque
                laborum totam. Eius aspernatur, voluptatum fugiat non explicabo
                corrupti cupiditate qui laboriosam ratione, magnam dignissimos
                sit ipsa itaque?
              </div>
              <div>SUMMARY PRODUCT COST</div>
              <div className="flex gap-10">
                <FullClearItemButton id={1} />
                <ReactStars count={5} size={24} color2={"#ffd700"} />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-center">EACH PRICE</div>
              <div className="flex gap-4">
                <button> -</button>2<button> +</button>
              </div>
            </div>
          </div>
        </div>
        <OrderResume />
      </div>
    </div>
  );
}
