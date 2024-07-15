"use client";
import React from "react";
import Link from "next/link";
import CartDetails from "./CartDetails";
import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";

export default function NavbarCartIcon() {
  const cartProducts = useAppSelector((state: RootState) => state.cartProducts);
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <Link href="/cart">
      <div className="relative lg:text-2xl bg-yellow-700  flex gap-2 px-6 py-2 rounded-md justify-center items-center cursor-pointer hover:bg-yellow-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        {cartProducts.length > 0 && <CartDetails />}
        <span className="hover:text-black hidden sm:flex">Cart</span>
      </div>
    </Link>
  );
}
