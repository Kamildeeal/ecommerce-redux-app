"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { closeModal } from "@/lib/features/modal/ModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { HiMenu } from "react-icons/hi";
import NavbarCartIcon from "./headerCompontents/NavbarCartIcon";
import CategoriesModal from "@/components/categoriesModal/CategoriesModal";
import ClosedModal from "../categoriesModal/StripeClosedModal";
import { AnimatePresence } from "framer-motion";
import { RootState } from "@/lib/store";
import UserSvg from "@/assets/icons/userSvg";
import HeaderLogo from "./headerCompontents/HeaderLogo";
import HeaderCategoriesBtn from "./headerCompontents/HeaderCategoriesBtn";
import HeaderSearchInput from "./headerCompontents/HeaderSearchInput";

export default function Header() {
  const [openCategories, setOpenCategories] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { filteredProducts } = useAppSelector(
    (state: RootState) => state.products
  );
  const inputRef: any = useRef();

  const handleOpenModal = () => {
    setOpenCategories((prev) => !prev);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseModal = () => {
    setOpenCategories((prev) => !prev);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSumbit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;

    inputRef.current.value === "";
  };

  return (
    <header
      className={`sticky top-0 left-0 z-40 bg-gray-800 text-white pb-4 pt-1 ${
        isScrolled ? "pt-3" : "pt-0"
      } ${
        isScrolled ? "bg-opacity-75" : "bg-opacity-100"
      } transition-all duration-300`}
      onClick={() => dispatch(closeModal())}
      style={{ height: "80px" }}
    >
      <div className="z-50 container mx-auto flex justify-between items-center">
        <HeaderLogo isScrolled={isScrolled} />
        <div className="ml-auto flex items-center flex-grow mx-4">
          <HeaderCategoriesBtn
            handleOpenModal={handleOpenModal}
            isScrolled={false}
          />
          <HeaderSearchInput />
        </div>
        <nav className="flex items-center space-x-6">
          <button className="bg-white text-gray-800 p-2 rounded-full">
            <UserSvg />
          </button>
          <NavbarCartIcon />
        </nav>
      </div>
      <AnimatePresence mode="wait">
        {openCategories ? (
          <CategoriesModal
            handleCloseModal={handleCloseModal}
            openCategories={openCategories}
          />
        ) : (
          <AnimatePresence>
            <ClosedModal handleOpenModal={handleOpenModal} />
          </AnimatePresence>
        )}
      </AnimatePresence>
    </header>
  );
}
