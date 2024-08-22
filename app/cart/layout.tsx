"use client";
import { BsCart3 } from "react-icons/bs";
import { SiContactlesspayment } from "react-icons/si";
import { LiaShippingFastSolid } from "react-icons/lia";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div>
      <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-4 text-center mt-4 border-b-2 pb-2 shadow-bottom-only flex gap-3 w-full">
        <div className="sm:justify-between max-w-[1560px] w-full sm:flex mx-auto">
          <Link href="/cart">
            <div
              className={`flex gap-3 sm:ml-12 md:ml-16 lg:ml-32 pb-2 sm:pb-0 justify-center sm:justify-normal hover:underline cursor-pointer ${
                pathname === "/cart" ? "text-black" : "text-gray-400"
              }`}
            >
              Cart <BsCart3 />
            </div>
          </Link>
          <Link href="/cart/order">
            <div
              className={`flex gap-3 pb-2 sm:pb-0 justify-center sm:justify-normal hover:underline cursor-pointer ${
                pathname === "/cart/order" ? "text-black" : "text-gray-400"
              }`}
            >
              Order resume
              <LiaShippingFastSolid className="mt-2" />
            </div>
          </Link>
          <Link href="/cart/payment">
            <div
              className={`flex gap-3 sm:mr-12 md:mr-16 lg:mr-32 pb-2 sm:pb-0 justify-center sm:justify-normal hover:underline cursor-pointer ${
                pathname === "/cart/payment" ? "text-black" : "text-gray-400"
              }`}
            >
              Payment method
              <SiContactlesspayment className="mt-1.5" />
            </div>
          </Link>
        </div>
      </h1>
      <div>{children}</div>
    </div>
  );
}
