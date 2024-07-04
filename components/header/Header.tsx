import React from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
import NavbarCartIcon from "./NavbarCartIcon";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-40 bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="hover:text-gray-300">
          <h1 className="text-3xl font-bold">KamShop</h1>
        </Link>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4 lg:space-x-8">
            <li>
              <NavbarLink href={"/"}>Home</NavbarLink>
            </li>
            <li>
              <NavbarLink href={"/"}>Products</NavbarLink>
            </li>
            <li>
              <NavbarLink href={"/"}>Contact</NavbarLink>
            </li>
            <li>
              <NavbarLink href={"/"}>About</NavbarLink>
            </li>
          </ul>
          <NavbarCartIcon />
        </nav>
      </div>
    </header>
  );
}
