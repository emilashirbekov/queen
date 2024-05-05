import { BASE_URL } from "@/app/constants/contants";
import { RootState } from "@/app/providers/StoreProvider/config/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductsTypes } from "../../../Product/model/types/product.types";

export const fetchRecomendation = createAsyncThunk<
  ProductsTypes[],
  void,
  { state: RootState }
>("products/fetchRecomendation", async () => {
  const response = await axios.get(
    `${BASE_URL}/collection/list/recommendation/`,
  );
  return response.data.results;
});
