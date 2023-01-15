import { combineReducers, configureStore } from "@reduxjs/toolkit"
import Katalog from "./Slice/Katalog"
const rootReducer = combineReducers({
	Katalog: Katalog
})

export const store = configureStore({
	reducer: rootReducer
})