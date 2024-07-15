import React from "react";

const RatingComponent = ({ rating }: { rating: number }) => {
  const stars = [1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      style={{ color: star <= rating ? "#ffd700" : "#ddd" }}
      className="text-2xl lg:text-3xl"
    >
      ★
    </span>
  ));

  return <div>{stars}</div>;
};

export default RatingComponent;
