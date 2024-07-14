import React from "react";
import { useAppDispatch } from "@/lib/hookts";
import AddProductButton from "../buttons/AddProduct";
import ProductImage from "./ProductImage";
import { Product } from "@/lib/types/types";
import { setCurrentProduct } from "@/lib/features/products/ShowProductSlice";
import { openModal } from "@/lib/features/modal/ModalSlice";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import RatingComponent from "@/utils/ReactStars";
import useHandleToats from "@/utils/useHandleToasts";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const { handleAddItemToast } = useHandleToats();

  const handleDisplayInModal = () => {
    dispatch(setCurrentProduct(product));
    dispatch(openModal());
  };

  const LargeTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: "1rem",
    },
  }));

  return (
    <div className="m-1 w-[240px] lg:w-[280px] bg-white border border-red-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center hover:bg-gray-100  hover:border-gray-400">
      <LargeTooltip title="Click to see preview" placement="right-start" arrow>
        <div onClick={() => handleDisplayInModal()} className="cursor-pointer">
          <ProductImage src={product.images[0]} alt={product.title} />
        </div>
      </LargeTooltip>
      <div className="p-5 flex-1 flex flex-col justify-end max-w-[280px] w-full">
        <h5 className="text-base lg:text-xl font-semibold tracking-tight text-gray-900 mb-auto mx-auto text-center">
          {product.title}
        </h5>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl lg:text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>
        <Tooltip
          title={`Rating: ${product.rating.toFixed(1)}`}
          placement="left-start"
          arrow
        >
          <div>
            <RatingComponent rating={Math.round(product.rating * 2) / 2} />
          </div>
        </Tooltip>
        <div className="flex flex-col mt-4 items-center gap-2 w-full">
          <div onClick={handleAddItemToast} className="w-full">
            <AddProductButton
              id={product.id}
              title={product.title}
              image={product.images}
              description={product.description}
              price={product.price}
              buttonText="Add to Cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
