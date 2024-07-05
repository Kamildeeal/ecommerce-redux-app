"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import Image from "next/image";
import Hero from "./Hero";
import AddProductButton from "./buttons/AddProduct";
import FullClearItemButton from "./buttons/FullClearItemButton";
import { ToastSuccess } from "@/utils/ToastSuccess";
import { ToastRemove } from "@/utils/ToastRemove";
import {
  hideToastRemove,
  hideToastSuccess,
  showToastRemove,
  showToastSuccess,
} from "@/lib/features/toats/ToastsSlice";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { loading, products, error } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleAddItemToast = () => {
    dispatch(showToastSuccess());
    setTimeout(() => {
      dispatch(hideToastSuccess());
    }, 2000);
  };

  const handleRemoveItemToast = () => {
    dispatch(showToastRemove());
    setTimeout(() => {
      dispatch(hideToastRemove());
    }, 2000);
  };

  return (
    <div className="relative">
      <div className="fixed top-[6rem] left-1/2 transform -translate-x-1/2 z-[100]">
        <ToastSuccess />
      </div>
      <div className="fixed top-[9.5rem] left-1/2 transform -translate-x-1/2 z-[100]">
        <ToastRemove />
      </div>
      <Hero />
      <div>
        {!products || products.length === 0 ? (
          <div className="flex justify-center text-center w-full items-center mx-auto">
            Loading...
          </div>
        ) : (
          <div className="grid justify-items-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 lg:px-12 gap-6 py-6 px-6 ">
            {products?.map((product: any) => (
              <div
                key={product.id}
                className="w-[240px] lg:w-[280px] bg-white border border-red-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center"
              >
                <div className="w-[160px] h-[160px] lg:min-w-[220px] lg:h-[220px]">
                  <div className="relative h-full w-full ">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-contain h-full w-full"
                    />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-end">
                  <h5 className=" text-base lg:text-xl font-semibold tracking-tight text-gray-900">
                    {product.title}
                  </h5>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xl lg:text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                  </div>
                  <div className="flex flex-col mt-4 items-center gap-2">
                    <div onClick={handleAddItemToast}>
                      <AddProductButton
                        id={product.id}
                        title={product.title}
                        image={product.images}
                        description={product.description}
                        price={product.price}
                      />
                    </div>
                    <div onClick={handleRemoveItemToast}>
                      <FullClearItemButton id={product.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
