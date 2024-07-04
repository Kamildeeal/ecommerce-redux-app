"use client";

import React from "react";
import CartDetails from "@/components/CartDetails";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import Image from "next/image";
import {
  addProduct,
  decrementProductQuantity,
  removeProduct,
} from "@/lib/features/products/CartProductsSlice";

export default function cartPage() {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state: RootState) => state.cartProducts);

  return (
    <div className="mx-auto py-10 px-12">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="flex">
        {cartProducts?.map((product: any) => (
          <div
            key={product.id}
            className="w-full flex justify-between bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden py-4 px-8"
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
            <div>{product.description}</div>
            <button
              className="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded duration-500 hover:bg-red-800"
              onClick={() => {
                dispatch(removeProduct(product.id));
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
