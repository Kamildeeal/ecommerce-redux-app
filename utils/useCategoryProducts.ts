"use client";
import { useEffect, useCallback } from "react";
import { notFound } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import {
  setCategoryFilter,
  fetchProducts,
  sortProductsByCategory,
} from "@/lib/features/products/FetchDataSlice";
import Categories from "@/lib/enums/ProductCategories";
import { RootState } from "@/lib/store";

const useCategoryProducts = (category: string) => {
  const dispatch = useAppDispatch();
  const { filteredProducts, loading } = useAppSelector(
    (state: RootState) => state.products
  );

  const isCategoryValid = useCallback((cat: string): cat is Categories => {
    return Object.values(Categories).includes(cat as Categories);
  }, []);

  const fetchAndSortProducts = useCallback(async () => {
    const action = await dispatch(fetchProducts());
    if (action.type === "products/fetchProducts/fulfilled") {
      dispatch(setCategoryFilter(category));
      dispatch(sortProductsByCategory());
    }
  }, [dispatch, category]);

  const handleCategoryChange = useCallback(async () => {
    if (!category || !isCategoryValid(category)) {
      notFound();
      return;
    }

    if (filteredProducts.length === 0) {
      await fetchAndSortProducts();
    } else {
      dispatch(setCategoryFilter(category));
    }
  }, [
    category,
    dispatch,
    filteredProducts.length,
    isCategoryValid,
    fetchAndSortProducts,
  ]);

  useEffect(() => {
    handleCategoryChange();
  }, [handleCategoryChange]);

  return { filteredProducts, loading };
};

export default useCategoryProducts;
