import { createSlice } from "@reduxjs/toolkit";
import { Banner } from "../types/types"
import { getBanner } from "../../api/BannerThunk";
import { RootState } from "@/app/providers/StoreProvider/config/store";

interface BannerState {
    banner: Banner[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: BannerState = {
    banner: [],
    isLoading: false,
    isError: false
};

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBanner.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(getBanner.fulfilled, (state, action) => {
            state.isLoading = false;
            state.banner = action.payload;
        })
        builder.addCase(getBanner.rejected, (state) => {
            state.isError = true;
        })
    }
})

export const bannerReducer = bannerSlice.reducer;
export const selectBannerAdmin = (state: RootState) => state.banner.banner;
export const selectBannerAdminLoading = (state: RootState) => state.banner.isLoading;