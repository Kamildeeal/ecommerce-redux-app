"use client";

import React from "react";
import OrderResume from "@/components/cartPage/OrderResume";
import RecipientDetails from "@/components/cartPage/RecipientDetails";

export default function OrderPage() {
  return (
    <div className="flex mx-auto flex-col ">
      <div className="px-2 sm:px-20 w-full min-w-[360px]">
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
    </div>
  );
}
