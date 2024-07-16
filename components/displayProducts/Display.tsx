"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import Hero from "../hero/Hero";

import ProductGrid from "./ProductGrid";

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
    <div data-testid="display-products">
      <Hero />
      <ProductGrid />
    </div>
  );
};

export default ProductList;
