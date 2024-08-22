import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const RecommendedProducts = () => {
  const { filteredProducts, loading } = useAppSelector(
    (state: RootState) => state.products
  );
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="my-20">
      <div className="flex w-full justify-between mb-4 mt-8">
        <h1 className="text-xl sm:text-2xl font-roboto text-gray-800 font-semibold mb-4">
          Recommended products
        </h1>
        <div className="flex text-xl sm:text-2xl gap-4">
          <button
            onClick={scrollLeft}
            className=" py-2 px-3 hover:bg-slate-200 rounded-lg"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={scrollRight}
            className="py-2 px-3 hover:bg-slate-200 rounded-lg"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="relative w-full">
        <div
          className="overflow-x-hidden whitespace-nowrap flex space-x-4 snap-mandatory"
          ref={carouselRef}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="min-w-[300px] min-h-max">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
