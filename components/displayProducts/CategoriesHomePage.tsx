import Image from "next/image";
import React from "react";
import beautySVG from "@/assets/svgs/reshot-icon-essential-oil-GT3U79DQMJ.svg";
import furnitureSVG from "@/assets/svgs/reshot-icon-interior-furniture-LQSW8ZAG2C.svg";
import groceriesSVG from "@/assets/svgs/reshot-icon-groceries-Q7H2MJDC8T.svg";
import fragrancesSVG from "@/assets/svgs/reshot-icon-perfume-H4QECJPDT2.svg";
import homeDecoSVG from "@/assets/svgs/reshot-icon-lamp-CRNB9GTAP5.svg";
import kitchenAccesories from "@/assets/svgs/reshot-icon-kitchen-equipment-Z8FGVPDC6E.svg";
import laptopsSVG from "@/assets/svgs/reshot-icon-laptop-RN5X38MPKD.svg";
import mensShirtsSVG from "@/assets/svgs/reshot-icon-shirt-RBZ2C8M6XG.svg";
import menShoesSVG from "@/assets/svgs/reshot-icon-shoes-JAFUGBDW3K.svg";
import menWatchesSVG from "@/assets/svgs/reshot-icon-watch-U6FNWRV9HP.svg";
import mobileAccesories from "@/assets/svgs/reshot-icon-ipod-YEU2XFGDL9.svg";
import CategoryItem from "./CategoryItem";

const CategoriesHomePage = () => {
  const categories = [
    { imageSrc: beautySVG, title: "BEAUTY", rotation: "6" },
    { imageSrc: furnitureSVG, title: "FURNITURE", rotation: "-6" },
    { imageSrc: groceriesSVG, title: "GROCERIES", rotation: "6" },
    { imageSrc: fragrancesSVG, title: "FRAGRANCES", rotation: "-6" },
    { imageSrc: homeDecoSVG, title: "HOME-DECORATION", rotation: "6" },
    {
      imageSrc: kitchenAccesories,
      title: "KITCHEN-ACCESSORIES",

      rotation: "-6",
    },
    { imageSrc: laptopsSVG, title: "LAPTOPS", rotation: "6" },
    { imageSrc: mensShirtsSVG, title: "MENS-SHIRTS", rotation: "-6" },
    { imageSrc: menShoesSVG, title: "MENS-SHOES", rotation: "6" },
    { imageSrc: menWatchesSVG, title: "MENS-WATCHES", rotation: "-6" },
    { imageSrc: mobileAccesories, title: "MOBILE-ACCESSORIES", rotation: "6" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-6 max-w-[1315px] w-full">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          imageSrc={category.imageSrc}
          title={category.title}
          rotation={category.rotation}
          altText={category.title.toLowerCase()}
        />
      ))}
    </div>
  );
};

export default CategoriesHomePage;
