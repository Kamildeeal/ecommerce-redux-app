// components/MobileHeader.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLogo from "./HeaderLogo";
import HeaderCategoriesBtn from "./HeaderCategoriesBtn";
import HeaderSearchInput from "./HeaderSearchInput";
import UserSvg from "@/assets/icons/UserSvg";
import NavbarCartIcon from "./NavbarCartIcon";
import { categoriesSlide } from "@/app/styles/animations/animateVariants";

interface MobileHeaderProps {
  isScrolled: boolean;
  isLoaded: boolean;
  handleOpenModal: () => void;
}

const MobileHeader = ({
  isScrolled,
  isLoaded,
  handleOpenModal,
}: MobileHeaderProps) => {
  return (
    <>
      <div className="z-50 container mx-auto flex justify-between items-center flex-col">
        <div className="flex">
          {isScrolled ? <div></div> : <HeaderLogo isScrolled={isScrolled} />}
        </div>
        <div className="w-full flex items-center flex-grow mx-4">
          <HeaderCategoriesBtn
            handleOpenModal={handleOpenModal}
            isScrolled={false}
          />
          <HeaderSearchInput />
        </div>
      </div>
      {isLoaded && (
        <div className="fixed bottom-0 flex min-w-[360px] w-full gap-4 bg-gray-800 px-8 py-2 border-t-[1px] border-gray-400">
          <AnimatePresence mode="wait">
            {isScrolled && (
              <motion.div
                variants={categoriesSlide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <HeaderLogo isScrolled={isScrolled} />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex gap-4 ml-auto">
            <button className="bg-white text-gray-800 p-2 rounded-full">
              <UserSvg />
            </button>
            <NavbarCartIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
