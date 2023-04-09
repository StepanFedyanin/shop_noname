import React from 'react';
import './CatalogOffers.scss'
import Button from "../UI/Button/Button";
import {useNavigate} from "react-router-dom";
const CatalogOffers = ({text}) => {
    const router = useNavigate();
    return (
        <div className='CatalogOffers'>
            <div className="CatalogOffers__subtitle">
                <p className="CatalogOffers__subtitle--style">{text}</p>
            </div>
            <div className="CatalogOffers__return">
                <Button fun={()=>router('/katalog')}>Вернуться к катологу</Button>
            </div>
        </div>
    );
};

export default CatalogOffers;
