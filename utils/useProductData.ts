import { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import { Product } from "@/lib/types/types";

const useProductData = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  return { product, loading };
};

export default useProductData;
