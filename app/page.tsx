import Image from "next/image";
import Products from "@/components/Products";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function HomePageShop() {
  return (
    <>
      <Header />
      <Hero />
      <section className="py-10">
        <div className="container mx-auto">
          <Products />
        </div>
      </section>
      <Footer />
    </>
  );
}
