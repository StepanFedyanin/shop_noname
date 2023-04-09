
import React from 'react'
import './BasketPage.scss'
import Header from "../../Components/Header/Header";
import BasketContent from "../../Components/BasketContent/BasketContent";

function BasketPage() {
    return (
        <div className='CoverPage'>
            <Header />
            <BasketContent/>
        </div>
    )
}
export default BasketPage