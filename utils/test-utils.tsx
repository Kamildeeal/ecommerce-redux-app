import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import type { AppStore, RootState } from "@/lib/store";
import { setupStore } from "@/lib/store";
// As a basic setup, import your same slice reducers
import ProductRedcuer from "@/lib/features/products/CartProductsSlice";
import FetchDataReducer from "@/lib/features/products/FetchDataSlice";
import ToastReducer from "@/lib/features/toast/ToastsSlice";
import ModalReducer from "@/lib/features/modal/ModalSlice";
import ProductInfoRedcuer from "@/lib/features/products/ShowProductSlice";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
