import { combineReducers, configureStore } from "@reduxjs/toolkit"
import Katalog from "./Slice/Katalog"
import Product from "./Slice/Product"
import User from "./Slice/User";
const rootReducer = combineReducers({
	Katalog: Katalog,
	Product: Product,
	User:User
})

export const store = configureStore({
	reducer: rootReducer
})
