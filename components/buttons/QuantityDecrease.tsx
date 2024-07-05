import React from "react";
import { useAppDispatch } from "@/lib/hookts";
import { decrementProductQuantity } from "@/lib/features/products/CartProductsSlice";

interface QuantityDecreaseProps {
  id: number;
  disabled: boolean;
}

const QuantityDecrease = ({ id, disabled }: QuantityDecreaseProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={` ${disabled ? "text-gray-500  cursor-default" : ""}`}
      onClick={() => {
        if (!disabled) {
          dispatch(decrementProductQuantity(id));
        }
      }}
      disabled={disabled}
    >
      ➖
    </button>
  );
};

export default QuantityDecrease;
