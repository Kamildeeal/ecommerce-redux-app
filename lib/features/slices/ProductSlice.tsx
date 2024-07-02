import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Products",
  initialState: [],
  reducers: {
    addProduct: (
      state: any,
      action: PayloadAction<{
        id: number;
        title: string;
        price: number;
        description: string;
      }>
    ) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
