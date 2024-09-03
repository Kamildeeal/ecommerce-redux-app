// import React from "react";
// import { fetchOrderHistory } from "@/app/action";

// const OrderHistoryPage = async () => {
//   const orderHistory = await fetchOrderHistory();
//   return (
//     <div className="flex justify-center items-center">
//       <div>
//         {orderHistory && orderHistory.length > 0 ? (
//           orderHistory.map((order) => (
//             <div key={order.id}>
//               {order.items.map((item) => (
//                 <div key={item.id}>
//                   {item.name} - {item.quantity} x ${item.price}
//                 </div>
//               ))}
//             </div>
//           ))
//         ) : (
//           <p>No orders found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderHistoryPage;

import React from "react";
import { fetchOrderHistory } from "@/app/action";

const OrderHistoryPage = async () => {
  const orderHistory = await fetchOrderHistory();

  return (
    <div className="flex justify-center items-center">
      <div>
        {orderHistory && orderHistory.length > 0 ? (
          orderHistory.map((order) => (
            <div
              key={order.id}
              className="mb-4 p-4 border rounded flex flex-col text-center justify-center w-[500px] mt-8"
            >
              <h3 className="text-lg font-semibold mb-2">
                Order ID: {order.id}
              </h3>
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
    </div>
  );
};

export default OrderHistoryPage;
