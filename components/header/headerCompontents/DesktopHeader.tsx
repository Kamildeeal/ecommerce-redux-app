"use client";

import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCategoriesBtn from "./HeaderCategoriesBtn";
import HeaderSearchInput from "./HeaderSearchInput";
import UserSvg from "@/assets/icons/UserSvg";
import NavbarCartIcon from "./NavbarCartIcon";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useSignIn } from "@clerk/nextjs";

interface DesktopHeaderProps {
  isScrolled: boolean;
  handleOpenModal: () => void;
}

const DesktopHeader = ({ isScrolled, handleOpenModal }: DesktopHeaderProps) => {
  const { user } = useUser();
  return (
    <div className="z-50 container mx-auto flex justify-between items-center">
      <div className="flex">
        <HeaderLogo isScrolled={isScrolled} />
      </div>
      <div className="ml-auto w-full flex items-center flex-grow mx-4">
        <HeaderCategoriesBtn
          handleOpenModal={handleOpenModal}
          isScrolled={false}
        />
        <HeaderSearchInput />
      </div>
      <div className="flex items-center ">
        <div className="flex flex-row items-center py-1 px-2 border-[1px] border-gray-300 rounded-xl mr-6">
          {user ? (
            <span className="font-roboto text-sm ml-0">{user.firstName}</span>
          ) : (
            <span className="font-roboto text-sm ml-0"> Guest</span>
          )}

          <button className=" scale-110 ml-2">
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
          </button>
        </div>
        <NavbarCartIcon />
      </div>
    </div>
  );
};

export default DesktopHeader;
