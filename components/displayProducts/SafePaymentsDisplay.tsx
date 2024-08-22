import React from "react";
import blik from "@/assets/paymentMethodLogs/Blik-logo.png";
import googlePay from "@/assets/paymentMethodLogs/Google-Pay-logo.png";
import paypal from "@/assets/paymentMethodLogs/Logo-Paypal.png";
import Image from "next/image";

const SafePaymentMethods = () => {
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
    <div className="text-start py-6 mt-8">
      <h2 className="text-xl sm:text-2xl  mt-2 font-roboto text-gray-800 font-semibold mb-4">
        Shop and pay safely
      </h2>
      <div className="flex justify-start items-center space-x-4">
        {paymentMethods.map((method) => (
          <div key={method.id}>
            <Image
              src={method.image}
              alt={method.name}
              width={100}
              height={30}
              className="mr-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafePaymentMethods;
