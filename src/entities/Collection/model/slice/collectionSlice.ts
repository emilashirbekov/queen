import { createSlice } from "@reduxjs/toolkit";
import { fetchCollection } from "../services/fetchCollection";
import { CollectionTypes } from "../types/collection.types";
import { RootState } from "@/app/providers/StoreProvider/config/store";

interface CollectionState {
  collections: CollectionTypes[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CollectionState = {
  collections: [],
  status: "idle",
  error: null,
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollection.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchCollection.fulfilled,
      (state, { payload: collections }) => {
        state.status = "succeeded";
        state.collections = collections;
      },
    );
    builder.addCase(fetchCollection.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? "Unknown error";
    });
  },
});

export default collectionSlice.reducer;
export const selectCollections = (state: RootState) =>
  state.collection.collections;
export const selectCollectionsLoading = (state: RootState) =>
  state.collection.status;
