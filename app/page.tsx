"use client";
import DisplayProducts from "@/components/displayProducts/Display";
import InfoModal from "@/components/infoModal/InfoModal";
import { AnimatePresence } from "framer-motion";

export default function HomePageShop() {
  return (
    <>
      <div>
        <div className="container flex mx-auto justify-center max-w-[1540px] "></div>
        <section className="py-10">
          <div className="container mx-auto">
            <DisplayProducts />
          </div>
          {/* next time use mode="wait" */}
          <AnimatePresence>
            <InfoModal />
          </AnimatePresence>
        </section>
      </div>
    </>
  );
}
