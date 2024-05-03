import { createSlice } from '@reduxjs/toolkit'
// import { fetchCollection } from '../services/fetchCollection';
import { fetchRecomendation } from '@/entities/Collection/model/services/fetchRecomendation'
import { CollectionTypes } from '../types/collection.types'

interface CollectionState {
	recomendation: CollectionTypes[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}

const initialState: CollectionState = {
	recomendation: [],
	status: 'idle',
	error: null,
}

const recomendationSlice = createSlice({
	name: 'recomendation',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchRecomendation.pending, state => {
			state.status = 'loading'
		})
		builder.addCase(fetchRecomendation.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.recomendation = action.payload
		})
		builder.addCase(fetchRecomendation.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message ?? 'Unknown error'
		})
	},
})

export default recomendationSlice.reducer
