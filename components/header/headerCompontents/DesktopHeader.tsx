import React from "react";

import HeaderCategoriesBtn from "./HeaderCategoriesBtn";
import HeaderSearchInput from "./HeaderSearchInput";
import UserSvg from "@/assets/icons/UserSvg";
import NavbarCartIcon from "./NavbarCartIcon";
import HeaderLogo from "./HeaderLogo";

interface DesktopHeaderProps {
  isScrolled: boolean;
}

const DesktopHeader = ({ isScrolled }: DesktopHeaderProps) => {
  return (
    <div className="z-50 container mx-auto flex justify-between items-center">
      <div className="flex">
        <HeaderLogo isScrolled={isScrolled} />
      </div>
      <div className="ml-auto w-full flex items-center flex-grow mx-4">
        <HeaderCategoriesBtn handleOpenModal={() => {}} isScrolled={false} />
        <HeaderSearchInput />
      </div>
      <div className="flex items-center space-x-6">
        <button className="bg-white text-gray-800 p-2 rounded-full">
          <UserSvg />
        </button>
        <NavbarCartIcon />
      </div>
    </div>
  );
};

export default DesktopHeader;
