"use client";
import React from "react";
import ProductHeader from "@/components/productPage/ProductHeader";
import ProductDetails from "@/components/productPage/ProductDetails";
import ProductPriceAvailability from "@/components/productPage/ProductPriceAvailability";
import ReferenceComments from "@/components/infoModal/ReferenceComments";
import AddToCartButton from "@/components/buttons/AddProduct";
import useHandleToats from "@/utils/useHandleToasts";
import LoadingSpinner from "@/utils/LoadingSpinner";
import useProductData from "@/utils/useProductData";

export default function ProductPage() {
  const { product, loading } = useProductData();
  const { handleAddItemToast } = useHandleToats();

  if (!product || loading) {
    return <LoadingSpinner loading={loading} />;
  }

  return (
    <div>
      <ProductHeader />
      <div className="w-full max-w-[1480px] mx-auto flex flex-col md:flex-row px-6 sm:px-12 md:px-20 my-10 min-w-[360px]">
        <ProductDetails product={product} />
        <div className="flex-1 px-4  md:ml-8">
          <ProductPriceAvailability product={product} />
          <div onClick={handleAddItemToast}>
            <AddToCartButton
              id={product.id}
              title={product.title}
              image={product.images}
              description={product.description}
              price={product.price}
              buttonText="Add to Cart"
            />
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
