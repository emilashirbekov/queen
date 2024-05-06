import { RootState } from "@/app/providers/StoreProvider/config/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "@/app/providers/http/axiosApi";
import { CollectionTypes } from "@/entities/Collection/model/types/collection.types";

export const fetchCollection = createAsyncThunk<
  CollectionTypes[],
  void,
  { state: RootState }
>("collection/fetchCollection", async () => {
  const response = await axiosApi.get<CollectionTypes[]>(
    `/collection/list/collection/`,
  );
  return response.data;
});

export const addCollection = createAsyncThunk<void, number[]>(
  "collection/createListCollection",
  async (product) => {
    await axiosApi.post("/collection/create/collection/", {
      product,
    });
  },
);

interface UpdateCollections {
  id: number;
  product: number[];
}

export const updateCollection = createAsyncThunk<void, UpdateCollections>(
  "collection/updateListCollection",
  async ({ id, product }) => {
    await axiosApi.put(`/collection/rud/collection/${id}/`, {
      product: product,
    });
  },
);
