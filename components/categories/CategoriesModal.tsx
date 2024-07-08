import { useAppSelector } from "@/lib/hookts";
import React from "react";
import CategoriesList from "./CategoriesList";

const CategoriesModal = ({
  setOpenCategories,
}: {
  setOpenCategories: () => void;
}) => {
  const categories = useAppSelector((state) => state.products.products);

  return (
    // desktop tablet Modal - big devices
    <div className="overflow-auto">
      <div
        onClick={setOpenCategories}
        className="z-[30] fixed top-0 left-0 w-[100vw] h-[100vh] bg-opacity-35 bg-slate-900"
      ></div>
      <div className="z-[35] fixed top-0 left-0 w-[320px] h-[95vh] bg-white border-l-2 border-gray-800 rounded-r-xl my-[28px]">
        <div className="py-6 px-6 flex flex-col h-full">
          <button
            onClick={setOpenCategories}
            className="text-red-500 text-xl text-end"
          >
            ✖️
          </button>
          <div className="text-black font-mono text-4xl">KamShop</div>
          <span className="bg-black h-[2px] w-full my-8 text-black"></span>
          <div className="text-black text-2xl font-semibold">Categories:</div>
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
            <CategoriesList setOpenCategories={setOpenCategories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesModal;
