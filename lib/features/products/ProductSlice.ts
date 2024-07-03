import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
}

const initialState: Product[] = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, "quantity">>) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.price += action.payload.price;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return state.filter((product) => product.id !== action.payload);
    },
    decrementProductQuantity: (state, action: PayloadAction<number>) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          product.price -= product.price / product.quantity;
        } else {
          return state.filter((p) => p.id !== action.payload);
        }
      }
    },
  },
});

export const { addProduct, removeProduct, decrementProductQuantity } =
  productSlice.actions;
export default productSlice.reducer;
