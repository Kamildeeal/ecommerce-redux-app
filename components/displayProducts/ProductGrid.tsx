"use client";

import React, { useCallback, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import Categories from "@/lib/enums/ProductCategories";
import {
  fetchProducts,
  loadMoreProducts,
} from "@/lib/features/products/FetchDataSlice";
import ClipLoader from "react-spinners/ClipLoader";

const ProductGrid = () => {
  const dispatch = useAppDispatch();
  const { filteredProducts, categoryFilter, displayedProducts, loading } =
    useAppSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleScroll = useCallback(
    (e: UIEvent) => {
      const target = e.target as Document;
      if (
        window.innerHeight + target.documentElement.scrollTop + 1 >=
        target.documentElement.scrollHeight
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
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader color={"black"} loading={loading} size={150} />
      </div>
    );
  }

  const productsToDisplay =
    categoryFilter === Categories.AllItems
      ? displayedProducts
      : filteredProducts;

  return (
    <div className="grid justify-items-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 gap-6 py-6">
      {productsToDisplay.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <ClipLoader color={"black"} loading={loading} size={150} />
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
