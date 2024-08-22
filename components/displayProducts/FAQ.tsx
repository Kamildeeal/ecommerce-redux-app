import React from "react";

const FAQ = () => {
  return (
    <div className="relative w-full max-w-[900px] min-w-[300px] pt-10 pb-8 mt-8 shadow-xl sm:mx-auto sm:px-10">
      <div className="mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-xl mt-5 sm:text-2xl font-roboto text-gray-800 font-semibold mb-4">
            Frequently asked questions
          </p>
        </div>
        <div className="mx-auto mt-8 ">
          {[
            {
              question: "How can I place an order?",
              answer:
                "To place an order, select the products you want to purchase and add them to your cart. Once you have added all desired items to the cart, proceed to checkout where you can enter your shipping information and select a payment method. After completing the payment process, you will receive an order confirmation email.",
            },
            {
              question: "How can I track my order?",
              answer:
                "After placing your order, we will send you an email with a tracking number and a link to the carrier's website where you can monitor your package's status. You can also log in to your account on our website to check the order status in the 'My Orders' section.",
            },
            {
              question: "Can I change or cancel my order?",
              answer:
                "If you need to change or cancel your order, please contact us as soon as possible after placing it. If your order has not yet been shipped, we will do our best to make the changes or cancel it. Once the package has been shipped, we are unable to make changes to the order.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept various payment methods, including credit cards (Visa, MasterCard), PayPal, and bank transfers. Choose your preferred payment method during checkout.",
            },
            {
              question: "What are the shipping costs?",
              answer:
                "Shipping costs depend on the weight and size of the package as well as the delivery location. Shipping fees will be automatically calculated and displayed during checkout. We also offer free shipping options for orders over a certain amount.",
            },
            {
              question: "Can I return or exchange a product?",
              answer:
                "Yes, we accept returns and exchanges. If you want to return or exchange a product, please contact our customer service within 14 days of receiving your order. Products must be in their original condition and packaging. For detailed return policy information, visit our 'Returns and Exchanges' section.",
            },
            {
              question: "What should I do if I receive a damaged product?",
              answer:
                "If you receive a damaged or defective product, please contact us immediately. Send us photos of the damaged product and packaging so that we can address the issue as quickly as possible. We offer product replacement or a full refund.",
            },
            {
              question: "How can I contact customer support?",
              answer:
                "If you need assistance with our platform or have any other questions, you can contact our support team by submitting a support request through our website or by emailing support@ourwebsite.com.",
            },
            {
              question: "Do you offer any discounts or promotions?",
              answer:
                "We may offer discounts or promotions from time to time. To stay updated on the latest deals and special offers, you can sign up for our newsletter or follow us on social media.",
            },
            {
              question: "Do you have a loyalty program?",
              answer:
                "Yes, we have a loyalty program for our regular customers. You can earn points for purchases and redeem them for rewards and discounts. For more details on the loyalty program, check out the 'Loyalty Program' section on our website.",
            },
            {
              question: "Where can I find more information about products?",
              answer:
                "Detailed information about our products, including descriptions, specifications, and customer reviews, can be found on the product page in our store. If you have additional questions, please contact us and our team will be happy to help.",
            },
          ].map((item, index) => (
            <div key={index} className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between font-medium">
                  <span>{item.question}</span>
                  <span className="transition-transform duration-200 group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                  {item.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
