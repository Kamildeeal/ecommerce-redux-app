import React from "react";
import { useAppDispatch } from "@/lib/hookts";
import { addProduct } from "@/lib/features/products/CartProductsSlice";
import Product from "@/lib/types/types";

interface AddProductButtonProps {
  id: number;
  title: string;
  image: string[];
  description: string;
  price: number;
}

const AddProductButton = ({
  id,
  title,
  image,
  description,
  price,
}: AddProductButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="relative w-[7.5rem] px-3 py-2 pl-8 bg-green-500 text-white text-sm font-bold uppercase rounded duration-500 hover:bg-green-800 before:content-['🛒'] before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2"
      onClick={() => {
        dispatch(
          addProduct({
            id,
            title,
            image,
            description,
            price,
          })
        );
      }}
    >
      Add
    </button>
  );
};

export default AddProductButton;
