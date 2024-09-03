"use server";
import { JsonDB, Config } from "node-json-db";

// Initialize the JSON database
const db = new JsonDB(new Config("myDataBase", true, false, "/"));

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  date: string;
}

export async function addOrder(
  userId: string,
  items: OrderItem[]
): Promise<void> {
  try {
    const newOrder: Order = {
      id: Date.now().toString(),
      userId,
      items,
      totalAmount: items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      date: new Date().toISOString(),
    };

    // Get all orders
    let allOrders: Order[] = [];
    try {
      allOrders = await db.getData("/orders");
    } catch (error) {
      // If /orders doesn't exist, initialize it
      await db.push("/orders", []);
    }

    // Ensure allOrders is an array
    if (!Array.isArray(allOrders)) {
      allOrders = [];
    }

    // Add the new order
    allOrders.push(newOrder);

    // Save all orders back to the database
    await db.push("/orders", allOrders);
  } catch (error) {
    console.error("Error adding order:", error);
    throw error;
  }
}

export async function getOrderHistory(userId: string): Promise<Order[]> {
  try {
    const allOrders: Order[] = (await db.getData("/orders")) || [];

    // Ensure allOrders is an array
    if (!Array.isArray(allOrders)) {
      throw new Error("Invalid data format: orders data is not an array");
    }

    // Filter orders for the specific user
    return allOrders.filter((order) => order.userId === userId);
  } catch (error) {
    if (error.message.includes("Can't find dataPath")) {
      // If the path doesn't exist, return an empty array
      return [];
    }
    console.error("Error fetching order history:", error);
    throw error;
  }
}
