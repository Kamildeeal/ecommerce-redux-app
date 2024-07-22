"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import OrderResume from "@/components/cartPage/OrderResume";
import { CartProduct } from "@/lib/types/types";
import RecipientDetails from "@/components/cartPage/RecipientDetails";

export default function orderPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cartProducts = useAppSelector(
    (state: RootState) => state.cartProducts
  ) as CartProduct[];

  return (
    <div className="flex mx-auto flex-col ">
      {/* <h1 className="text-3xl font-bold mb-4 text-center mt-4 border-b-2 pb-2 w-full shadow-bottom-only flex justify-center gap-3 ">
        Order resume
        <LiaShippingFastSolid className="mt-2" />
      </h1> */}

      <div className="px-8 sm:px-20 w-full min-w-[360px]">
        <div className="xl:flex-row flex flex-col">
          <div className="text-2xl md:text-3xl px-2 md:px-[3.2rem] my-2 ">
            <RecipientDetails />
          </div>
          <div className="xl:flex-row flex flex-col">
            <div className="px-8 sm:px-20 w-full min-w-[360px]">
              <OrderResume />
            </div>
          </div>
        </div>
      </div>

      {/* {cartProducts.length === 0 && (
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
      )} */}
    </div>
  );
}
