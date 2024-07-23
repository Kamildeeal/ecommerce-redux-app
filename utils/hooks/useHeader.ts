import { useState, useEffect, useCallback } from "react";

export const useHeader = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [smallWindowWidthSize, setSmallWindowWidthSize] = useState(false);
  const [mediumWindowWidthSize, setMediumWindowWidthSize] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOpenModal = () => {
    setOpenCategories((prev) => !prev);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseModal = () => {
    setOpenCategories((prev) => !prev);
    document.body.classList.remove("overflow-hidden");
  };

  const handleScroll = useCallback(() => {
    setIsScrolled((prevIsScrolled) => {
      if (prevIsScrolled && window.scrollY < 30) return false;
      if (!prevIsScrolled && window.scrollY > 70) return true;
      return prevIsScrolled;
    });
  }, []);

  const handleResize = useCallback(() => {
    setSmallWindowWidthSize(window.innerWidth < 640);
    setMediumWindowWidthSize(window.innerWidth < 860);
  }, []);

  useEffect(() => {
    handleResize();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    setIsLoaded(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return {
    openCategories,
    isScrolled,
    smallWindowWidthSize,
    mediumWindowWidthSize,
    isLoaded,
    handleOpenModal,
    handleCloseModal,
  };
};
