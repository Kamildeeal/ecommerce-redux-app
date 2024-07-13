import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  addItemToastVisible: false,
  removeItemToastVisible: false,
};

const toastSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    showToastSuccess: (state) => {
      state.addItemToastVisible = true;
      toast.success("Item added to cart successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    showToastRemove: (state) => {
      state.removeItemToastVisible = true;
      toast.error("Item removed from cart", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
  },
});

export const { showToastSuccess, showToastRemove } = toastSlice.actions;

export default toastSlice.reducer;
