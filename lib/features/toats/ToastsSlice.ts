import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  addItemVisible: false,
  removeItemVisible: false,
};

const toastSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    showToastSuccess: (state) => {
      state.addItemVisible = true;
    },
    hideToastSuccess: (state) => {
      state.addItemVisible = false;
    },
    showToastRemove: (state) => {
      state.removeItemVisible = true;
    },
    hideToastRemove: (state) => {
      state.removeItemVisible = false;
    },
  },
});

export const {
  showToastRemove,
  showToastSuccess,
  hideToastRemove,
  hideToastSuccess,
} = toastSlice.actions;

export default toastSlice.reducer;
