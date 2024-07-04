// @/components/ProductList.tsx
"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import CartDetails from "./CartDetails";
import Image from "next/image";
import Hero from "./Hero";
import AddProductButton from "./buttons/AddProduct";
import RemoveProductButton from "./buttons/RemoveProduct";
import FullClearItemButton from "./buttons/FullClearItemButton";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { loading, products, error } = useAppSelector(
    (state: RootState) => state.products
  );

  const cartProducts = useAppSelector((state: RootState) => state.cartProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="relative">
      <Hero />
      {cartProducts.length > 0 && (
        <div className="sticky top-10 right-0 ml-auto w-max h-0 hidden lg:block">
          <CartDetails />
        </div>
      )}
      <div>
        {!products || products.length === 0 ? (
          <div className="flex justify-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-6 lg:px-48">
            {products?.map((product: any) => (
              <div
                key={product.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={product.images[0]}
                  alt="Picture of the author"
                  width={400}
                  height={400}
                  className="object-fill rounded-sm"
                />

                <div className="p-5 ">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {product.title}
                  </h5>
                  {/* <p className="text-gray-500 my-2">{product.description}</p> */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                  </div>
                  <div className="sticky bottom-2 flex flex-col justify-between m-2">
                    <AddProductButton
                      id={product.id}
                      title={product.title}
                      image={product.image}
                      description={product.description}
                      price={product.price}
                    />
                    {/* <RemoveProductButton id={product.id} /> */}
                    <FullClearItemButton id={product.id} />
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
