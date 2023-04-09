import React, {useEffect} from 'react';
import './FavoritesContent.scss'
import {useDispatch, useSelector} from "react-redux";
import {Katalog} from "../API/getKatalog";
import {favorites} from "../API/getUser";
import ProductCard from "../ProductCard/ProductCard";
import FavoritesList from "../FavoritesList/FavoritesList";
import CatalogOffers from "../CatalogOffers/CatalogOffers ";
import SubTitle from "../SubTitle/SubTitle";

function FavoritesContent(props) {
    const dispatch = useDispatch();
    const favorites_list = useSelector(state => state.User.favoritesList);
    return (
        <div className="FavoritesContent">
            <SubTitle>Избранное</SubTitle>
            <div className="FavoritesContent__container">
                {
                    favorites_list.length>0 ?
                        <FavoritesList productList={favorites_list}/> :
                        <CatalogOffers text="Избранное пустое"/>
                }
            </div>
        </div>
    );
}

export default FavoritesContent;
