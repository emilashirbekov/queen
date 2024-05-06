import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/providers/StoreProvider/config/store";
import { fetchRecomendation } from '../services/fetchRecomendation';
import { ListResponse } from '@/app/types/types'
export interface RecomendationApi {
  products: string;
}

interface RecomendationState {
  recomendations: ListResponse<RecomendationApi>[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: RecomendationState = {
  recomendations: [],
  status: "idle",
  error: null,
};

const recomendationSlice = createSlice({
  name: "recomendation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecomendation.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchRecomendation.fulfilled,
      (state, { payload: recomendations }) => {
        state.status = "succeeded";
        state.recomendations = recomendations;
      },
    );
    builder.addCase(fetchRecomendation.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? "Unknown error";
    });
  },
});

export default recomendationSlice.reducer;
export const selectRecomendations = (state: RootState) =>
  state.recomendation.recomendations;
export const selectRecomendationLoading = (state: RootState) =>
  state.recomendation.status;
