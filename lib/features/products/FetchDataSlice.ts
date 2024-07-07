// @/features/products/productsSlice.ts

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
  reviews: Review[];
}

interface FetchData {
  loading: boolean;
  products: Product[];
  filteredProducts: Product[];
  categoryFilter: string | null;
  error: null | string;
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  }
);

//https://dummyjson.com/products?limit=100

const initialState: FetchData = {
  loading: true,
  products: [],
  filteredProducts: [],
  categoryFilter: "allItems",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoryFilter: (state, action: PayloadAction<string | null>) => {
      state.categoryFilter = action.payload;
      if (state.categoryFilter) {
        state.filteredProducts = state.products.filter(
          (product) => product.category === state.categoryFilter
        );
      } else {
        state.filteredProducts = state.products;
      }
    },
    sortProductsByCategory: (state) => {
      state.filteredProducts = [...state.filteredProducts].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
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
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});
export const { setCategoryFilter, sortProductsByCategory } =
  productsSlice.actions;
export default productsSlice.reducer;
