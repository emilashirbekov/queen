import { BASE_URL } from "@/app/constants/contants";
import { CharacteristicApiResponse } from "@/features/Characteristics/ui/model/types/characteristics.types";
import { access_token } from "@/shared/config/localstorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectUser } from "@/pages/AuthPage/model/slice/authSlice";
import { RootState } from "@/app/providers/StoreProvider/config/store";

export const characteristicsAPI = createApi({
  reducerPath: "characteristicsAPI",
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
  tagTypes: ["Characteristics"],

  endpoints: (builder) => ({
    getCharacteristics: builder.query<CharacteristicApiResponse, void>({
      query: () => ({
        url: "characteristik/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Characteristics"],
    }),

    createCharacteristic: builder.mutation<
      CharacteristicApiResponse,
      Partial<CharacteristicApiResponse>
    >({
      query: (characteristic) => ({
        url: `characteristik/`,
        method: "POST",
        body: characteristic,
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Characteristics"],
    }),
    deleteCharacteristic: builder.mutation<void, number>({
      query: (id) => ({
        url: `characteristik/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Characteristics"],
    }),
    updateCharacteristic: builder.mutation({
      query: ({ id, updatedCharacteristic }) => ({
        url: `characteristik/${id}/`,
        method: "PUT",
        body: updatedCharacteristic,
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Characteristics"],
    }),
  }),
});

export const {
  useGetCharacteristicsQuery,
  useCreateCharacteristicMutation,
  useDeleteCharacteristicMutation,
  useUpdateCharacteristicMutation,
} = characteristicsAPI;
