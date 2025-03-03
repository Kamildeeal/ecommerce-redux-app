"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import Hero from "../hero/Hero";
import SafePaymentMethods from "../displayProducts/SafePaymentsDisplay";

import ProductGrid from "./ProductGrid";
import RecommendedProducts from "./RecommendedProducts";
import FAQ from "./FAQ";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div data-testid="display-products w-full">
      <Hero />
      <ProductGrid />
      <RecommendedProducts />
      <div className="absolute left-0 w-full h-[3px] my-4 bg-gray-300 border-b-[1px] shadow-bottom-only"></div>
      <FAQ />
      <div className="absolute left-0 w-full h-[3px] my-4 bg-gray-300 border-b-[1px] shadow-bottom-only"></div>
      <SafePaymentMethods />
    </div>
  );
};

export default ProductList;
