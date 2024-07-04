import { removeProduct } from "@/lib/features/products/CartProductsSlice";
import { useAppDispatch } from "@/lib/hookts";
import React from "react";

interface ClearCartProps {
  id: number;
}

export default function FullClearItemButton({ id }: ClearCartProps) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="relative w-[7.5rem]  px-3 py-2 pl-8 bg-red-500 text-white text-sm font-bold uppercase rounded duration-500 hover:bg-red-800 before:content-['🗑️'] before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2"
      onClick={() => {
        dispatch(removeProduct(id));
      }}
    >
      Remove
    </button>
  );
}
