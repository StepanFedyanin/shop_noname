import React from "react";
import KatalogPage from "../Pages/KatalogPage/KatalogPage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import ProfileUserPage from "../Pages/ProfileUserPage/ProfileUserPage";
import BasketPage from "../Pages/BasketPage/BasketPage";
import FavoritesPage from "../Pages/FavoritesPage/FavoritesPage";
import PurchasesPages from "../Pages/PurchasesPages/PurchasesPages";
import CoverPages from "../Pages/CoverPages/CoverPages";

export const RoutesList = [
    {path: '/catalog', element: <KatalogPage/>},
    {path: '/product/:id', element: <ProductPage/>},
    {path: '/profile/:user_id', element: <ProfileUserPage/>},
    {path: '/basket', element: <BasketPage/>},
    {path: '/favorites', element: <FavoritesPage/>},
    {path: '/purchases', element: <PurchasesPages/>},
    {path: '/purchases/:id', element: <ProductPage/>},
]

export const RoutesListUnauthorized = [
    {path: '/catalog', element: <KatalogPage/>},
    {path: '/product/:id', element: <ProductPage/>},
    {path: '/input', element: <CoverPages/>},
]


