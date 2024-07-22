"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";

const ShippingAddress: React.FC = () => {
  const clientInfo = useAppSelector((state: RootState) => state.clientInfo);

  if (clientInfo.firstName === "") {
    return null;
  }

  return (
    <div className="min-w-[240px] w-full border-2 border-gray-400 px-4 py-6 gap-4 h-fit rounded-lg shadow-bottom-only mt-6">
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
  );
};

export default ShippingAddress;
