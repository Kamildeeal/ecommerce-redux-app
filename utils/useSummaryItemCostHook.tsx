import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import React from "react";

export default function useSummaryItemCost() {
  const cartProducts = useAppSelector((state: RootState) => state.cartProducts);

  const totalProducts = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const summaryItemCost = cartProducts.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: product.quantity,
    totalItemPrice: product.price * product.quantity,
  }));

  const exactItemCost = cartProducts.map((product) => ({
    price: product.price,
  }));

  return { summaryItemCost, exactItemCost, totalPrice, totalProducts };
}
