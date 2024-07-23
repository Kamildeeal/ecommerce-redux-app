"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/lib/hookts";
import ProductCard from "@/components/displayProducts/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import { RootState } from "@/lib/store";

type SearchPageProps = {
  params: { query: string };
};

export default function SearchPage({ params }: SearchPageProps) {
  const query = params.query;
  console.log(query);
  const products = useAppSelector((state) => state.products.products);
  const { loading } = useAppSelector((state: RootState) => state.products);

  const searchResults = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col px-7">
      <h2 className="text-xl lg:text-3xl my-6 mx-auto font-bold">
        Search results for: {query} ({searchResults.length})
      </h2>
      <div className="xl:max-w-screen-xl mx-auto">
        <div className="grid m-2 justify-items-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 lg:px-12 gap-6 py-6 px-6">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <ClipLoader color={"black"} loading={loading} size={150} />
        </div>
      )}
    </div>
  );
}
