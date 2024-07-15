import Link from "next/link";
import React from "react";

interface HeaderLogoProps {
  isScrolled: boolean;
}

export default function HeaderLogo({ isScrolled }: HeaderLogoProps) {
  return (
    <Link href="/" className="hover:text-gray-300">
      <h1
        className={`sm:mr-8 font-climate-crisis font-bold transition-transform duration-400 md:text-4xl sm:text-3xl text-2xl  mb-2  
          ${isScrolled ? "scale-75" : "scale-110"}`}
      >
        KamShop
      </h1>
    </Link>
  );
}
