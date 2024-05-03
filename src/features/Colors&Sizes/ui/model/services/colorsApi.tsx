import { BASE_URL } from "@/app/constants/contants";
import { access_token } from "@/shared/config/localstorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ColorApiResponse } from "../types/types";
import { selectUser } from "@/pages/AuthPage/model/slice/authSlice";
import { RootState } from "@/app/providers/StoreProvider/config/store";

export const colorsAPI = createApi({
  reducerPath: "colorsAPI",
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
  tagTypes: ["Colors"],

  endpoints: (builder) => ({
    getColors: builder.query<ColorApiResponse, void>({
      query: () => ({
        url: "list/colors/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Colors"],
    }),
    createColor: builder.mutation<ColorApiResponse, Partial<ColorApiResponse>>({
      query: (color) => ({
        url: `create/colors/`,
        method: "POST",
        body: color,
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Colors"],
    }),
    deleteColor: builder.mutation<void, number>({
      query: (id) => ({
        url: `rud/colors/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Colors"],
    }),
    updateColor: builder.mutation({
      query: ({ id, updatedColor }) => ({
        url: `rud/colors/${id}/`,
        method: "PUT",
        body: updatedColor,
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Colors"],
    }),
  }),
});

export const {
  useGetColorsQuery,
  useCreateColorMutation,
  useDeleteColorMutation,
  useUpdateColorMutation,
} = colorsAPI;
