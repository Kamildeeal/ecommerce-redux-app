import React from "react";
import {
  setCategoryFilter,
  sortProductsByCategory,
} from "@/lib/features/products/FetchDataSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import Categories from "@/lib/enums/ProductCategories";
import CategoryItem from "./CategoryListItem";
import Link from "next/link";
import { RootState } from "@/lib/store";

const CategoriesList = ({
  setOpenCategories,
}: {
  setOpenCategories: () => void;
}) => {
  const dispatch = useAppDispatch();

  const handleCategoryChange = async (category: string) => {
    await dispatch(setCategoryFilter(category));
    await dispatch(sortProductsByCategory());
    setOpenCategories();
  };

  return (
    <div>
      {Object.values(Categories).map((category) => (
        <CategoryItem
          key={category}
          category={category}
          handleCategoryChange={() => handleCategoryChange(category)}
        >
          <span> → </span>
        </CategoryItem>
      ))}
    </div>
  );
};

export default CategoriesList;
