import React from "react";
import Image from "next/image";
import { Product } from "@/lib/types/types";

interface ProductImageModalProps {
  product: Product;
  mainImageIndex: number;
  setMainImageIndex: (index: number) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  handlePrevImage: () => void;
  handleNextImage: () => void;
}

const ProductImageModal = ({
  product,
  mainImageIndex,
  setMainImageIndex,
  setIsModalOpen,
  handlePrevImage,
  handleNextImage,
}: ProductImageModalProps) => (
  <div className="fixed inset-0 bg-white z-50 flex flex-col">
    <div className="flex justify-between items-center p-4 border-b shadow-xl relative">
      <h2 className="text-3xl font-semibold mx-auto">{product.title}</h2>
      <button
        className="absolute top-0 right-0 h-full w-16 text-5xl flex items-center justify-center hover:bg-gray-200"
        onClick={() => setIsModalOpen(false)}
      >
        &times;
      </button>
    </div>
    <div className="flex-grow flex items-center justify-center relative">
      {product.images.length > 1 && (
        <button
          className="absolute left-[15%] top-1/2 transform -translate-y-1/2 border-2 border-black text-black text-2xl hover:text-3xl hover:bg-gray-200 transition-all rounded-full p-4 shadow z-[10000] cursor-pointer"
          onClick={handlePrevImage}
        >
          &#10094;
        </button>
      )}
      <Image
        src={product.images[mainImageIndex]}
        alt={`${product.title} full screen`}
        fill
        className="object-contain"
      />
      {product.images.length > 1 && (
        <button
          className="absolute right-[15%] top-1/2 transform -translate-y-1/2 border-2 border-black text-black text-2xl hover:text-3xl hover:bg-gray-200 transition-all rounded-full p-4 shadow z-[10000] cursor-pointer"
          onClick={handleNextImage}
        >
          &#10095;
        </button>
      )}
    </div>
    <div className="overflow-x-auto whitespace-nowrap p-4 border-t shadow-xl mx-auto">
      {product.images.map((image, index) => (
        <button
          key={index}
          className={`inline-block w-20 h-20 mx-4 relative ${
            index === mainImageIndex
              ? "border-2 border-red-500"
              : "border border-gray-300"
          }`}
          onClick={() => setMainImageIndex(index)}
        >
          <Image
            src={image}
            alt={`${product.title} thumbnail ${index + 1}`}
            fill
            className="object-cover"
            sizes="80px"
          />
        </button>
      ))}
    </div>
  </div>
);

export default ProductImageModal;
