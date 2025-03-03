import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types/types";
import ProductImageModal from "./ProductModalImage";

const ProductImage = ({ product }: { product: Product }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevImage = () => {
    setMainImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setMainImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="w-full mx-auto flex justify-center font-semibold mt-4">
        Click on the photo to enlarge.
      </div>
      <div className="sticky top-40 mx-auto w-[200px] lg:w-[260px] mt-20">
        {product.images && product.images.length > 0 ? (
          <div
            className="w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] mb-4 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="relative h-full w-full">
              <Image
                src={product.images[mainImageIndex]}
                alt={`${product.title} main image`}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 260px, 200px"
              />
            </div>
          </div>
        ) : (
          <div className="sticky top-40 w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] flex items-center justify-center bg-gray-200 mb-4">
            No image available
          </div>
        )}
        {product.images && product.images.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`w-[80px] h-[80px] relative ${
                  index === mainImageIndex
                    ? "border-2 border-blue-500"
                    : "border border-gray-300"
                }`}
                onClick={() => setMainImageIndex(index)}
              >
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <ProductImageModal
          product={product}
          mainImageIndex={mainImageIndex}
          setMainImageIndex={setMainImageIndex}
          setIsModalOpen={setIsModalOpen}
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
        />
      )}
    </>
  );
};

export default ProductImage;
