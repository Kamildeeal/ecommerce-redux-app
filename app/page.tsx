"use client";
import DisplayProducts from "@/components/displayProducts/Display";
import InfoModal from "@/components/infoModal/InfoModal";
import { AnimatePresence } from "framer-motion";

export default function HomePageShop() {
  return (
    <>
      <div className="container flex mx-auto justify-center max-w-[1540px] w-full px-7">
        <section className="py-10 sm:px-10 w-full max-w-[1315px]">
          <div className="container mx-auto">
            <DisplayProducts />
          </div>
          <AnimatePresence>
            <div>
              <InfoModal />
            </div>
          </AnimatePresence>
        </section>
      </div>
    </>
  );
}
