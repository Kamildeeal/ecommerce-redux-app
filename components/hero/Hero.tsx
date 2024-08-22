import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "@/assets/heroImages/pexels-olly-3769747.jpg";
import image2 from "@/assets/heroImages/pexels-karolina-grabowska-5625114.jpg";
import image3 from "@/assets/heroImages/pexels-max-fischer-5872349.jpg";

const images = [image1, image2, image3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="pb-20 pt-4 text-center mb-4 w-full">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold mb-4 font-climate-crisis">
          Welcome to KamShop
        </h2>
        <p className="text-gray-700 mb-2 pb-6 font-climate-crisis">
          Discover our range of products and enjoy shopping with us!
        </p>
        <div className="relative max-w-[1100px] w-full h-[500px] mx-auto">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`hero ${currentIndex}`}
                fill={true}
                className="object-cover w-full max-w-[1100px]"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                }`}
                onClick={() => goToImage(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
