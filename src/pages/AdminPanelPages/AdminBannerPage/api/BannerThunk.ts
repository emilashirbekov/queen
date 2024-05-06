import { createAsyncThunk } from "@reduxjs/toolkit";
import { Banner } from "../model/types/types";
import { axiosApi } from "@/app/providers/http/axiosApi";
import { ListResponse } from "@/app/types/types";

export const postBanner = createAsyncThunk<void, Banner>('admin/postBanner', async (data) => {
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("images", data.images)
    await axiosApi.post("/banner/banners/create/", formData);
})

export const getBanner = createAsyncThunk<Banner[]>('admin/getBanner', async (id) => {
    const response = await axiosApi.get<ListResponse<Banner>>(`/banner/banners/${id}/`)
    return response.data.results;
})