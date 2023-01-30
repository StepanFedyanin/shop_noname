import React from "react";
import KatalogPage from "../Pages/KatalogPage/KatalogPage";
import ProductPage from "../Pages/ProductPage/ProductPage";
export const RoutesList = [
	{ path: '/katalog', element: <KatalogPage /> },
	{ path: '/product/:id', element: <ProductPage /> },
]