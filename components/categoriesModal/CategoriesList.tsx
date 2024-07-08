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
          <span className="ml-auto"> → </span>
        </CategoryItem>
      ))}
    </div>
  );
};

export default CategoriesList;
