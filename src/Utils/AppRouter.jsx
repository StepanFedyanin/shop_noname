import React from 'react'
import { Route, Routes } from "react-router-dom";
import KatalogPage from '../Pages/KatalogPage/KatalogPage';
import {RoutesList, RoutesListUnauthorized} from '../Routes/Route';
import {useSelector} from "react-redux";
import CoverPages from "../Pages/CoverPages/CoverPages";
const AppRouter = () => {
	const userAuthorized = useSelector(state => state.User.authorized)
	return (
		<Routes>
			{
				userAuthorized?
				RoutesList.map((el) =>
					<Route path={el.path} element={el.element} key={el.path} />
				):
				RoutesListUnauthorized.map((el) =>
					<Route path={el.path} element={el.element} key={el.path} />
				)
			}
			{
				userAuthorized?
					<Route path={"*"} element={<KatalogPage />} />
					:
					<Route path={"*"} element={<CoverPages />} />
			}
		</Routes>

	)
}

export default AppRouter
