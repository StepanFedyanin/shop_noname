import React from 'react'
import './BasketProduct.scss'
import ProductTransform from "../ProductTransform/ProductTransform";
import delitThem2 from '../../Resurces/Img//cardDelit1.png'
import delitThem3 from '../../Resurces/Img//cardDelit2.png'
import InputNumber from "../UI/InputNumber/InputNumber";
import basketDelit from "../../Resurces/Img/basketDelit.svg"
import ColorInput from "../UI/ColorInput/ColorInput";
import {deleteBasketProduct, deleteBsketProduct} from "../API/getUser";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function BasketProduct({id, id_basket, title, url, url_back, size, price, color, quantity}) {
    const dispatch = useDispatch();
    const router = useNavigate();
    return (
        <div className='BasketProduct' onClick={() => router('/product/' + id)}>
            <div className='BasketProduct__description'>
                <div className='BasketProduct__cover'>
                    <ProductTransform url={url} urt_hover={url_back}/>
                </div>
                <div className='BasketProduct__info'>
                    <div className='BasketProduct__info--title'>
                        <h3 className='BasketProduct__title--style'>{title}</h3>
                    </div>
                    <div className='BasketProduct__info--options'>
                        <div className='BasketProduct__options'>
                            <div className='BasketProduct__options--subtitle'>
                                <p className='BasketProduct__subtitle--style'>
                                    Размер:
                                </p>
                            </div>
                            <div className='BasketProduct__options--meaning'>
                                <p className='BasketProduct__meaning--style'>
                                    {size}
                                </p>
                            </div>
                        </div>
                        <div className='BasketProduct__options'>
                            <div className='BasketProduct__options--subtitle'>
                                <p className='BasketProduct__subtitle--style'>
                                    Цвет:
                                </p>
                            </div>
                            <div className='BasketProduct__options--meaning'>
                                <ColorInput color={color} fun={null}/>
                            </div>
                        </div>
                    </div>
                    <div className='BasketProduct__info--quantity' onClick={(e) => e.stopPropagation()}>
                        <InputNumber id_basket={id_basket} startValue={quantity}/>
                    </div>
                    <div className='BasketProduct__info--price'>
                        <p className="BasketProduct__price--style">{price} <span>₽</span></p>
                    </div>
                </div>
            </div>
            <div className='BasketProduct__delight'>
                <button className="BasketProduct__delight--btn" onClick={(e) => {
                    e.stopPropagation();
                    dispatch(deleteBasketProduct(id_basket));
                }}>
                    <img src={basketDelit} alt="delete__item"/>
                </button>
            </div>
        </div>
    )
}

export default BasketProduct
