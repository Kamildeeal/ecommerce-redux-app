import { useAppSelector } from "@/lib/hookts";
import React from "react";
import categoryIcons from "./CategoryIcons";
import Categories from "@/lib/enums/ProductCategories";
import { AnimatePresence, motion } from "framer-motion";
import {
  categoriesSlide,
  menuSlide,
  stripeSlide,
} from "@/app/styles/animations/animateVariants";

const ClosedModal = ({ handleOpenModal }: { handleOpenModal: () => void }) => {
  const categories = useAppSelector((state) => state.products.products);

  return (
    // desktop tablet Modal - big devices
    <AnimatePresence>
      <div
        onClick={handleOpenModal}
        className="z-[35] fixed top-0 left-0 w-[60px] max-h-max bg-gray-200 bg-opacity-40 border-l-2 border-gray-800 rounded-r-xl my-[15vh]"
      >
        <div className="py-2 px-1 flex flex-col h-full">
          {Object.values(Categories).map((category) => {
            const IconComponent = categoryIcons[category as Categories];
            return (
              <motion.div
                className="overflow-auto"
                variants={stripeSlide}
                initial="initial"
                animate="enter"
                exit="exit"
                key={category}
              >
                <div className="my-1 mx-auto">
                  <div className="p-2 rounded-full cursor-pointer hover:bg-gray-300 transition-all duration-300">
                    <IconComponent className="text-[1.5rem] text-black mx-auto" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ClosedModal;
