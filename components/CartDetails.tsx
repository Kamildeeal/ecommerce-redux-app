"use client";

import React from "react";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import Link from "next/link";

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
    <div className=" mt-2 bg-slate-200 p-3 shadow-md rounded-md text-center max-w-max font-serif duration-300 hover:bg-slate-300">
      <Link href="/cart">
        <h1 className="text-xl font-bold mb-4 hover:underline">Cart Details</h1>
        <div className="text-xl">
          Total items: <br /> <b>{totalProducts}</b>
        </div>
        <div className="text-xl">
          Total price: <br />
          <b>${totalPrice.toFixed(2)}</b>
        </div>
      </Link>
    </div>
  );
}
