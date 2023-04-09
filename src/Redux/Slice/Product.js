import {createSlice} from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState: {
        product_loading: false,
        product_content: {
            content: {},
            sizeList: []
        },

    },
    reducers: {
        changeProductLoad(state, action) {
            state.product_loading = action.payload
        },
        fillingProductContent(state, action) {
            state.product_content = action.payload
        }
    }
})

export default ProductSlice.reducer;

export const {
    fillingProductContent,
    changeProductLoad
} = ProductSlice.actions;
