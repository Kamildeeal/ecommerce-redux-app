import React from "react";

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const CategoryItem = ({
  category,
  onClick,
  children,
}: {
  category: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      onClick={onClick}
      className="text-black flex justify-between my-2 py-4 pl-4 pr-2 rounded-md text-xl hover:bg-slate-100 cursor-pointer"
    >
      <p className="hover:underline cursor-pointer">
        {capitalizeFirstLetter(category)}
      </p>
      {children}
    </div>
  );
};

export default CategoryItem;
