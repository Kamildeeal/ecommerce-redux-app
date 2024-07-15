import React from "react";
import QuantityIncrease from "@/components/buttons/QuantityIncrease";
import QuantityDecrease from "@/components/buttons/QuantityDecrease";

interface QuantityControlProps {
  id: number;
  quantity: number;
}

const QuantityControl = ({ id, quantity }: QuantityControlProps) => {
  return (
    <div className="flex gap-4 items-center mx-auto py-2">
      <div>
        <QuantityDecrease id={id} disabled={quantity == 1} />
      </div>
      <span className="font-semibold text-xl">{quantity}</span>
      <div>
        <QuantityIncrease
          id={id}
          title={""}
          image={[]}
          description={""}
          price={0}
        />
      </div>
    </div>
  );
};

export default QuantityControl;
