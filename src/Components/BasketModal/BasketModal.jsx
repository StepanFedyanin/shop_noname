import React, {useState} from 'react';
import ModalContainer from "../ModalContainer/ModalContainer";
import './BasketModal.scss';
import Button from "../UI/Button/Button";
import {useDispatch} from "react-redux";
import {addPurchases} from "../API/getUser";

const BasketModal = ({payment, order, totalSum, basketList, userInfo, orderModal, setOrderModal}) => {
    const dispatch = useDispatch();
    return (
        <ModalContainer title="Оформление заказа" closeModal={setOrderModal} modalBool={orderModal}>
            <div className="BasketModal">
                <div className="BasketModal__content">
                    {
                        basketList.map(product =>
                            <div key={product.product_id + '' + product.product_name} className="BasketModal__product">
                                <div className="BasketModal__product--info">
                                    <div className="BasketModal__info">
                                        <p className="BasketModal__info--name">{product.product_name}
                                            <span>&#x2717;{product.basket_quantity}</span></p>
                                    </div>
                                    <div className="BasketModal__info">
                                        <p className="BasketModal__info--size">{product.size_value}</p>
                                    </div>
                                </div>
                                <div className="BasketModal__info">
                                    <p className="BasketModal__info--price">{product.product_price}<span>₽</span></p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="BasketModal__order">
                    <div className="BasketModal__order--address">
                        <div className="BasketModal__address--item">
                            <p className="BasketModal__address--text"><span>обл.</span> {userInfo.client_region}
                                <span>г.</span> {userInfo.client_city}
                            </p>
                        </div>
                        <div className="BasketModal__address--item">
                            <p className="BasketModal__address--text">
                                <span>ул.</span> {userInfo.client_street} <span>д.</span> {userInfo.client_house}
                                <span>кв.</span> {userInfo.client_appartment} </p>
                        </div>
                        <div className="BasketModal__address--item">
                            <p className="BasketModal__address--text"><span>индекс</span> 123123</p>
                        </div>
                    </div>
                    <div className="BasketModal__order--method">
                        <div className="BasketModal__method--payment">
                            <div className="BasketModal__payment--item">
                                <p className="BasketModal__method--subtitle">Способ оплаты: </p>
                            </div>
                            <div className="BasketModal__payment--item">
                                <p className="BasketModal__method--payment">{payment}</p>
                            </div>
                        </div>
                        <div className="BasketModal__method--price">
                            <div className="BasketModal__method--items">
                                <div className="BasketModal__method--item">
                                    <p className="BasketModal__item--text">Продукты {totalSum} <span>₽</span></p>
                                </div>
                                <div className="BasketModal__method--item">
                                    <p className="BasketModal__item--text">Цена доставки ({order.name}) {order.price}
                                        <span>₽</span></p>
                                </div>
                            </div>
                            <div className="BasketModal__method--total">
                                <div>
                                    <p className="BasketModal__item--text">Итог: {order.price + totalSum} <span>₽</span>
                                    </p>
                                </div>
                                <div>
                                    <Button fun={() => dispatch(addPurchases(basketList))}>Оформить</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalContainer>

    );
};

export default BasketModal;
