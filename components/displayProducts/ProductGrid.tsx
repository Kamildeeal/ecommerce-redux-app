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
import CategoriesHomePage from "./CategoriesHomePage";

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
    <div>
      {/* {productsToDisplay.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      {/* {filteredProducts.map((product) => (
        <div key={product.id}> {product.category}</div>
      ))} */}
      <h2 className=" text-center md:text-left text-xl sm:text-2xl  mt-2 font-roboto text-gray-800 font-semibold mb-4">
        Categories and products
      </h2>
      <CategoriesHomePage />

      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <ClipLoader color={"black"} loading={loading} size={150} />
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
