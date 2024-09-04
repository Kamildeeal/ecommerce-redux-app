import { Order } from "@/app/models/order";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const body = await req.json();
    const createdOrder = await Order.create(body);
    return new Response(JSON.stringify(createdOrder), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return new Response("Error creating order", {
      status: 500,
    });
  }
}
// export async function POST(req) {
//   const body = await req.json();
//   mongoose.connect(process.env.MONGO_URL);

//   const createdOrder = await Order.create(body);

//   return Response.json(createdOrder);
// }
// import { Order } from "@/app/models/order";
// import mongoose from "mongoose";

// export async function POST(req) {
//   const body = await req.json();

//   // Avoid re-connecting to the database
//   if (mongoose.connection.readyState === 0) {
//     await mongoose.connect(process.env.MONGO_URL);
//   }

//   try {
//     const createdOrder = await Order.create(body);
//     return new Response(JSON.stringify(createdOrder), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return new Response(JSON.stringify({ error: "Failed to create order" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// import { Order } from "@/app/models/order";
// import mongoose from "mongoose";

// export async function POST(req) {
//   const body = await req.json();

//   // Avoid re-connecting to the database
//   if (mongoose.connection.readyState === 0) {
//     await mongoose.connect(process.env.MONGO_URL);
//   }

//   try {
//     const createdOrder = await Order.create(body);
//     return new Response(JSON.stringify(createdOrder), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return new Response(JSON.stringify({ error: "Failed to create order" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
