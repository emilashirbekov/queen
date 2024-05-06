import { BASE_URL } from '@/app/constants/contants'
import { RootState } from '@/app/providers/StoreProvider/config/store'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { axiosApi } from '@/app/providers/http/axiosApi'
import { ListResponse } from '@/app/types/types'
import { RecomendationApi } from '../slice/recomendationSlice'

export const fetchRecomendation = createAsyncThunk<
	ListResponse<RecomendationApi>[],
	void,
	{ state: RootState }
>('products/fetchRecomendation', async () => {
	const response = await axios.get(
		`${BASE_URL}/collection/list/recommendation/`
	)
	return response.data.results
})

export const addRecomendation = createAsyncThunk<void, number[]>(
	'collection/createListCollection',
	async product => {
		await axiosApi.post('/collection/create/recommendation/', {
			product,
		})
	}
)

interface UpdateRecomendation {
	id: number
	product: number[]
}

export const updateRecomendation = createAsyncThunk<void, UpdateRecomendation>(
	'recomendation/updateListRecomendation',
	async ({ id, product }) => {
		await axiosApi.put(`/collection/rud/recommendation/${id}/`, {
			product: product,
		})
	}
)
