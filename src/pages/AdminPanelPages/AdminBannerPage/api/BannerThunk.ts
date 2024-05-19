import { createAsyncThunk } from "@reduxjs/toolkit";
import { Banner, BannerApi } from "../model/types/types";
import { axiosApi } from "@/app/providers/http/axiosApi";
import { ListResponse } from "@/app/types/types";
import { BannerMutation } from "@/pages/AdminPanelPages/AdminBannerPage/ui/AdminBannerPage";

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

export const getBanners = createAsyncThunk<Banner[]>(
  "admin/getBanners",
  async () => {
    const response =
      await axiosApi.get<ListResponse<Banner>>(`/banner/banners/`);
    return response.data.results;
  },
);

export const getSingleBanner = createAsyncThunk<BannerApi, number>(
  "admin/getBanner",
  async (id) => {
    const response = await axiosApi.get<BannerApi>(
      `/banner/banners/detail/${id}/`,
    );
    return response.data;
  },
);

interface BannerUpdate {
  banner: BannerMutation;
  id: number;
}

export const updateBanner = createAsyncThunk<void, BannerUpdate>(
  "admin/updateBanner",
  async ({ banner, id }) => {
    const formData = new FormData();
    formData.append("name", banner.name);
    if (banner.images) {
      formData.append("images", banner.images);
    }
    await axiosApi.put(`/banner/banners/delete/${id}/`, formData);
  },
);
