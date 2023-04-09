import React, {useCallback, useEffect, useState} from 'react';
import Button from "../UI/Button/Button";
import './BasketOrder.scss'
import {useDispatch} from "react-redux";
import {addPurchases} from "../API/getUser";

function BasketOrder({userInfo, totalSum, totalQuantity, order, setOrderModal, setErrorMassage}) {
    const openModal = () => {
        if (totalQuantity > 0 && userInfo.client_region&&userInfo.client_city&&userInfo.client_street&&userInfo.client_appartment&&userInfo.client_house&&userInfo.client_index) {
            setOrderModal(true)
        } else if (totalQuantity == 0){
            setErrorMassage({
                show: true,
                textMassage: 'Корзина пустая'
            })
        }else {
            setErrorMassage({
                show: true,
                textMassage: 'Проверите данные в профиле'
            })
        }
    }
    const dispatch = useDispatch();
    return (
        <div className='BasketOrder'>
            <div className="BasketOrder--block">
                <div className="BasketOrder__title">
                    <h2 className="BasketOrder__title--style">Ваш заказ</h2>
                </div>
                <div className="BasketOrder__params">
                    <div className="BasketOrder__params--subtitle">
                        <p className="BasketOrder__subtitle--style">Продукты <span>({totalQuantity})</span></p>
                    </div>
                    <div className="BasketOrder__params--price">
                        <p className="BasketOrder__params--style">{totalSum} <span>₽</span></p>
                    </div>
                </div>
                <div className="BasketOrder__params">
                    <div className="BasketOrder__params--subtitle">
                        <p className="BasketOrder__subtitle--style">Доставка <span>({order.name})</span></p>
                    </div>
                    <div className="BasketOrder__params--price">
                        <p className="BasketOrder__params--style">{order.price} <span>₽</span></p>
                    </div>
                </div>
            </div>
            <div className="BasketOrder--block">
                <div className="BasketOrder__params">
                    <div className="BasketOrder__params--subtitle">
                        <p className="BasketOrder__subtitle--style">Итог</p>
                    </div>
                    <div className="BasketOrder__params--price">
                        <p className="BasketOrder__params--style">{totalSum + order.price}<span>₽</span></p>
                    </div>
                </div>
                <div className="BasketOrder__info--btn">
                    <Button fun={() => openModal()}>Оформить заказ</Button>
                </div>
            </div>
        </div>

    );
}

export default BasketOrder;
