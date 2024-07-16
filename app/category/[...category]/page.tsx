"use client";
import Link from "next/link";
import { BsFillHouseDownFill } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import { AnimatePresence } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";
import ProductCard from "@/components/displayProducts/ProductCard";
import InfoModal from "@/components/infoModal/InfoModal";
import useCategoryProducts from "@/utils/hooks/useCategoryProducts";

type CategoryPageProps = {
  params: { category: string[] };
};

const CategoryPage = ({ params }: CategoryPageProps) => {
  const category = params.category[0];
  const { filteredProducts, loading } = useCategoryProducts(category);

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
