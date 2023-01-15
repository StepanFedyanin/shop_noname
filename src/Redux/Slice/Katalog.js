import { createSlice } from "@reduxjs/toolkit";

const KatalogSlice = createSlice({
	name: 'KatalogSlice',
	initialState: {
		type_list: true,
		filter: false
	},
	reducers: {
		changeTypeList(state, action) {
			state.type_list = action.payload
		},
		changeFilter(state, action) {
			state.filter = action.payload
		}
	}
})

export default KatalogSlice.reducer;

export const {
	changeTypeList,
	changeFilter,
} = KatalogSlice.actions;