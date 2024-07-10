import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: string;
  category: string;
  rating: number;
  brand: string | null;
  availabilityStatus: string;
  warrantyInformation: string;
  shippingInformation: string;
  reviews: Review[];
}

interface FetchData {
  loading: boolean;
  products: Product[];
  filteredProducts: Product[];
  categoryFilter: string | null;
  displayedProducts: Product[];
  error: null | string;
  page: number;
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    return response.data.products;
  }
);

const initialState: FetchData = {
  loading: true,
  products: [],
  filteredProducts: [],
  categoryFilter: "allItems",
  displayedProducts: [],
  error: null,
  page: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoryFilter: (state, action: PayloadAction<string | null>) => {
      state.categoryFilter = action.payload;
      if (state.categoryFilter === "allItems") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === state.categoryFilter
        );
      }
      state.page = 1;
      state.displayedProducts = state.filteredProducts.slice(0, 16);
    },
    sortProductsByCategory: (state) => {
      state.filteredProducts = [...state.filteredProducts].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
      state.displayedProducts = state.filteredProducts.slice(
        0,
        state.page * 16
      );
    },
    loadMoreProducts: (state) => {
      const start = state.page * 16;
      const moreProducts = state.filteredProducts.slice(start, start + 16);
      state.displayedProducts = [...state.displayedProducts, ...moreProducts];
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
        state.displayedProducts = action.payload.slice(0, 16);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});
export const { setCategoryFilter, sortProductsByCategory, loadMoreProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
