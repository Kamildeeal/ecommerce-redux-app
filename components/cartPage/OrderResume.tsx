import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import React from "react";

export default function OrderResume() {
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
    <div className="sm:mx-12 my-8 font-semibold shadow-lg lg:sticky lg:top-32 xl:max-w-[380px] xl:w-full xl:h-[280px] rounded-lg xl:mx-8 border-4 bg-gray-200 max-w-full shadow-bottom-only ">
      <h1 className="text-2xl text-center py-5 border-b-2 border-gray-600 shadow-bottom-only">
        Order Summary
      </h1>
      <div className="text-xl px-2 gap-3 mt-5 flex flex-col">
        <p className="font-normal">
          Items in cart:{" "}
          <span className="font-mono font-semibold">{totalProducts}</span>
        </p>
        <p className="font-normal">
          Total price:{" "}
          <span className="font-mono font-semibold">
            {totalPrice.toFixed(2)}$
          </span>
        </p>
      </div>
      <div className="mx-auto my-2 lg:my-10 px-4 py-2 text-xl border-2 max-w-max border-gray-800 font-bold text-white bg-gray-800 rounded-lg shadow-sm cursor cursor-pointer transition hover:text-gray-800 hover:bg-white">
        Pay now
      </div>
    </div>
  );
}
