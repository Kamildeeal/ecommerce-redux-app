import Image from "next/image";
import Products from "@/components/Products";
import Hero from "@/components/Hero";
import CartDetails from "@/components/CartDetails";

export default function HomePageShop() {
  return (
    <>
      <Hero />
      <div className="container flex mx-auto justify-center">
        <CartDetails />
      </div>
      <section className="py-10">
        <div className="container mx-auto">
          <Products />
        </div>
      </section>
    </>
  );
}
