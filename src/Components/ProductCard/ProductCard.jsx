import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import MassageTail from '../MassageTail/MassageTail';
import './ProductCard.scss'
import ProductTransform from "../ProductTransform/ProductTransform";
import basketDelit from "../../Resurces/Img/basketDelit.svg";
import {deleteFavoritesProduct} from "../API/getUser";

function ProductCard({product_id, title, url, urt_hover, price, favorites = false, deleteCard = false, favorites_id}) {
    const filterShow = useSelector(state => state.Katalog.filter)
    const router = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className={favorites ? 'ProductCard favorites' : filterShow ? 'ProductCard' : 'ProductCard width'}
             onClick={() => router('/product/' + product_id)}>

            <div className="ProductCard__container">
                <MassageTail/>
                <ProductTransform url={url} urt_hover={urt_hover}/>
                <div className="ProductCard__description">
                    <div className="ProductCard__description--title">
                        <p className='ProductCard__title--style'>{title}</p>
                    </div>
                    <div
                        className={deleteCard ? "ProductCard__description--content delete" : "ProductCard__description--content"}>
                        {
                            deleteCard ?
                                <div onClick={(e) => e.stopPropagation()} className="ProductCard__delete">
                                    <button
                                        onClick={() => dispatch(() => dispatch(deleteFavoritesProduct(favorites_id)))}>
                                        <img src={basketDelit} alt="delete__item"/>
                                    </button>
                                </div>
                                : null
                        }
                        <div className="ProductCard__description--price" >
                            <p className='ProductCard__price--text'>{price + ' '} <span> ₽ </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
