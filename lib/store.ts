import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductRedcuer from "./features/products/CartProductsSlice";
import FetchDataReducer from "./features/products/FetchDataSlice";
import ToastReducer from "./features/toast/ToastsSlice";
import ModalReducer from "./features/modal/ModalSlice";
import ProductInfoRedcuer from "./features/products/ShowProductSlice";

const rootReducer = combineReducers({
  products: FetchDataReducer,
  cartProducts: ProductRedcuer,
  toast: ToastReducer,
  modal: ModalReducer,
  productInfo: ProductInfoRedcuer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

//version before integrating ReduxStore with tests
// export const Store = () => {
//   return configureStore({
//     reducer: {
//       products: FetchDataReducer,
//       cartProducts: ProductRedcuer,
//       toast: ToastReducer,
//       modal: ModalReducer,
//       productInfo: ProductInfoRedcuer,
//     },
//   });
// };

// Infer the type of makeStore
// export type AppStore = ReturnType<typeof Store>;
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
