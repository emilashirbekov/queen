import { createSlice } from "@reduxjs/toolkit";
import { Banner, BannerApi } from "../types/types";
import { getBanners, getSingleBanner } from "../../api/BannerThunk";
import { RootState } from "@/app/providers/StoreProvider/config/store";

interface BannerState {
  banners: Banner[];
  banner: BannerApi | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: BannerState = {
  banners: [],
  banner: null,
  isLoading: false,
  isError: false,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBanners.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getBanners.fulfilled, (state, { payload: banners }) => {
      state.isLoading = false;
      state.banners = banners;
    });
    builder.addCase(getBanners.rejected, (state) => {
      state.isError = false;
    });
    builder.addCase(getSingleBanner.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getSingleBanner.fulfilled, (state, { payload: banner }) => {
      state.isLoading = false;
      state.banner = banner;
    });
    builder.addCase(getSingleBanner.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const bannerReducer = bannerSlice.reducer;
export const selectBannerAdmin = (state: RootState) => state.banner.banner;
export const selectBannerAdminLoading = (state: RootState) =>
  state.banner.isLoading;
export const selectBannersAdmin = (state: RootState) => state.banner.banners;
