"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/types/types";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import {
  setCategoryFilter,
  sortProductsByCategory,
} from "@/lib/features/products/FetchDataSlice";
import Categories from "@/lib/enums/ProductCategories";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const dispatch = useAppDispatch();
  const { loading, filteredProducts, categoryFilter, error } = useAppSelector(
    (state: RootState) => state.products
  );

  const handleCategoryChange = (category: string) => {
    dispatch(setCategoryFilter(category));
    dispatch(sortProductsByCategory());
  };

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center text-center w-full items-center mx-auto">
        Loading...
      </div>
    );
  }

  const productsToDisplay =
    categoryFilter === Categories.AllItems ? products : filteredProducts;

  return (
    <div className="grid justify-items-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 lg:px-12 gap-6 py-6 px-6">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      <button onClick={() => handleCategoryChange(Categories.Beauty)}>
        Beauty
      </button>
      <button onClick={() => handleCategoryChange(Categories.Furniture)}>
        Furniture
      </button>
      <button onClick={() => handleCategoryChange(Categories.Groceries)}>
        Groceries
      </button>
      <button onClick={() => handleCategoryChange(Categories.Fragrances)}>
        Fragrances
      </button>
      <button onClick={() => dispatch(setCategoryFilter(Categories.AllItems))}>
        All Items
      </button>
      {productsToDisplay.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {/* {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
         {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default ProductGrid;
