import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "@/components/header/Header";

import Footer from "@/components/Footer";
import TopLinksSection from "@/components/header/headerCompontents/TopLinksSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KamShop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <TopLinksSection />
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
