"use client";
import { useEffect } from "react";
import { useRouter, notFound } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import {
  setCategoryFilter,
  fetchProducts,
  sortProductsByCategory,
} from "@/lib/features/products/FetchDataSlice";
import Categories from "@/lib/enums/ProductCategories";
import { RootState } from "@/lib/store";
import ProductCard from "@/components/displayProducts/ProductCard";
import InfoModal from "@/components/infoModal/InfoModal";
import Link from "next/link";
import { BsFillHouseDownFill } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import { AnimatePresence } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

const CategoryPage = ({ params }: { params: { category: string[] } }) => {
  const dispatch = useAppDispatch();
  const { filteredProducts, categoryFilter, loading } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    const category = params.category[0];
    if (
      category &&
      Object.values(Categories).includes(category as Categories)
    ) {
      if (filteredProducts.length === 0) {
        dispatch(fetchProducts()).then((action) => {
          if (action.type === "products/fetchProducts/fulfilled") {
            dispatch(setCategoryFilter(category));
            dispatch(sortProductsByCategory());
          }
        });
      } else {
        dispatch(setCategoryFilter(category));
      }
    } else {
      notFound();
    }
  }, [params.category, dispatch, filteredProducts.length]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader color={"black"} loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1480px] mx-auto flex flex-col px-6 sm:px-16 md:px-18 my-10">
      <div className="flex gap-4 items-center text-gray-500 mb-6 pl-5  md:pl-10">
        <Link href={"/"}>
          <BsFillHouseDownFill className="text-2xl" />{" "}
        </Link>
        <TbMathGreater className="text-base" />{" "}
        <Link href={`/category/${params.category}`}>
          <span className="underline hover:no-underline cursor-pointer text-lg font-semibold">
            {params.category}
          </span>
        </Link>
      </div>
      <div className="grid m-2 justify-items-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 lg:px-12 gap-6 py-6 ">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {loading && <p>Loading more products...</p>}
      </div>
      <div>
        <AnimatePresence>
          <InfoModal />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CategoryPage;
