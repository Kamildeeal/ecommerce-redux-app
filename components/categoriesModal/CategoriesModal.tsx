"use client";

import React, { useState } from "react";
import CategoriesList from "./CategoriesList";
import { AnimatePresence, motion } from "framer-motion";
import { categoriesSlide } from "@/components/animations/animateVariants";

const CategoriesModal = ({
  handleCloseModal,
  openCategories,
}: {
  handleCloseModal: () => void;
  openCategories: boolean;
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      handleCloseModal();
      setIsClosing(false);
    }, 300);
  };

  return (
    // desktop tablet Modal - big devices
    <AnimatePresence>
      {!isClosing && (
        <div className="overflow-auto">
          <div
            onClick={handleClose}
            className="z-[30] fixed top-0 left-0 w-[100vw] h-[100vh] "
          ></div>
          <motion.div
            variants={categoriesSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="z-[35] fixed top-0 left-0 w-[320px] h-[85vh] bg-white border-l-2 border-2 border-gray-800 rounded-r-xl my-[28px]"
          >
            <div className="py-6 px-6 flex flex-col h-full">
              <button
                onClick={handleClose}
                className="text-red-500 text-xl text-end"
              >
                ✖️
              </button>
              <div className="text-black font-mono text-4xl">KamShop</div>
              <span className="bg-black h-[2px] w-full my-8 text-black"></span>
              <div className="text-black text-2xl font-semibold">
                Categories:
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                <CategoriesList handleCloseModal={handleClose} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CategoriesModal;
