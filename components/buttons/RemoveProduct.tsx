import { decrementProductQuantity } from "@/lib/features/products/CartProductsSlice";
import { useAppDispatch } from "@/lib/hookts";
import React from "react";

interface RemoveProductProps {
  id: number;
}

export default function RemoveProductButton({ id }: RemoveProductProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="px-3 py-2 bg-orange-400 text-white text-sm font-bold uppercase rounded duration-500 hover:bg-yellow-800"
      onClick={() => {
        dispatch(decrementProductQuantity(id));
      }}
    >
      Remove (-1)
    </button>
  );
}
