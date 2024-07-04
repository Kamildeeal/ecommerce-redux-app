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
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <CartDetails />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-6 lg:px-48">
        {cartProducts?.map((product: any) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative w-[300px] h-[300px]">
              <Image
                src={product.image}
                alt="Picture of the author"
                sizes="300px"
                fill
                className="object-contain"
              />
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
