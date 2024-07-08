import React from "react";
import {
  setCategoryFilter,
  sortProductsByCategory,
} from "@/lib/features/products/FetchDataSlice";
import { useAppDispatch } from "@/lib/hookts";
import Categories from "@/lib/enums/ProductCategories";
import CategoryItem from "./CategoryListItem";

const CategoriesList = ({
  setOpenCategories,
}: {
  setOpenCategories: () => void;
}) => {
  const dispatch = useAppDispatch();

  const handleCategoryChange = (category: string) => {
    dispatch(setCategoryFilter(category));
    dispatch(sortProductsByCategory());
    setOpenCategories();
  };

  return (
    <div>
      {Object.values(Categories).map((category) => (
        <CategoryItem
          key={category}
          category={category}
          onClick={() => handleCategoryChange(category)}
        >
          <span> → </span>
        </CategoryItem>
      ))}
    </div>
  );
};

export default CategoriesList;
