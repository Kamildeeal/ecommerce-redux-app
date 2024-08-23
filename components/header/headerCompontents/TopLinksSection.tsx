import React from "react";
import NavbarLink from "./NavbarLink";
import CountdownTimer from "./HeaderCountdown";

const TopLinksSection = () => {
  return (
    <div>
      <CountdownTimer />
      <div className="mx-auto hidden lg:flex bg-gray-800 text-white w-full z-50">
        <ul className="flex space-x-4 lg:space-x-8 mx-auto mb-1">
          <li>
            <NavbarLink href={"/"}>KamShop App</NavbarLink>
          </li>
          <li>
            <NavbarLink href={"/"}>Promotions</NavbarLink>
          </li>
          <li>
            <NavbarLink href={"/"}>Shops</NavbarLink>
          </li>
          <li>
            <NavbarLink href={"/"}>KamShopBlog</NavbarLink>
          </li>
          <li>
            <NavbarLink href={"/"}>Guarantee</NavbarLink>
          </li>
          <li>
            <NavbarLink href={"/"}>Contact</NavbarLink>
          </li>
          <li className="text-md">
            <NavbarLink href={"/"}>Call us: +48 123 123 123</NavbarLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopLinksSection;
