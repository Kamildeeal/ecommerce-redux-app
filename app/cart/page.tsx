"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import OrderResume from "@/components/cartPage/OrderResume";
import { TfiFaceSad } from "react-icons/tfi";
import Link from "next/link";
import CartEachProduct from "@/components/cartPage/CartEachProduct";
import { BsCart3 } from "react-icons/bs";

export default function cartPage() {
  const cartProducts = useAppSelector((state: RootState) => state.cartProducts);

  return (
    <div className="flex mx-auto flex-col ">
      <h1 className="text-3xl font-bold mb-4 text-center mt-4 border-b-2 pb-2 w-full shadow-bottom-only flex justify-center gap-3 ">
        Your Cart
        <BsCart3 />
      </h1>

      <div className="px-8 sm:px-20 w-full min-w-[360px]">
        {cartProducts.length > 0 && (
          <div className="text-2xl md:text-3xl px-2 md:px-[3.2rem] my-2 font-climate-crisis">
            Products
          </div>
        )}
        <div className="xl:flex-row flex flex-col">
          <div className="mx-auto py-2 sm:pb-10 md:px-12 flex flex-col max-w-[1440px] w-full justify-center">
            {cartProducts?.map((product) => (
              <CartEachProduct key={product.id} product={product} />
            ))}
          </div>
          {cartProducts.length > 0 && <OrderResume />}
        </div>
      </div>

      {cartProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-lg mx-auto">Your cart is empty.</div>
          <div className=" text-8xl mx-auto my-6">
            <TfiFaceSad />
          </div>
          <Link href={"/"}>
            <div className="px-4 py-4 text-xl border-2 border-gray-800 font-bold text-white bg-gray-800 rounded-lg shadow-sm cursor cursor-pointer transition hover:text-gray-800 hover:bg-white">
              Start shopping
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
