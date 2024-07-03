import React from "react";
import CartDetails from "@/components/CartDetails";

export default function page() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <p>Here is the content of your cart...</p>
      <CartDetails />
    </div>
  );
}
