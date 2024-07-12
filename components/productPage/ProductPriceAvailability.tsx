import React from "react";
import { Product } from "@/lib/types/types";
import { FaDotCircle } from "react-icons/fa";

const ProductPriceAvailability = ({ product }: { product: Product }) => (
  <>
    <div className="text-right">
      Cheapest price in 30 days:{" "}
      <span className="line-through">{(product.price * 1.1).toFixed(2)} $</span>
    </div>
    <div className="text-right text-5xl font-extrabold text-gray-900 mb-12">
      {product.price} $
    </div>
    <div className="px-2 py-4 bg-gray-200 rounded-lg my-12">
      <p className="text-xl font-semibold">
        In 0% installments from {(product.price / 10).toFixed(2)} $ per month
      </p>
      <p>Installments count: 10</p>
    </div>
    <div
      className={`flex items-center font-bold ${
        product.availabilityStatus === "In Stock"
          ? "text-green-500"
          : "text-red-500"
      } `}
    >
      <FaDotCircle className="mr-2" /> Availability:{" "}
      {product.availabilityStatus}
    </div>
    {product.shippingInformation && (
      <div className="flex items-center font-medium">
        <FaDotCircle className="mr-2" /> {product.shippingInformation}
      </div>
    )}
    <div className="flex items-center font-medium">
      <FaDotCircle className="mr-2" /> {product.warrantyInformation}
    </div>
    <div className="w-full h-[2px] bg-slate-300 my-16"></div>
  </>
);

export default ProductPriceAvailability;
