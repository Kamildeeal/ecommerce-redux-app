import React, { PropsWithChildren } from "react";
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

const QuantityIncrease = ({
  id,
  title,
  image,
  description,
  price,
}: AddProductButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
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
      ➕
    </button>
  );
};

export default QuantityIncrease;
