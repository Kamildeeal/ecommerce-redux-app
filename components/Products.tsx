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
  const [data, setData] = useState<any>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://api.escuelajs.co/api/v1/products/?limit=100"
        );
        const response = await result.json();

        // Trimowanie linków do obrazków
        const trimmedData = response.map((product: any) => {
          return {
            ...product,
            images: product.images.map((image: any) =>
              image.replace(/^\[?"|"?\]$/g, "")
            ),
          };
        });

        setData(trimmedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div className="flex justify-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data &&
        data.length > 0 &&
        data.map((product: Product) => (
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
                <span className="text-2xl font-bold text-gray-900">
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
  );
}
