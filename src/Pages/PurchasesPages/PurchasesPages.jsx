import React from 'react';
import './PurchasesPages.scss';
import Header from "../../Components/Header/Header";
import PurchasesContent from "../../Components/PurchasesContent/PurchasesContent";
const PurchasesPages = () => {
    return (
        <div>
            <Header />
            <PurchasesContent/>
        </div>
    );
};

export default PurchasesPages;
