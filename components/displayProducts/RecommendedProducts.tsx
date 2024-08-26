import { useAppSelector } from "@/lib/hookts";
import { RootState } from "@/lib/store";
import React, { useRef, useState, useEffect } from "react";
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollLeftButton = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRightButton = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchStart = (e) => {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
      const walk = x - startX;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("mousedown", handleMouseDown);
      carousel.addEventListener("mousemove", handleMouseMove);
      carousel.addEventListener("mouseup", handleMouseUp);
      carousel.addEventListener("mouseleave", handleMouseUp);

      carousel.addEventListener("touchstart", handleTouchStart);
      carousel.addEventListener("touchmove", handleTouchMove);
      carousel.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("mousedown", handleMouseDown);
        carousel.removeEventListener("mousemove", handleMouseMove);
        carousel.removeEventListener("mouseup", handleMouseUp);
        carousel.removeEventListener("mouseleave", handleMouseUp);

        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchmove", handleTouchMove);
        carousel.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <section className="my-20">
      <div className="flex w-full mb-4 justify-between">
        <h1 className="mx-auto md:mx-0 text-lg sm:text-2xl font-roboto text-gray-800 font-semibold mb-4">
          Recommended products
        </h1>
        <div className="flex text-lg sm:text-2xl gap-1 sm:gap-4">
          <button
            onClick={scrollLeftButton}
            className=" py-2 px-3 hover:bg-slate-200 rounded-lg"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={scrollRightButton}
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
          style={{
            scrollSnapType: "x mandatory",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[240px] sm:min-w-[300px] min-h-max"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
