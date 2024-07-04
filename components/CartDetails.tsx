"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";

export default function CartDetails() {
  const cartProducts = useAppSelector((state: RootState) => state.cartProducts);

  const totalProducts = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="absolute left-8 bottom-8 text-sm bg-blue-400 flex items-center text-center justify-center rounded-full p-1.5 w-6 h-6 z-50">
      {totalProducts}
    </div>
  );
}
