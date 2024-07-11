import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingComponent = ({ rating }: { rating: number }) => {
  return (
    <ReactStars
      count={5}
      value={rating}
      size={24}
      isHalf={true}
      edit={false}
      activeColor="#ffd700"
    />
  );
};

export default RatingComponent;
