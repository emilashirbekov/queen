import { createSlice } from "@reduxjs/toolkit";
import { ProductsTypes } from "../types/product.types";
import { fetchProducts } from "../services/fetchProducts";
import { RootState } from "@/app/providers/StoreProvider/config/store";

interface ProductsState {
  products: ProductsTypes[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? "Unknown error";
    });
  },
});

export default productsSlice.reducer;
export const selectProducts = (state: RootState) => state.products.products;
