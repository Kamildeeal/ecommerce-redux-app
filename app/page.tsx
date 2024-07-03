import Image from "next/image";
import Products from "@/components/Products";
import Hero from "@/components/Hero";

export default function HomePageShop() {
  return (
    <>
      <Hero />
      <section className="py-10">
        <div className="container mx-auto">
          <Products />
        </div>
      </section>
    </>
  );
}
