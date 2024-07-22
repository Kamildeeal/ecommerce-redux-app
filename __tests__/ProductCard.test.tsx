import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/utils/test-utils";
import { fetchProducts } from "@/lib/features/products/FetchDataSlice";
import { setupStore } from "@/lib/store";
import { Product } from "@/lib/types/types";
import "@testing-library/jest-dom";
import ProductCard from "@/components/displayProducts/ProductCard";
import mockRouter from "next-router-mock";

jest.mock("next/navigation", () => require("next-router-mock"));

const mockHandleAddItemToast = jest.fn();
jest.mock("@/utils/hooks/useHandleToasts", () => () => ({
  handleAddItemToast: mockHandleAddItemToast,
}));

describe("ProductCard Component", () => {
  mockRouter.push("/initial-path");

  it("should render product data", async () => {
    const store = setupStore();
    await store.dispatch(fetchProducts());
    const state = store.getState();
    const product: Product = state.products.products[0];
    renderWithProviders(<ProductCard product={product} />, {
      store,
    });

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src");
  });

  it("calls handleAddItemToast when Add to Cart button is clicked", async () => {
    const store = setupStore();
    await store.dispatch(fetchProducts());
    const state = store.getState();
    const product: Product = state.products.products[0];

    renderWithProviders(<ProductCard product={product} />, {
      store,
    });
    fireEvent.click(screen.getByText("Add to Cart"));

    expect(mockHandleAddItemToast).toHaveBeenCalled();
  });
});
