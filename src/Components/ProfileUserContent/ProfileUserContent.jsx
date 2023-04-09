import React, {useEffect, useState} from 'react';
import './ProfileUserContent.scss'
import ProfileUserBlock from "../ProfileUserBlock/ProfileUserBlock";
import cardPayment from '../../Resurces/Img/cardPayment.svg'
import delitPhoto from '../../Resurces/Img/cardDelit1.png';
import delitPhoto2 from '../../Resurces/Img/cardDelit2.png';
import truck_delivery from '../../Resurces/Img/truck-delivery.svg'
import ProfileProductCircle from "../ProfileProductCircle/ProfileProductCircle";
import ModalContainer from "../ModalContainer/ModalContainer";
import ProfileModal from "../ProfileModal/ProfileModal";
import DeliveryModal from "../DeliveryModal/DeliveryModal";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Purchases, userExit} from "../API/getUser";
import ExitConfirmation from "../ExitConfirmation/ExitConfirmation";

function ProfileUserContent(props) {
    const userInfo = useSelector(state => state.User.userInfo);
    const purchases_list = useSelector(state => state.User.purchasesList);
    const [choiceModal, setChoiceModal] = useState(null)
    const favorites_list = useSelector(state => state.User.favoritesList)
    const router = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Purchases())
    }, [])
    const openModal = (value) => {
        setChoiceModal(value);
    }
    const changePage = (value) => {
        router(value)
    }
    const exit = (bollExit = false) => {
        setChoiceModal("exit")
        if (bollExit) {
            dispatch(userExit())
        }
    }
    return (
        <div className="ProfileUserContent">
            <div className="ProfileUserContent__container">
                <ProfileUserBlock clickValue="profile" clickFun={openModal} width="half" subtitle="Профиль">
                    <div className="ProfileUserBlock__profile">
                        <div className="ProfileUserBlock__profile--header">
                            <div className="ProfileUserBlock__header--image">
                                <img src={delitPhoto} alt="cover"/>
                            </div>
                            <div className="ProfileUserBlock__header--name">
                                <p className="ProfileUserBlock__header--text">{userInfo.client_name}</p>
                            </div>
                        </div>
                        <div className="ProfileUserBlock__profile--content">
                            <div className="ProfileUserBlock__content--block">
                                <div className="ProfileUserBlock__content--meaning">
                                    <div className="ProfileUserBlock__meaning--subtitle">
                                        <p className="ProfileUserBlock__subtitle--style">Почта:</p>
                                    </div>
                                    <div className="ProfileUserBlock__meaning--text">
                                        <p className="ProfileUserBlock__meaning--style">{userInfo.client_mail}</p>
                                    </div>
                                </div>
                                <div className="ProfileUserBlock__content--meaning">
                                    <div className="ProfileUserBlock__meaning--subtitle">
                                        <p className="ProfileUserBlock__subtitle--style">Телефон:</p>
                                    </div>
                                    <div className="ProfileUserBlock__meaning--text">
                                        <p className="ProfileUserBlock__meaning--style">{userInfo.client_phone}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ProfileUserBlock__content--block" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => exit()}
                                        className="ProfileUserBlock__content--exit">Выход
                                </button>
                            </div>
                        </div>
                    </div>
                </ProfileUserBlock>
                <ProfileUserBlock clickValue="delivery" clickFun={openModal} width="half" subtitle="Доставка">
                    <div className="ProfileUserBlock__profile">
                        <div className="ProfileUserBlock__profile--header">
                            <div className="ProfileUserBlock__header--image">
                                <img src={truck_delivery} alt="delivery"/>
                            </div>
                            <div className="ProfileUserBlock__header--name">
                                <p className="ProfileUserBlock__header--text">Доставка не ожидается</p>
                            </div>
                        </div>
                        <div className="ProfileUserBlock__profile--content">
                            <div className="ProfileUserBlock__content--block">
                                <div className="ProfileUserBlock__content--meaning">
                                    <div className="ProfileUserBlock__meaning--subtitle">
                                        <p className="ProfileUserBlock__subtitle--style">Адрес:</p>
                                    </div>
                                    <div className="ProfileUserBlock__meaning--text">
                                        <p className="ProfileUserBlock__meaning--style">г. {userInfo.client_region} ул.
                                            {userInfo.client_street}
                                            д.{userInfo.client_appartment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </ProfileUserBlock>
                <ProfileUserBlock navclick={true} clickValue="/purchases" clickFun={changePage} subtitle="Покупки">
                    <div className="ProfileUserBlock__length">
                        <ProfileProductCircle arrayCoverLength={purchases_list}
                                              arrayCover={purchases_list.slice(0, 8)}/>
                        <div className="ProfileUserBlock__length--meaning">
                            <p className="ProfileUserBlock__length--style">Всего
                                товаров <span>{purchases_list.length}</span>
                            </p>
                        </div>
                    </div>
                </ProfileUserBlock>
                <ProfileUserBlock navclick={true} clickValue="/favorites" clickFun={changePage} subtitle="Избранное">
                    <div className="ProfileUserBlock__length">
                        <ProfileProductCircle arrayCoverLength={favorites_list}
                                              arrayCover={favorites_list.slice(0, 8)}/>
                        <div className="ProfileUserBlock__length--meaning">
                            <p className="ProfileUserBlock__length--style">Доступно к
                                заказу <span>{favorites_list.length}</span>
                            </p>
                        </div>
                    </div>
                </ProfileUserBlock>
            </div>
            <ProfileModal profileInfo={userInfo} closeModal={openModal} modalBool={choiceModal === "profile"}/>
            <DeliveryModal profileInfo={userInfo} closeModal={openModal} modalBool={choiceModal === "delivery"}/>
            <ExitConfirmation exit={exit} closeModal={openModal} modalBool={choiceModal === "exit"}/>
        </div>
    );
}

export default ProfileUserContent;
