import {createSlice} from "@reduxjs/toolkit";
import FavoritesContent from "../../Components/FavoritesContent/FavoritesContent";

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: {
        authorized: localStorage.getItem('authorizedStorage') || false,
        userInfo: {},
        basketList: [],
        favoritesList: [],
        purchasesList: []
    },
    reducers: {
        changeAuthorized(state, action) {
            state.authorized = action.payload;
        },
        addUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        addBasketList(state, action) {
            state.basketList = action.payload;
        },
        addFavoritesList(state, action) {
            state.favoritesList = action.payload;
        },
        addPurchasesList(state, action) {
            state.purchasesList = action.payload;
        }

    }
})
export default UserSlice.reducer;
export const {
    changeAuthorized,
    addUserInfo,
    addBasketList,
    addFavoritesList,
    addPurchasesList
} = UserSlice.actions;
