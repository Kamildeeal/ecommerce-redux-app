import { configureStore } from "@reduxjs/toolkit";
import ProductRedcuer from "./features/products/CartProductsSlice";
import FetchDataReducer from "./features/products/FetchDataSlice";
import ToastReducer from "./features/toast/ToastsSlice";
import ModalReducer from "./features/modal/ModalSlice";
import ProductInfoRedcuer from "./features/products/ShowProductSlice";

// Infer the type of makeStore
export type AppStore = ReturnType<typeof Store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const Store = () => {
  return configureStore({
    reducer: {
      products: FetchDataReducer,
      cartProducts: ProductRedcuer,
      toast: ToastReducer,
      modal: ModalReducer,
      productInfo: ProductInfoRedcuer,
    },
  });
};
