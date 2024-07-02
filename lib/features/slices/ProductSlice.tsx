import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Products",
  initialState: [],
  reducers: {
    addProduct: (state: any, action: any) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
