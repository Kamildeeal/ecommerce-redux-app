"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hookts";
import { addProduct } from "@/lib/features/slices/ProductSlice";

interface Product {
  id: number;
  title: string;
  images: string;
  price: number;
  description: string;
}

export default function Products() {
  const [data, setData] = useState<Product[] | null>(null);
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      console.log("Fetched data:", result.products);
      setData(result.products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!data || data.length === 0 ? (
        <div className="flex justify-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {data?.map((product) => (
            <div
              key={product.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={product.images[0]}
                alt={product.title}
              />
              <div className="p-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  {product.title}
                </h5>
                <p className="text-gray-500 my-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
