import { useAppSelector } from "@/lib/hookts";
import React from "react";
import categoryIcons from "./CategoryIcons";
import Categories from "@/lib/enums/ProductCategories";

const ClosedModal = ({
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
        className="z-[35] fixed top-0 left-0 w-[60px] max-h-max bg-gray-200 bg-opacity-40 border-l-2 border-gray-800 rounded-r-xl my-[15vh]"
      >
        <div className="py-2 px-1 flex flex-col h-full">
          {Object.values(Categories).map((category) => {
            const IconComponent = categoryIcons[category as Categories];
            return (
              <div key={category} className="my-2 mx-auto">
                <div className="p-2 rounded-full cursor-pointer hover:bg-gray-300 transition-all duration-300">
                  <IconComponent className="text-[1.7rem] text-black" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClosedModal;
