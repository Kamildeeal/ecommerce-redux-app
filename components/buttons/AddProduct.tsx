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
      className="px-3 py-2 bg-green-500 text-white text-sm font-bold uppercase rounded duration-500 hover:bg-blue-800"
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
      Add (+1)
    </button>
  );
};

export default AddProductButton;
