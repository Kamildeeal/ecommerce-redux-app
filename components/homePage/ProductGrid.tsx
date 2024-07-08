"use client";

import React, { useCallback, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/types/types";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import Categories from "@/lib/enums/ProductCategories";
import {
  fetchProducts,
  loadMoreProducts,
} from "@/lib/features/products/FetchDataSlice";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const dispatch = useAppDispatch();
  const { filteredProducts, categoryFilter, displayedProducts, loading, page } =
    useAppSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleScroll = useCallback(
    (e: any) => {
      if (
        window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight
      ) {
        if (!loading) {
          dispatch(loadMoreProducts());
        }
      }
    },
    [dispatch, loading]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (loading && displayedProducts.length === 0) {
    return (
      <div className="flex justify-center text-center w-full items-center mx-auto">
        Loading...
      </div>
    );
  }

  const productsToDisplay =
    categoryFilter === Categories.AllItems
      ? displayedProducts
      : filteredProducts;

  return (
    <div className="grid justify-items-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 lg:px-12 gap-6 py-6 px-6">
      {productsToDisplay.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {loading && <p>Loading more products...</p>}
    </div>
  );
};

export default ProductGrid;
