import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import React from "react";

export default function () {
  const cartProducts = useAppSelector((state: RootState) => state.cartProducts);

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const totalProducts = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <div className="font-semibold sticky top-32 max-w-[380px] w-full h-[200px] rounded-lg mx-8 border-4 bg-gray-200">
      <h1 className="text-2xl text-center py-5 border-b-2 border-gray-600">
        Order Summary
      </h1>
      <div className="text-xl px-2 gap-3 mt-5 flex flex-col">
        <p className="font-normal">
          Items in cart:{" "}
          <span className="font-mono font-semibold">{totalProducts}</span>
        </p>
        <p className="font-normal">
          Total price: ${" "}
          <span className="font-mono font-semibold">
            {totalPrice.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}
