"use client";
import { closeModal } from "@/lib/features/modal/ModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import React from "react";
import { RootState } from "@/lib/store";
import Image from "next/image";
import AddProductButton from "../buttons/AddProduct";
import ReferenceComments from "./ReferenceComments";
import Link from "next/link";

const InfoModal = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state: RootState) => state.modal.modal);
  const currentProduct = useAppSelector(
    (state: RootState) => state.productInfo.currentProduct
  );

  if (!modal || !currentProduct) {
    return null;
  }

  return (
    //desktop tablet Modal - big devices
    <div
      onClick={() => dispatch(closeModal())}
      className="z-[9] fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-300 bg-opacity-35"
    >
      <div className="z-10 fixed top-0 right-0 w-[30vw] h-[100vh] bg-gray-300 bg-opacity-75 border-l-2 border-gray-800 overflow-y-scroll">
        <div className="py-28 px-6 flex flex-col">
          <button
            onClick={() => dispatch(closeModal())}
            className="text-red-500 text-3xl text-end"
          >
            ✖️
          </button>
          <div>
            <div className="mx-auto w-[200px] h-[200px] lg:min-w-[260px] lg:h-[260px]">
              <div className="relative h-full w-full">
                <Image
                  src={currentProduct.images[0]}
                  alt={currentProduct.title}
                  fill
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
            <Link
              href={{
                pathname: `/product/${currentProduct.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`,
                query: { productId: `${currentProduct.id}` },
              }}
            >
              <div className="text-center mx-auto">MORE DETIALS</div>
            </Link>
            <div className="p-5 flex-1 flex flex-col justify-end">
              <h5 className="text-base lg:text-xl font-semibold tracking-tight text-gray-900 mb-auto">
                {currentProduct.title}
              </h5>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl lg:text-xl text-gray-900">
                  ${currentProduct.price}
                </span>
              </div>
              <div className="mt-8 font-semibold text-2xl">
                {currentProduct.description}
              </div>
              <div className="mt-4 mx-auto">
                <AddProductButton
                  id={currentProduct.id}
                  title={""}
                  image={[]}
                  description={""}
                  price={0}
                />
              </div>
            </div>
            <p className="text-xl text-center my-6 font-serif semibolld">
              Product Reviews
            </p>
            <ReferenceComments currentProduct={currentProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
