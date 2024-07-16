import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/utils/test-utils";
import HomePageShop from "@/app/page";
import "@testing-library/jest-dom";

describe("HomePageShop Component", () => {
  test("renders DisplayProducts component", () => {
    renderWithProviders(<HomePageShop />);

    const displayProductsElement = screen.getByTestId("display-products");

    expect(displayProductsElement).toBeInTheDocument();
  });
});
