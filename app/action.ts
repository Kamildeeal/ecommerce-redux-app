"use server";
import { addOrder, getOrderHistory } from "../db";
import { auth } from "@clerk/nextjs/server";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export async function addOrderToHistory(userId: string, items: any[]) {
  if (!userId) {
    throw new Error("User not authenticated");
  }
  try {
    await addOrder(userId, items);
  } catch (error) {
    console.error("Error adding order to history:", error);
    throw error;
  }
}

export async function fetchOrderHistory() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }
  try {
    return await getOrderHistory(userId);
  } catch (error) {
    console.error("Error fetching order history:", error);
    throw error;
  }
}

// "use server";

// import { auth } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";

// export async function createOrderAction(prevstate: any, formData: any) {
//   const eachOrder = formData.get("order");

//   if (eachOrder === "") {
//     return { message: "Order cannot be empty" };
//   }

//   //ADD ORDER ITEMS
//   const { userId } = auth();

//   revalidatePath("/order-history");
//   return { message: "" };
// }
