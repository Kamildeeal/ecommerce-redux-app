"use client";
import { closeModal } from "@/lib/features/modal/ModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import React, { useState } from "react";
import { RootState } from "@/lib/store";
import Image from "next/image";
import AddProductButton from "../buttons/AddProduct";
import ReferenceComments from "./ReferenceComments";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "@/app/styles/animations/animateVariants";
import Curve from "./Curve";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
import CustomLink from "./CustomNavLink";
import MoreDetailsBtn from "../buttons/MoreDetailsBtn";

const InfoModal = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state: RootState) => state.modal.modal);
  const currentProduct = useAppSelector(
    (state: RootState) => state.productInfo.currentProduct
  );

  const [isClosing, setIsClosing] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    setLoading(true);
    router.push(
      `/product/${currentProduct?.title.replace(/\s+/g, "-").toLowerCase()}`
    );
  };
  if (!modal || !currentProduct) {
    return null;
  }

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      dispatch(closeModal());
      setIsClosing(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {!isClosing && (
        <div
          onClick={handleCloseModal}
          className="z-[9] fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-300 bg-opacity-35"
        >
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <div className="z-10 fixed top-0 right-0 w-[30vw] h-[100vh] bg-gray-300 bg-opacity-75 border-l-2 border-gray-800 overflow-y-scroll">
              <div className="py-28 px-6 flex flex-col">
                <button
                  onClick={handleCloseModal}
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
                        sizes="(min-width: 1024px) 260px, 200px"
                        className="object-contain h-full w-full"
                      />
                    </div>
                  </div>
                  <div onClick={() => setLoading(true)} className="w-full">
                    <MoreDetailsBtn
                      buttonText="More details"
                      currentProduct={currentProduct}
                    />
                  </div>
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
                    <div className="mt-4 mx-auto w-full">
                      <AddProductButton
                        id={currentProduct.id}
                        title={currentProduct.title}
                        image={currentProduct.images}
                        description={currentProduct.description}
                        price={currentProduct.price}
                        buttonText="Add to cart"
                      />
                    </div>
                  </div>
                  <p className="text-xl text-center my-6 font-serif semibolld">
                    Product Reviews
                  </p>
                  <ReferenceComments currentProduct={currentProduct} />
                </div>
              </div>
              <Curve />
            </div>
          </motion.div>
          {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-75 z-50">
              <ClipLoader color={"red"} loading={loading} size={150} />
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
