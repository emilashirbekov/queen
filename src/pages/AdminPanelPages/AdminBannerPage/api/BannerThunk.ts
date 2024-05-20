import { createAsyncThunk } from "@reduxjs/toolkit";
import { Banner, BannerApi } from "../model/types/types";
import { axiosApi } from "@/app/providers/http/axiosApi";
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

interface Banners {
  results: {
    topik_baner: Banner[];
  }[];
}

export const getBanners = createAsyncThunk<Banner[]>(
  "admin/getBanners",
  async () => {
    const response = await axiosApi.get<Banners>(`/banner/banners/`);
    return response.data.results[0].topik_baner;
  },
);

export const getSingleBanner = createAsyncThunk<BannerApi, string>(
  "admin/getBanner",
  async (id) => {
    const response = await axiosApi.get<BannerApi>(
      `/banner/topik/banners/rud/${id}/`,
    );
    return response.data;
  },
);

interface BannerUpdate {
  banner: BannerMutation;
  id: string;
}

export const updateBanner = createAsyncThunk<void, BannerUpdate>(
  "admin/updateBanner",
  async ({ banner, id }) => {
    const formData = new FormData();
    formData.append("name", banner.name);
    if (banner.images) {
      formData.append("images", banner.images);
    }
    await axiosApi.patch(`/banner/topik/banners/rud/${id}/`, formData);
  },
);
