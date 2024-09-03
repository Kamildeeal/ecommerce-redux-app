// components/MobileHeader.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLogo from "./HeaderLogo";
import HeaderCategoriesBtn from "./HeaderCategoriesBtn";
import HeaderSearchInput from "./HeaderSearchInput";
import UserSvg from "@/assets/icons/UserSvg";
import NavbarCartIcon from "./NavbarCartIcon";
import { categoriesSlide } from "@/components/animations/animateVariants";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

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
          {!isScrolled && <HeaderLogo isScrolled={isScrolled} />}
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
          <div className="flex gap-4 ml-auto items-center">
            <SignedOut>
              <Link href="/sign-in">
                <div className="relative group">
                  <SignInButton>
                    <UserSvg />
                  </SignInButton>
                  <span className="absolute top-[150%] left-1/2 duration-150 transform -translate-x-1/2 mb-2 hidden w-max bg-gray-500 text-white text-xs rounded-lg py-1 px-2 group-hover:block whitespace-no-wrap">
                    Sign in to your account
                  </span>
                </div>
              </Link>
            </SignedOut>
            <div className="flex items-center">
              <SignedIn>
                <div className="my-1 flex items-center border-2 border-white rounded-full">
                  <UserButton />
                </div>
              </SignedIn>
            </div>
            <NavbarCartIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
