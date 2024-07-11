"use client";
import React, { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import { Product } from "@/lib/types/types";
import ReferenceComments from "@/components/infoModal/ReferenceComments";
import AddProductButton from "@/components/buttons/AddProduct";
import Image from "next/image";
import { FaDotCircle } from "react-icons/fa";
import { BsFillHouseDownFill } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import Link from "next/link";
import RatingComponent from "@/utils/ReactStars";

export default function ProductPage({ params }: { params: { title: string } }) {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (products.length === 0) {
        await dispatch(fetchProducts());
      }

      const foundProduct = products.find(
        (p) => p.id === parseInt(productId!, 10)
      );

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        notFound();
      }
    };

    fetchData();
  }, [productId, dispatch, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="text-center text-2xl font-bold bg-red-200 flex items-center justify-center font-climate-crisis">
        BIG SALES!
      </div>
      <div className="w-full max-w-[1480px] mx-auto flex px-20 my-10">
        <div className="flex-1 px-4">
          <div className="flex gap-4 items-center text-gray-500 mb-6">
            <Link href={"/"}>
              <BsFillHouseDownFill className="text-2xl" />{" "}
            </Link>
            <TbMathGreater className="text-2xl" />{" "}
            <Link href={`/category/${product.category}`}>
              <span className="underline hover:no-underline cursor-pointer text-lg">
                {product.category}
              </span>
            </Link>
          </div>
          <div className=" text-2xl my-2 bold">{product.title}</div>
          {product.brand && (
            <div className="text-xl font-extrabold my-1">{product.brand}</div>
          )}
          <div className="my-2 text-lg semibold pr-4">
            {product.description}
          </div>
          <div className="text-base my-2 semidbold flex gap-12">
            <p className="font-sans text-base text-gray-600">
              Raiting: {product.rating}
            </p>{" "}
            <RatingComponent rating={Math.round(product.rating * 2) / 2} />
          </div>
          <div className="mx-auto sticky top-40  w-[200px] h-[200px] lg:min-w-[260px] lg:h-[260px]">
            <div className="relative h-full w-full">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 px-4">
          <div className="text-right">
            Cheapest price in 30 days:{" "}
            <span className="line-through">
              {(product.price * 1.1).toFixed(2)} $
            </span>
          </div>
          <div className="text-right text-5xl font-extrabold text-gray-900 mb-12">
            {product.price} $
          </div>
          <div className="px-2 py-4 bg-gray-200 rounded-lg my-12">
            <p className="text-xl font-semibold">
              In 0% installments from {(product.price / 10).toFixed(2)} $ per
              month
            </p>
            <p>Installments count: 10</p>
          </div>
          <div
            className={`flex items-center font-bold ${
              product.availabilityStatus === "In Stock"
                ? "text-green-500"
                : "text-red-500"
            } `}
          >
            <FaDotCircle className="mr-2 " /> Availability: {""}
            {product.availabilityStatus}
          </div>
          {product.shippingInformation && (
            <div className="flex items-center font-medium">
              <FaDotCircle className="mr-2 " /> {product.shippingInformation}
            </div>
          )}
          <div className="flex items-center font-medium">
            <FaDotCircle className="mr-2" /> {product.warrantyInformation}
          </div>
          <div className="w-full h-[2px] bg-slate-300 my-16"></div>
          <div>
            <AddProductButton
              id={product.id}
              title={""}
              image={[]}
              description={""}
              price={0}
            />{" "}
          </div>
          <p className="text-xl text-center my-6 font-serif semibolld">
            Product Reviews
          </p>
          <ReferenceComments currentProduct={product} />
        </div>
      </div>
    </div>
  );
}

// <div className="w-full h-14 bg-red-300">
//   <div className="px-14">
//     <div>
//       <h5 className="text-base lg:text-xl font-semibold tracking-tight text-gray-900 mb-auto">
//         {product.title}
//       </h5>
//       <div className="mx-auto w-[200px] h-[200px] lg:min-w-[260px] lg:h-[260px]">
//         <div className="relative h-full w-full">
//           <Image
//             src={product.images[0]}
//             alt={product.title}
//             fill
//             className="object-contain h-full w-full"
//           />
//         </div>
//       </div>
//     </div>

//     <div className="p-5 flex-1 flex flex-col justify-end">
//       <div className="flex items-center justify-between mt-2">
//         <span className="text-xl lg:text-xl text-gray-900">
//           ${product.price}
//         </span>
//       </div>
//       <div className="mt-8 font-semibold text-2xl">
//         {product.description}
//       </div>
//       <div className="mt-4 mx-auto">
//         <AddProductButton
//           id={product.id}
//           title={""}
//           image={[]}
//           description={""}
//           price={0}
//         />
//       </div>
//     </div>
//     <p>Rate: {product.rating}</p>

//     <p>Rate: {product.availabilityStatus}</p>
//     <p>{product.warrantyInformation}</p>
//     <p>{product.availabilityStatus}</p>
//     <p className="text-xl text-center my-6 font-serif semibolld">
//       Product Reviews
//     </p>
//     <ReferenceComments currentProduct={product} />
//   </div>
// </div>
