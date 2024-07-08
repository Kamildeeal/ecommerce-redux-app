import React from "react";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className="w-[160px] h-[160px] lg:min-w-[220px] lg:h-[220px]">
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain h-full w-full"
        />
      </div>
    </div>
  );
};

export default ProductImage;
