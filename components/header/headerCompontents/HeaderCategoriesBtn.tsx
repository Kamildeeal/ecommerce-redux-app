import React from "react";
import { HiMenu } from "react-icons/hi";

interface HeaderButtonProps {
  handleOpenModal: () => void;
  isScrolled: boolean;
}

const HeaderButton = ({ handleOpenModal, isScrolled }: HeaderButtonProps) => {
  return (
    <button
      onClick={handleOpenModal}
      className={`hover:bg-gray-700 bg-gray-800 text-white px-4 py-2 rounded border-2 border-white mx-2 flex items-center transition-all duration-300 ${
        isScrolled ? "bg-opacity-75" : "bg-opacity-100"
      }`}
    >
      <HiMenu className="mr-2 text-2xl" />
      <span className="relative bottom-[2px]">Categories</span>
    </button>
  );
};

export default HeaderButton;
