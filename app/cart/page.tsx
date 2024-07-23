"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import OrderResume from "@/components/cartPage/OrderResume";
import { TfiFaceSad } from "react-icons/tfi";
import Link from "next/link";
import CartEachProduct from "@/components/cartPage/CartEachProduct";
import { CartProduct } from "@/lib/types/types";
import ContinueBtn from "@/components/buttons/ContinueBtn";

export default function cartPage() {
  const cartProducts = useAppSelector(
    (state: RootState) => state.cartProducts
  ) as CartProduct[];

  return (
    <div className="flex mx-auto flex-col ">
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
          {cartProducts.length > 0 && (
            <div className="flex flex-col">
              <OrderResume />
              <ContinueBtn />
            </div>
          )}
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
