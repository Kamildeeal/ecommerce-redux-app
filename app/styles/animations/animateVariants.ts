export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% - 100px)",
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};

export const categoriesSlide = {
  initial: { x: "-100%" },
  enter: { x: "0%", transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "-100%",
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};

export const stripeSlide = {
  initial: { x: "-100%" },
  enter: { x: "0%", transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "-100%",
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};
