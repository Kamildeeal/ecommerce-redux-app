import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store"; // Upewnij się, że masz odpowiednią ścieżkę do store

export default function Header() {
  // const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="hover:text-gray-300">
          <h1 className="text-3xl font-bold">KamShop</h1>
        </Link>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
          <Link href="/cart">
            <div className="relative bg-yellow-700 flex gap-2 h-8 w-20 rounded-md justify-center items-center cursor-pointer hover:bg-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="hover:text-black">Cart</span>
              {/* {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 mt-1 mr-1 text-xs bg-red-500 text-white rounded-full px-2 py-1">
                  {cartItems.length}
                </span>
              )} */}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
