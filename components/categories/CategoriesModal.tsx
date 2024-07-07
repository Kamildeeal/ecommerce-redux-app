"use client";

import { useAppSelector } from "@/lib/hookts";
import React from "react";
import CategoriesList from "./CategoriesList";
import TopLinksSection from "../header/headerCompontents/TopLinksSection";

const CategoriesModal = ({ setOpenCategories }: any) => {
  const categories = useAppSelector((state) => state.products.products);

  return (
    //desktop tablet Modal - big devices
    <div>
      <div
        onClick={setOpenCategories}
        className="z-[30] fixed top-[0] left-0 w-[100vw] h-[100vh] bg-opacity-35 bg-slate-900"
      ></div>
      <div className="z-[35] fixed top-0 left-0 w-[320px] h-[95vh] bg-white border-l-2 border-gray-800 rounded-r-xl my-[28px]">
        <div className="py-6 px-6 flex flex-col">
          <button
            onClick={setOpenCategories}
            className="text-red-500 text-xl text-end"
          >
            ✖️
          </button>
          <div className="text-black font-mono text-4xl">KamShop</div>
          <span className="bg-black h-[2px] w-full my-8 text-black"></span>
          <div className="text-black text-2xl font-semibold">
            {/* {categories.map((e) => (
              <div key={e.id}>{e.category}</div>
            ))} */}
            Categories:
          </div>

          <CategoriesList />
        </div>
      </div>
    </div>
  );
};

export default CategoriesModal;
