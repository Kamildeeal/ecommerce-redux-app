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
      className="px-3 py-2 bg-red-500 text-white text-sm font-bold uppercase rounded duration-500 hover:bg-red-800"
      onClick={() => {
        dispatch(removeProduct(id));
      }}
    >
      Clear item
    </button>
  );
}
