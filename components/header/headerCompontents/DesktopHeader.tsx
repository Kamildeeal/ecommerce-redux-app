// components/DesktopHeader.tsx
import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCategoriesBtn from "./HeaderCategoriesBtn";
import HeaderSearchInput from "./HeaderSearchInput";
import UserSvg from "@/assets/icons/UserSvg";
import NavbarCartIcon from "./NavbarCartIcon";

interface DesktopHeaderProps {
  isScrolled: boolean;
  handleOpenModal: () => void;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  isScrolled,
  handleOpenModal,
}) => {
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
