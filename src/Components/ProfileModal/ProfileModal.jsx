import React, {useState} from 'react';
import ModalContainer from "../ModalContainer/ModalContainer";
import './ProfileModal.scss'
import close_modal from '../../Resurces/Img/close_modal.svg';
import InputText from "../UI/InputText/InputText";
import delitPhoto from '../../Resurces/Img/cardDelit1.png';
import editIcon from '../../Resurces/Img/editIcon.svg';
import verification_icon from '../../Resurces/Img/verification__icon.svg'
import {useDispatch} from "react-redux";
import {UserUpdateProfil} from "../API/getUser";

function ProfileModal({closeModal, modalBool, profileInfo}) {
    return (
        <ModalContainer title="Профиль" closeModal={closeModal} modalBool={modalBool}>
            <div className="ProfileModal">
                <div className="ProfileModal__content">
                    <div className="ProfileModal__user">
                        <div className="ProfileModal__user--cover">
                            <img src={delitPhoto} alt="cover_user"/>
                        </div>
                        <div className="ProfileModal__user--info">
                            <InputText valueInput={profileInfo.client_name}/>
                            <InputText valueInput={profileInfo.client_surname}/>
                            <InputText valueInput={profileInfo.client_patronymic}/>
                        </div>
                    </div>
                    <div className="ProfileModal__data">
                        <div className="ProfileModal__data--items">
                            <div className="ProfileModal__data--item">
                                <div className="ProfileModal__data--subtitle">
                                    <p className="ProfileModal__subtitle--style">Номер телефона: </p>
                                </div>
                                <InputText valueInput={profileInfo.client_phone}/>
                            </div>
                            <div className="ProfileModal__data--item">
                                <div className="ProfileModal__data--subtitle">
                                    <p className="ProfileModal__subtitle--style">Почта: </p>
                                </div>
                                <InputText valueInput={profileInfo.client_mail}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalContainer>
    );
}

export default ProfileModal;

