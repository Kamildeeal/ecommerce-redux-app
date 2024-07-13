"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import Hero from "../Hero";

import ProductGrid from "./ProductGrid";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="relative">
      <Hero />
      <ProductGrid />
    </div>
  );
};

export default ProductList;
