"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavbarCartIcon from "./headerCompontents/NavbarCartIcon";
import { closeModal } from "@/lib/features/modal/ModalSlice";
import { useAppDispatch } from "@/lib/hookts";
import { HiMenu } from "react-icons/hi";
import CategoriesModal from "@/components/categories/CategoriesModal";

export default function Header() {
  const [openCategories, setOpenCategories] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    setOpenCategories(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseModal = () => {
    setOpenCategories(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header
      className="sticky top-0 left-0 z-40 bg-gray-800 text-white pb-4 pt-1"
      onClick={() => dispatch(closeModal())}
    >
      <div className="z-50 container mx-auto flex justify-between items-center">
        <Link href="/" className="hover:text-gray-300">
          <h1 className="text-3xl font-bold mr-8">KamShop</h1>
        </Link>
        <div className="ml-auto flex items-center flex-grow mx-4">
          <button
            onClick={() => handleOpenModal()}
            className="hover:bg-gray-700 bg-gray-800 text-white px-4 py-2 rounded border-2 border-white mx-2 flex items-center"
          >
            <HiMenu className="mr-2 text-2xl" />
            <span className="relative bottom-[2px]">Categories</span>
          </button>
          <input
            type="text"
            placeholder="What are you searching for?"
            className="w-full px-4 py-2 rounded text-black max-w-[40vw] mx-auto"
          />
        </div>
        <nav className="flex items-center space-x-6">
          <button className="bg-white text-gray-800 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          <NavbarCartIcon />
        </nav>
      </div>
      {openCategories && (
        <CategoriesModal setOpenCategories={handleCloseModal} />
      )}
    </header>
  );
}
