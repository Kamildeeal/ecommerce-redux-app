import React from "react";
import { useAppDispatch } from "@/lib/hookts";
import {
  showToastSuccess,
  hideToastSuccess,
  showToastRemove,
  hideToastRemove,
} from "@/lib/features/toast/ToastsSlice";
import AddProductButton from "../buttons/AddProduct";
import FullClearItemButton from "../buttons/FullClearItemButton";
import ProductImage from "./ProductImage";
import { Product } from "@/lib/types/types";
import { setCurrentProduct } from "@/lib/features/products/ShowProductSlice";
import { openModal } from "@/lib/features/modal/ModalSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddItemToast = () => {
    dispatch(showToastSuccess());
    setTimeout(() => {
      dispatch(hideToastSuccess());
    }, 2000);
  };

  const handleRemoveItemToast = () => {
    dispatch(showToastRemove());
    setTimeout(() => {
      dispatch(hideToastRemove());
    }, 2000);
  };

  const handleDisplayInModal = () => {
    dispatch(setCurrentProduct(product));
    dispatch(openModal());
  };

  return (
    <div className="w-[240px] lg:w-[280px] bg-white border border-red-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center">
      <div onClick={() => handleDisplayInModal()} className="cursor-pointer">
        <ProductImage src={product.images[0]} alt={product.title} />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-end">
        <h5 className="text-base lg:text-xl font-semibold tracking-tight text-gray-900 mb-auto">
          {product.title}
        </h5>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl lg:text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>
        <div className="flex flex-col mt-4 items-center gap-2">
          <div onClick={handleAddItemToast}>
            <AddProductButton
              id={product.id}
              title={product.title}
              image={product.images}
              description={product.description}
              price={product.price}
            />
          </div>
          <div onClick={handleRemoveItemToast}>
            <FullClearItemButton id={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
