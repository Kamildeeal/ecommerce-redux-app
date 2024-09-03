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
import OrderIcon from "../../../assets/svgs/order-history-icon.svg";
import HistoryIcon from "@/assets/icons/OrderHistoryIcon";

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
                  <UserButton>
                    <UserButton.MenuItems>
                      <UserButton.Action label="signOut" />
                      <UserButton.Link
                        label="Order History"
                        labelIcon={<HistoryIcon />}
                        href="/order-history"
                      />
                      <UserButton.Action label="manageAccount" />
                    </UserButton.MenuItems>
                  </UserButton>
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

// const DotIcon = () => {
//   return (
//     <svg
//       id="Layer_1"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 117.78 122.88"
//     >
//       <title>order-history</title>
//       <path d="M70.71,116.29H7.46a7.48,7.48,0,0,1-5.27-2.19L2,113.87a7.43,7.43,0,0,1-2-5V7.46A7.45,7.45,0,0,1,2.19,2.19L2.42,2a7.42,7.42,0,0,1,5-2H91.88a7.48,7.48,0,0,1,7.46,7.46V66.63a3.21,3.21,0,0,1-.06.63,28.75,28.75,0,1,1-28.57,49ZM85.18,82.12h2.89a2,2,0,0,1,1.43.59,2.06,2.06,0,0,1,.6,1.44V94.77h9.59a2,2,0,0,1,2,2v3a2.12,2.12,0,0,1-.6,1.44l-.08.07a2,2,0,0,1-1.35.52H84a1,1,0,0,1-1-1V84a2,2,0,0,1,.59-1.29,2,2,0,0,1,1.43-.6Zm7.75-16.47V7.46a1.1,1.1,0,0,0-1.05-1H7.46a1.08,1.08,0,0,0-.66.23l-.08.08a1.06,1.06,0,0,0-.31.74V108.84a1,1,0,0,0,.23.65l.09.08a1,1,0,0,0,.73.32H65A28.75,28.75,0,0,1,89,65.38a28,28,0,0,1,3.9.27Zm12.36,12.22A23,23,0,1,0,112,94.13a22.92,22.92,0,0,0-6.73-16.26Zm-84.5-3.78h9A1.18,1.18,0,0,1,31,75.27v9a1.18,1.18,0,0,1-1.18,1.18h-9a1.18,1.18,0,0,1-1.18-1.18v-9a1.18,1.18,0,0,1,1.18-1.18Zm22,9.28a3.65,3.65,0,0,1,0-7.18h9.58a3.65,3.65,0,0,1,0,7.18Zm-22-61.22h9A1.18,1.18,0,0,1,31,23.33v9a1.18,1.18,0,0,1-1.18,1.18h-9a1.18,1.18,0,0,1-1.18-1.18v-9a1.18,1.18,0,0,1,1.18-1.18Zm22,9.27a3.33,3.33,0,0,1-3-3.58,3.34,3.34,0,0,1,3-3.59H78.25a3.34,3.34,0,0,1,3,3.59,3.33,3.33,0,0,1-3,3.58ZM18.34,54.1a2,2,0,0,1,.38-2.82,2.23,2.23,0,0,1,3-.09l2.1,2.17L29.07,48a1.93,1.93,0,0,1,2.82.3,2.23,2.23,0,0,1,.18,3l-7,7.14a1.94,1.94,0,0,1-2.82-.3l-.16-.19a1.94,1.94,0,0,1-.31-.26L18.34,54.1Zm24.4,2.69a3.34,3.34,0,0,1-3-3.59,3.34,3.34,0,0,1,3-3.59H78.25a3.34,3.34,0,0,1,3,3.59,3.34,3.34,0,0,1-3,3.59Z" />
//     </svg>
//   );
// };

export default DesktopHeader;
