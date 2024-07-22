"use client";
import React, { useState } from "react";
import blik from "@/assets/paymentMethodLogs/Blik-logo.png";
import googlePay from "@/assets/paymentMethodLogs/Google-Pay-logo.png";
import paypal from "@/assets/paymentMethodLogs/Logo-Paypal.png";
import Image from "next/image";

export const PaymentMethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const paymentMethods = [
    { id: "blik", name: "BLIK", image: blik },
    {
      id: "fastTransfer",
      name: "Google Transfer",
      image: googlePay,
    },
    { id: "payPo", name: "PayPo - Pay Later", image: paypal },
    { id: "blikLater", name: "BLIK - Pay later", image: blik },
    { id: "googleLater", name: "Google Later", image: googlePay },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <h2 className="text-xl font-semibold mb-4">Choose a payment method</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 ${
              method.id === "cashOnDelivery" ? "bg-gray-100" : ""
            } ${
              method.id === selectedMethod
                ? "bg-blue-50 border-l-4 border-blue-500"
                : ""
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => setSelectedMethod(method.id)}
                className="mr-3"
              />
              <span className="text-sm font-medium">{method.name}</span>
            </div>
            <Image
              src={method.image}
              alt={method.name}
              width={100}
              height={30}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
