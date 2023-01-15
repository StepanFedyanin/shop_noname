import React from 'react'
import { Route, Routes } from "react-router-dom";
import KatalogPage from '../Pages/KatalogPage/KatalogPage';
import { RoutesList } from '../Routes/Route';
const AppRouter = () => {
	return (
		<Routes>
			{
				RoutesList.map((el) =>
					<Route path={el.path} element={el.element} key={el.path} />
				)
			}
			<Route path={"*"} element={<KatalogPage />} />
		</Routes>

	)
}

export default AppRouter