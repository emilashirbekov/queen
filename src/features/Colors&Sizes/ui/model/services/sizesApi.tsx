import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SizeApiResponse } from "../types/types";
import { access_token } from "@/shared/config/localstorage";
import { BASE_URL } from "@/app/constants/contants";
import { selectUser } from "@/pages/AuthPage/model/slice/authSlice";
import { RootState } from "@/app/providers/StoreProvider/config/store";

export const sizesAPI = createApi({
  reducerPath: "sizesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/products/`,
    prepareHeaders: (headers, { getState }) => {
      const token = selectUser(getState() as RootState)?.access;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Sizes"],

  endpoints: (builder) => ({
    getSizes: builder.query<SizeApiResponse, void>({
      query: () => ({
        url: "/list/sizes",
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Sizes"],
    }),
    createSize: builder.mutation<SizeApiResponse, Partial<SizeApiResponse>>({
      query: (size) => ({
        url: `create/sizes/`,
        method: "POST",
        body: size,
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Sizes"],
    }),
    deleteSize: builder.mutation<void, number>({
      query: (id) => ({
        url: `rud/sizes/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Sizes"],
    }),
    updateSize: builder.mutation({
      query: ({ id, updatedSize }) => ({
        url: `rud/sizes/${id}/`,
        method: "PUT",
        body: updatedSize,
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Sizes"],
    }),
  }),
});

export const {
  useGetSizesQuery,
  useCreateSizeMutation,
  useDeleteSizeMutation,
  useUpdateSizeMutation,
} = sizesAPI;
