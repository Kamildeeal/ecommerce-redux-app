import { model, models, Schema } from "mongoose";

// Define the OrderItem schema
const OrderItemSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Define the Order schema, using OrderItemSchema for the items field
const OrderSchema = new Schema(
  {
    id: { type: String, required: true },
    userId: { type: String, required: true },
    items: { type: [OrderItemSchema], required: true }, // Array of OrderItems
    totalAmount: { type: Number, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

export const Order = models?.Order || model("Order", OrderSchema);

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
