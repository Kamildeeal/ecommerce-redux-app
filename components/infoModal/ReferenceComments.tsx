import React from "react";
import { Product } from "@/lib/types/types";
import { FaCheck } from "react-icons/fa";

interface ReferenceComments {
  currentProduct: Product;
}

const ReferenceComments = ({ currentProduct }: ReferenceComments) => {
  return (
    <div className="h-auto w-full  bg-white rounded-xl py-4 px-6">
      {currentProduct.reviews.map((review) => {
        return (
          <div className="mb-12" key={review.reviewerName}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-sm max-w-[150px] md:max-w-max w-full">
                {review.date}
              </span>
              <span className="text-gray-700 font-medium text-end ml-2">
                by {review.reviewerName}
              </span>
            </div>
            <div className="flex items-center text-green-600 mb-2">
              <FaCheck className="mr-1" />
              <span className="text-sm">Verified purchase</span>
            </div>
            <p className="text-gray-800 ">{review.comment}</p>
            <span className="text-gray-600 text-sm">Rate: {review.rating}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ReferenceComments;
