import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryItemProps {
  imageSrc: StaticImageData;
  altText: string;
  title: string;
  rotation?: string;
}

const CategoryItem = ({
  imageSrc,
  altText,
  title,
  rotation,
}: CategoryItemProps) => {
  return (
    <Link href={`/category/${altText}`}>
      <div className="w-full max-w-[110px] sm:max-w-[237px] group flex flex-col hover:underline hover:shadow-bottom-only p-2 sm:p-4 rounded-lg hover:cursor-pointer">
        <Image
          src={imageSrc}
          alt={altText}
          className={`object-contain mx-auto group-hover:rotate-${
            rotation || "6"
          } transition-transform duration-300 ease-in-out transform origin-center 
                    w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px]`}
          width={130}
          height={130}
        />
        <p className="font-semibold text-center font-roboto mx-auto mt-4 text-sm sm:text-base md:text-lg text-gray-900">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default CategoryItem;
