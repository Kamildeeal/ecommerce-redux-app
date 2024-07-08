"use client";
import { useEffect } from "react";
import { useRouter, notFound } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import {
  setCategoryFilter,
  fetchProducts,
} from "@/lib/features/products/FetchDataSlice";
import Categories from "@/lib/enums/ProductCategories";
import { RootState } from "@/lib/store";
import ProductCard from "@/components/homePage/ProductCard";

const CategoryPage = ({ params }: { params: { category: string[] } }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { filteredProducts, categoryFilter, loading } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const category = params.category[0];
    if (
      category &&
      Object.values(Categories).includes(category as Categories)
    ) {
      dispatch(setCategoryFilter(category));
    } else {
      notFound();
    }
  }, [params.category, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center">
        You are currently looking at &#62; {categoryFilter}
      </h2>
      <div className="grid justify-items-center sm:justify-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 lg:px-12 gap-6 py-6 px-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {loading && <p>Loading more products...</p>}
      </div>
    </div>
  );
};

export default CategoryPage;
