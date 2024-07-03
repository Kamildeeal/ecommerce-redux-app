"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";

export default function CartDetails() {
  const products = useAppSelector((state) => state.products);

  const totalProducts = products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalPrice =
    totalProducts > 0
      ? products.reduce((a, b) => a + b.price * b.quantity, 0)
      : 0;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md text-center w-full max-w-lg">
        <h1 className="text-xl font-bold mb-4">Cart Details</h1>
        <div className="text-lg">Total products: {totalProducts}</div>
        <div className="text-lg">Total price: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}
