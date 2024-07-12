import React, { PropsWithChildren } from "react";
import { useAppDispatch } from "@/lib/hookts";
import { addProduct } from "@/lib/features/products/CartProductsSlice";

interface AddProductButtonProps {
  id: number;
  title: string;
  image: string[];
  description: string;
  price: number;
  buttonText: string;
}

const AddProductButton = ({
  id,
  title,
  image,
  description,
  price,
  buttonText,
}: AddProductButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="relative w-full px-3 py-2 pl-8 bg-green-700 border-2 border-gray-700 text-white text-sm font-bold uppercase rounded duration-500 hover:bg-green-900 before:content-['🛒'] before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2"
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
      {buttonText}
    </button>
  );
};

export default AddProductButton;
