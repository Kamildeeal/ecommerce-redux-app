import DisplayProducts from "@/components/homePage/Display";

export default function HomePageShop() {
  return (
    <>
      <div className="container flex mx-auto justify-center max-w-[1440px] "></div>
      <section className="py-10">
        <div className="container mx-auto">
          <DisplayProducts />
        </div>
      </section>
    </>
  );
}
