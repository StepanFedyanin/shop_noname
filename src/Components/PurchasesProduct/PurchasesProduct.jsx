import React, {useState} from 'react';
import delitImage from '../../Resurces/Img/delitThem2.jpg'
import delitImage2 from '../../Resurces/Img/delitThem3.jpg'
import './PurchasesProduct.scss'
import ReviewsList from "../ReviewsList/ReviewsList";
import clock_check from '../../Resurces/Img/clock_check.svg'
import arrows_line from '../../Resurces/Img/arrows_line.svg'
import user_received from '../../Resurces/Img/user_received.svg'
import fact_check from '../../Resurces/Img/fact_check.svg'
import canceled_circle from '../../Resurces/Img/canceled_circle.svg'
import {useNavigate} from "react-router-dom";

const Status = ({value}) => {
    switch (value) {
        case "1":
            return (
                <div className="Status">
                    <div className="Status__image">
                        <img src={clock_check} alt="status"/>
                    </div>
                    <div className="Status__text">
                        <p className="Status__text--style">
                            Ожидание авторизации
                        </p>
                    </div>
                </div>
            )
        case "2":
            return (
                <div className="Status">
                    <div className="Status__image">
                        <img src={arrows_line} alt="status"/>
                    </div>
                    <div className="Status__text">
                        <p className="Status__text--style">
                            В пути
                        </p>
                    </div>
                </div>
            )
        case "3":
            return (
                <div className="Status">
                    <div className="Status__image">
                        <img src={user_received} alt="status"/>
                    </div>
                    <div className="Status__text">
                        <p className="Status__text--style">
                            Ждет получения
                        </p>
                    </div>
                </div>
            )
        case "4":
            return (
                <div className="Status">
                    <div className="Status__image">
                        <img src={fact_check} alt="status"/>
                    </div>
                    <div className="Status__text">
                        <p className="Status__text--style">
                            Получен
                        </p>
                    </div>
                </div>
            )
        case "5":
            return (
                <div className="Status">
                    <div className="Status__image">
                        <img src={canceled_circle} alt="status"/>
                    </div>
                    <div className="Status__text">
                        <p className="Status__text--style">
                            Отменен
                        </p>
                    </div>
                </div>
            )
    }
}
const PurchasesProduct = ({ id, name, url, url_back, price, Purchases_stast, Purchases_end, Purchases_status, size_value}) => {
    const router = useNavigate()
    const [rowChange, setRowChange] = useState(true);
    return (
        <tr className="PurchasesProduct" onClick={() => router('/purchases/'+id)}>
            <td className="PurchasesProduct__product">
                <div className="PurchasesProduct__product--container"
                     onMouseOut={() => setRowChange(true)}
                     onMouseOver={() => setRowChange(false)}
                >
                    <div
                        className={rowChange ? "PurchasesProduct__product--cover" : "PurchasesProduct__product--cover transform"}>
                        <div className="">
                            <img src={url} alt="product"/>
                        </div>
                        <div className="">
                            <img src={url_back} alt="product"/>
                        </div>
                    </div>
                </div>
            </td>
            <td className="PurchasesProduct__td">
                <p className="PurchasesProduct__td--text">
                    {name}
                </p>
            </td>
            <td className="PurchasesProduct__td">
                <p className="PurchasesProduct__td--text">
                    {price}
                    <span> ₽</span>
                </p>
            </td>
            <td className="PurchasesProduct__td">
                <p className="PurchasesProduct__td--text" >{size_value}</p>
            </td>
            <td className="PurchasesProduct__td">
                <p className="PurchasesProduct__td--text">
                    {new Date(Purchases_stast).getFullYear() + '-' + new Date(Purchases_stast).getMonth() + '-' + new Date(Purchases_stast).getDay() + ' ' + new Date(Purchases_stast).getHours() + ':' + new Date(Purchases_stast).getMinutes()}
                </p>
            </td>
            <td className="PurchasesProduct__td">
                <p className="PurchasesProduct__td--text">
                    {Purchases_end ? Purchases_end : ""}
                </p>
            </td>
            <td>
                <Status value={Purchases_status}/>
            </td>
        </tr>
    );
};

export default PurchasesProduct;
