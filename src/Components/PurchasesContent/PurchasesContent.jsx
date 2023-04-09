import React, {useEffect} from 'react';
import './PurchasesContent.scss'
import PurchasesList from "../PurchasesList/PurchasesList";
import {useDispatch, useSelector} from "react-redux";
import {Purchases} from "../API/getUser";
import CatalogOffers from "../CatalogOffers/CatalogOffers ";
import SubTitle from "../SubTitle/SubTitle";

const PurchasesContent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Purchases())
    }, [])
    const purchases_list = useSelector(state => state.User.purchasesList);
    return (
        <div className="PurchasesContent">
            <SubTitle>Покупки</SubTitle>
            <div className="PurchasesContent__container">
                <div className="PurchasesContent__list">
                    {
                        purchases_list.length > 0 ?
                            <PurchasesList productList={purchases_list}/>
                            :
                            <CatalogOffers text="Покупок ещё нет"/>
                    }
                </div>
            </div>
        </div>
    );
};

export default PurchasesContent;
