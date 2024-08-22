"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import OrderResume from "@/components/cartPage/OrderResume";
import { CartProduct } from "@/lib/types/types";
import { PaymentMethodSelector } from "@/components/paymentPage/Payment";
import Link from "next/link";
import ClientShippingInfo from "@/components/paymentPage/ClientShippingInfo";
import Swal from "sweetalert2";
import { clearCart } from "@/lib/features/products/CartProductsSlice";

export default function PaymentPage() {
  const cartProducts = useAppSelector(
    (state: RootState) => state.cartProducts
  ) as CartProduct[];
  const clientInfo = useAppSelector((state: RootState) => state.clientInfo);
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const dispatch = useAppDispatch();

  const handlePayNow = () => {
    if (selectedMethod !== "" && cartProducts.length !== 0) {
      Swal.fire({
        icon: "success",
        title: "Payment Successful!",
        text: `Your payment was completed successfully with ${selectedMethod}`,
      });
      dispatch(clearCart());
    } else if (selectedMethod === "") {
      Swal.fire({
        icon: "warning",
        title: "No Payment Method Selected",
        text: "Please choose a payment method before proceeding.",
      });
    }
  };

  return (
    <div className="flex mx-auto flex-col">
      <div className="px-8 sm:px-20 w-full items-center justify-center flex ">
        <div className="xl:flex-row flex flex-col max-w-[1270px]">
          <div className="flex flex-col md:flex-row justify-center mx-auto">
            {clientInfo.firstName !== "" && <ClientShippingInfo />}
          </div>
          <div className="w-full lg:min-w-[600px] text-2xl md:text-3xl px-2 md:px-[3.2rem] my-2 ">
            <PaymentMethodSelector
              setSelectedMethod={setSelectedMethod}
              selectedMethod={selectedMethod}
            />
          </div>
          <div className="xl:flex-row flex flex-col">
            <div className="px-4 mb-6 sm:px-20 w-full min-w-[310px]">
              <OrderResume />
              <div
                className={`mx-auto my-2 px-4 py-2 text-xl border-2 max-w-max border-gray-400 font-bold  duration-150 text-white ${
                  cartProducts.length === 0 ? "bg-red-500" : "bg-blue-600"
                }  rounded-lg shadow-sm cursor cursor-pointer transition hover:text-gray-800 hover:bg-white`}
                onClick={() => handlePayNow()}
              >
                {cartProducts.length === 0 ? (
                  <Link href="/">
                    <p>Add items to cart!</p>
                  </Link>
                ) : (
                  "Pay now"
                )}
              </div>
              <div className="mx-auto flex justify-center">
                {clientInfo.firstName === "" && (
                  <div className="flex flex-col">
                    <span className="mx-auto font-bold">&</span>
                    <Link href="/cart/order">
                      <button
                        className={`mx-auto my-2 px-4 py-2 text-xl border-2 max-w-max border-gray-400 font-bold text-white bg-red-500 rounded-lg shadow-sm cursor cursor-pointer transition hover:text-gray-800 hover:bg-white`}
                      >
                        Fill order resume!
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
