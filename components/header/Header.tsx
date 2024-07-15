// components/Header.tsx
"use client";
import React from "react";
import { useHeader } from "@/utils/useHeader";
import { useAppDispatch } from "@/lib/hookts";
import { closeModal } from "@/lib/features/modal/ModalSlice";
import CategoriesModal from "@/components/categoriesModal/CategoriesModal";
import ClosedModal from "../categoriesModal/StripeClosedModal";
import { AnimatePresence } from "framer-motion";
import DesktopHeader from "./headerCompontents/DesktopHeader";
import MobileHeader from "./headerCompontents/MobileHeader";

export default function Header() {
  const {
    openCategories,
    isScrolled,
    mediumWindowWidthSize,
    isLoaded,
    handleOpenModal,
    handleCloseModal,
  } = useHeader();
  const dispatch = useAppDispatch();

  return (
    <header
      className={`sticky top-0 left-0 z-40 bg-gray-800 text-white pb-4 pt-1m md:px-4 ${
        isScrolled ? "pt-4" : "pt-2"
      } ${
        isScrolled ? "bg-opacity-75" : "bg-opacity-100"
      } transition-all duration-300`}
      onClick={() => dispatch(closeModal())}
    >
      {mediumWindowWidthSize ? (
        <MobileHeader isScrolled={isScrolled} isLoaded={isLoaded} />
      ) : (
        <DesktopHeader isScrolled={isScrolled} />
      )}

      <AnimatePresence mode="wait">
        {openCategories ? (
          <CategoriesModal
            handleCloseModal={handleCloseModal}
            openCategories={openCategories}
          />
        ) : (
          <ClosedModal handleOpenModal={handleOpenModal} />
        )}
      </AnimatePresence>
    </header>
  );
}
