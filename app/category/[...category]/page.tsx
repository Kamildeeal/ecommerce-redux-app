import React from "react";
import CategoryPage from "@/components/categoryPage/CategoryPage";
import { CategoryPageProps } from "@/components/categoryPage/CategoryPage";

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = params.category[0];

  return {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} - Products`,
    description: `Explore our wide selection of products in the ${category} category. Find the best deals and top-rated items.`,
  };
}

const CategoryPageWrapper = (props: CategoryPageProps) => {
  return <CategoryPage {...props} />;
};

export default CategoryPageWrapper;
