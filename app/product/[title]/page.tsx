"use client";
import React, { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import { Product } from "@/lib/types/types";
import LoadingSpinner from "@/utils/LoadingSpinner";
import ProductHeader from "@/components/productPage/ProductHeader";
import ProductDetails from "@/components/productPage/ProductDetails";
import ProductPriceAvailability from "@/components/productPage/ProductPriceAvailability";
import ReferenceComments from "@/components/infoModal/ReferenceComments";
import AddToCartButton from "@/components/buttons/AddProduct";
import useHandleToats from "@/utils/useHandleToasts";

export default function ProductPage({ params }: { params: { title: string } }) {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { handleAddItemToast } = useHandleToats();

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
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [productId, dispatch, products]);

  if (!product || loading) {
    return <LoadingSpinner loading={loading} />;
  }

  return (
    <div>
      <ProductHeader />
      <div className="w-full max-w-[1480px] mx-auto flex px-20 my-10">
        <ProductDetails product={product} />
        <div className="flex-1 px-4 ml-8">
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
