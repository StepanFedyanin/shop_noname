import React, {useEffect, useState} from 'react'
import './BasketContent.scss'
import BasketProduct from "../BasketProduct/BasketProduct";
import {useDispatch, useSelector} from "react-redux";
import CatalogOffers from "../CatalogOffers/CatalogOffers ";
import BasketOrder from "../BasketOrder/BasketOrder";
import BasketModal from "../BasketModal/BasketModal";
import SubTitle from "../SubTitle/SubTitle";
import MassageError from "../MassageError/MassageError";

function BasketContent() {
    const dispatch = useDispatch();
    const basketList = useSelector(state => state.User.basketList);
    const userInfo = useSelector(state => state.User.userInfo);
    const [orderModal, setOrderModal] = useState(false);
    const [totalSum, setTotalSum] = useState(0);
    const [errorMassage, setErrorMassage] = useState({
        show: false,
        textMassage: ''
    })
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [order, setOrder] = useState({
        price: 0,
        name: ''
    });
    const [payment, setPayment] = useState('');


    useEffect(() => {
        setTotalSum(0);
        setTotalQuantity(0);
        basketList.map(product => {
            setTotalSum(state => state + (product.basket_quantity * product.product_price));
            setTotalQuantity(state => state + product.basket_quantity);
        })
    }, [basketList]);
    useEffect(() => {
        switch (userInfo.client_snipping_method) {
            case 1:
                setOrder({
                    price: 0,
                    name: "Почта"
                })
                break;
            case 2:
                setOrder({
                    price: 500,
                    name: "СДЭК"
                })
                break;
            case 3:
                setOrder({
                    price: 200,
                    name: "Постомат"
                })
                break;
        }
    }, [userInfo.client_snipping_method])
    useEffect(() => {
        switch (userInfo.client_payment_method) {
            case 1:
                setPayment('Наличными или картой при получении')
                break;
            case 2:
                setPayment('Онлайн оплата')
                break;
        }
    }, [userInfo.client_payment_method])
    return (
        <div className='BasketContent'>
            <div className='BasketContent__container'>
                <div className='BasketContent__header'>
                </div>
                <div className='BasketContent__content'>
                    <div className='BasketContent__content--list'>
                        {
                            basketList.length > 0 ?
                                basketList.map(product =>
                                    <BasketProduct
                                        key={product.basket_id}
                                        id={product.product_id}
                                        id_basket={product.basket_id}
                                        title={product.product_name}
                                        url={product.product_url}
                                        url_back={product.product_url_back}
                                        size={product.size_value}
                                        price={product.product_price}
                                        color={product.color_value}
                                        quantity={product.basket_quantity}
                                    />
                                ) :
                                < CatalogOffers text="Корзина пуста"/>

                        }
                    </div>
                    <div className='BasketContent__content--info'>
                        <BasketOrder
                            totalSum={totalSum}
                            setOrderModal={setOrderModal}
                            totalQuantity={totalQuantity}
                            setErrorMassage={setErrorMassage}
                            order={order}
                            userInfo={userInfo}
                        />
                    </div>
                </div>
            </div>
            <BasketModal
                totalSum={totalSum}
                order={order}
                payment={payment}
                basketList={basketList}
                userInfo={userInfo}
                orderModal={orderModal}
                setOrderModal={setOrderModal}
            />
            <MassageError
                errorMassage={errorMassage}
                setErrorMassage={setErrorMassage}
            />
        </div>
    )
}

export default BasketContent
