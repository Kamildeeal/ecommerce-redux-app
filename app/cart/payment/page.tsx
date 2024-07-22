"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import OrderResume from "@/components/cartPage/OrderResume";
import { CartProduct } from "@/lib/types/types";
import { SiContactlesspayment } from "react-icons/si";
import { PaymentMethodSelector } from "@/components/cartPage/Payment";
import Link from "next/link";

export default function orderPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cartProducts = useAppSelector(
    (state: RootState) => state.cartProducts
  ) as CartProduct[];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const clientInfo = useAppSelector((state: RootState) => state.clientInfo);

  return (
    <div className="flex mx-auto flex-col ">
      <div className="px-8 sm:px-20 w-full ">
        <div className="xl:flex-row flex flex-col">
          <div className="flex flex-col md:flex-row justify-center mx-auto">
            {clientInfo.firstName !== "" && (
              <div className="min-w-[240px] w-full border-2 border-gray-400 px-4 py-6 gap-4 max-h-max rounded-lg shadow-bottom-only">
                <h3 className="font-bold text-lg">Shipping address</h3>
                <p>{clientInfo.firstName}</p>
                <p>{clientInfo.lastName}</p>
                <p>
                  {clientInfo.postalCode} {clientInfo.city}
                </p>
                <p>{clientInfo.country}</p>
                <p>{clientInfo.phoneNumber}</p>
                <p>{clientInfo.email}</p>
              </div>
            )}

            <div className="w-full lg:min-w-[600px] text-2xl md:text-3xl px-2 md:px-[3.2rem] my-2 ">
              <PaymentMethodSelector />
            </div>
          </div>
          <div className="xl:flex-row flex flex-col">
            <div className="px-8 sm:px-20 w-full min-w-[360px]">
              <OrderResume />
              <div
                className={`mx-auto my-2 px-4 py-2 text-xl border-2 max-w-max border-gray-400 font-bold text-white ${
                  cartProducts.length === 0 ? "bg-red-500" : "bg-blue-600"
                }  rounded-lg shadow-sm cursor cursor-pointer transition hover:text-gray-800 hover:bg-white`}
              >
                {cartProducts.length === 0 ? (
                  <Link href="/">
                    <p>Add items to cart!</p>
                  </Link>
                ) : (
                  "Pay and finish order!"
                )}
              </div>
              <div className="mx-auto flex justify-center">
                {clientInfo.firstName === "" && (
                  <Link href="/cart/order">
                    <button
                      className={`mx-auto my-2 px-4 py-2 text-xl border-2 max-w-max border-gray-400 font-bold text-white bg-red-500 rounded-lg shadow-sm cursor cursor-pointer transition hover:text-gray-800 hover:bg-white`}
                    >
                      Fill order resume!
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
