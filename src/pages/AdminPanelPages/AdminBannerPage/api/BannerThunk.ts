import { createAsyncThunk } from "@reduxjs/toolkit";
import { Banner, BannerApi } from "../model/types/types";
import { axiosApi } from "@/app/providers/http/axiosApi";

//
// export const postBanner = createAsyncThunk<void, Banner>(
//   "admin/postBanner",
//   async (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("images", data.images);
//     await axiosApi.post("/banner/banners/create/", formData);
//   },
// );

// export const getBanner = createAsyncThunk<Banner[]>(
//   "admin/getBanner",
//   async (id) => {
//     const response =
//       await axiosApi.get<ListResponse<Banner>>(`/banner/banners/1/`);
//     return response.data.results;
//   },
// );

export const getSingleBanner = createAsyncThunk<BannerApi>(
  "admin/getBanner",
  async () => {
    const response = await axiosApi.get<BannerApi>(`/banner/banners/detail/1/`);
    return response.data;
  },
);

export const updateBanner = createAsyncThunk<void, Banner>(
  "admin/updateBanner",
  async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("images", data.images);
    await axiosApi.put(`/banner/banners/delete/1/`, formData);
  },
);
