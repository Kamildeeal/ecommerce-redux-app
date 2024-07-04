// @/components/ProductList.tsx
"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import {
  addProduct,
  decrementProductQuantity,
  removeProduct,
} from "@/lib/features/products/CartProductsSlice";
import CartDetails from "./CartDetails";
import Image from "next/image";
import Hero from "./Hero";

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
        <div className="hidden lg:block">
          <div className="sticky top-10 right-0 ml-auto w-max h-0">
            <CartDetails />
          </div>
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
                  className="w-full h-48 object-cover"
                  src={product.images[0]}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                <div className="p-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {product.title}
                  </h5>
                  {/* <p className="text-gray-500 my-2">{product.description}</p> */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                  </div>
                  <button
                    className="px-3 py-2 bg-blue-500 text-white text-xs font-bold uppercase rounded duration-500 hover:bg-blue-800"
                    onClick={() => {
                      dispatch(
                        addProduct({
                          id: product.id,
                          title: product.title,
                          description: product.description,
                          price: product.price,
                        })
                      );
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="px-3 py-2 bg-yellow-500 text-white text-xs font-bold uppercase rounded duration-500 hover:bg-yellow-800"
                    onClick={() => {
                      dispatch(decrementProductQuantity(product.id));
                    }}
                  >
                    Decrement Quantity
                  </button>
                  <button
                    className="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded duration-500 hover:bg-red-800"
                    onClick={() => {
                      dispatch(removeProduct(product.id));
                    }}
                  >
                    Remove from Cart
                  </button>
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
