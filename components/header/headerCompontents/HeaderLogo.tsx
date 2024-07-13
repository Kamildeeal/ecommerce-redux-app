import Link from "next/link";
import React from "react";

interface HeaderLogoProps {
  isScrolled: boolean;
}

export default function HeaderLogo(isScrolled: HeaderLogoProps) {
  return (
    <Link href="/" className="hover:text-gray-300">
      <h1
        className={`mr-8 font-climate-crisis font-bold transition-transform duration-400 text-5xl ${
          isScrolled ? "scale-75" : "scale-100"
        }`}
      >
        KamShop
      </h1>
    </Link>
  );
}
