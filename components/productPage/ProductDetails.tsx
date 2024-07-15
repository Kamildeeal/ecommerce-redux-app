import React from "react";
import { Product } from "@/lib/types/types";
import Link from "next/link";
import { BsFillHouseDownFill } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import RatingComponent from "@/utils/ReactStars";
import ProductImage from "@/components/productPage/ProductImage";

const ProductDetails = ({ product }: { product: Product }) => (
  <div className="flex-1 px-4 md:mr-8">
    <div className="flex gap-4 items-center text-gray-500 mb-6">
      <Link href={"/"}>
        <BsFillHouseDownFill className="text-2xl" />
      </Link>
      <TbMathGreater className="text-lg" />
      <Link href={`/category/${product.category}`}>
        <span className="underline hover:no-underline cursor-pointer text-lg font-semibold">
          {product.category}
        </span>
      </Link>
    </div>
    <div className="text-2xl my-2 bold">{product.title}</div>
    {product.brand && (
      <div className="text-xl font-extrabold my-1">{product.brand}</div>
    )}
    <div className="my-2 text-lg semibold pr-4">{product.description}</div>
    <div className="text-base my-2 semidbold flex gap-12">
      <p className="font-sans text-base text-gray-600">
        Rating: {product.rating}
      </p>
      <RatingComponent rating={Math.round(product.rating * 2) / 2} />
    </div>
    <ProductImage product={product} />
  </div>
);

export default ProductDetails;
