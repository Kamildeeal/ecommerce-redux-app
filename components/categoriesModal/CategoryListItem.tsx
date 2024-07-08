import Link from "next/link";
import React from "react";

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const CategoryItem = ({
  category,
  handleCategoryChange,
  children,
}: {
  category: string;
  handleCategoryChange: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link href={category === "allItems" ? "/" : `/category/${category}`}>
      <div
        onClick={handleCategoryChange}
        className="text-black flex justify-between my-2 py-4 pl-4 pr-2 rounded-md text-xl hover:bg-slate-100 cursor-pointer"
      >
        <p className="hover:underline cursor-pointer">
          {capitalizeFirstLetter(category)}
        </p>
        {children}
      </div>
    </Link>
  );
};

export default CategoryItem;
