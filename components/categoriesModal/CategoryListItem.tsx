import Link from "next/link";
import React from "react";
import Categories from "@/lib/enums/ProductCategories";
import categoryIcons from "./CategoryIcons";

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const CategoryItem = ({
  category,
  handleCategoryChange,
  children,
}: {
  category: Categories;
  handleCategoryChange: () => void;
  children: React.ReactNode;
}) => {
  const IconComponent = categoryIcons[category];

  return (
    <Link
      href={category === Categories.AllItems ? "/" : `/category/${category}`}
    >
      <div
        onClick={handleCategoryChange}
        className="text-black items-center flex my-2 py-4 pl-0 pr-2 rounded-md text-xl hover:bg-slate-100 cursor-pointer"
      >
        {IconComponent && <IconComponent className="text-2xl" />}
        <p className="hover:underline cursor-pointer ml-5">
          {capitalizeFirstLetter(category)}
        </p>
        {children}
      </div>
    </Link>
  );
};

export default CategoryItem;
