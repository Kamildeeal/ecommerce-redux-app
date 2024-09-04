import { Order } from "@/app/models/order";
import mongoose from "mongoose";
import { getAuth } from "@clerk/nextjs/server"; // Use server-side auth in server side

export async function GET(req) {
  const { userId } = getAuth(req);
  try {
    mongoose.connect(process.env.MONGO_URL);

    if (!userId) {
      return new Response("User is not authenticated", {
        status: 401, // Unauthorized
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch orders for the authenticated user
    const userOrders = await Order.find({ userId });

    if (userOrders.length === 0) {
      return new Response("No orders found for this user", {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(userOrders), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return new Response("Error fetching orders", {
      status: 500, // Internal Server Error
    });
  }
}
