import { Product } from "@/lib/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductDisplayState {
  currentProduct: Product | null;
}

export const initialState: ProductDisplayState = {
  currentProduct: null,
};

const ProductDisplay = createSlice({
  name: "ProductDisplay",
  initialState,
  reducers: {
    setCurrentProduct: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    },
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
});

export const { setCurrentProduct, clearCurrentProduct } =
  ProductDisplay.actions;
export default ProductDisplay.reducer;
