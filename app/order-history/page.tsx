"use client";
import React, { useEffect, useState } from "react";

const OrderHistoryPage = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the order history when the component mounts
  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch("/api/getorder", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const data = await response.json();
        setOrderHistory(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
    console.log(orderHistory);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    console.log("error");
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {orderHistory && orderHistory.length > 0 ? (
        orderHistory.map((order) => (
          <div
            key={order._id}
            className="mb-4 p-4 border rounded flex flex-col text-center justify-center w-[500px]"
          >
            <p>Date: {new Date(order.date).toLocaleString()}</p>
            <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
            <div className="mt-2">
              <h4 className="font-medium">Items:</h4>
              {order.items.map((item) => (
                <div key={item.id} className="pl-4">
                  {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default OrderHistoryPage;
