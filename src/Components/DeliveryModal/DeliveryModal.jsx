import React, {useEffect, useState} from 'react';
import './DeliveryModal.scss'
import ModalContainer from "../ModalContainer/ModalContainer";
import InputText from "../UI/InputText/InputText";
import InputRadio from "../UI/InputRadio/InputRadio";
import editIcon from "../../Resurces/Img/editIcon.svg";
import verification_icon from "../../Resurces/Img/verification__icon.svg";
import {UserUpdateAddress, UserUpdateProfil} from "../API/getUser";
import {useDispatch} from "react-redux";

const DeliveryModal = ({profileInfo, closeModal, modalBool}) => {
    const dispatch = useDispatch();
    const [editInfo, setEditInfo] = useState(true);
    const [profileInfoValue, setProfileInfoValue] = useState({
        client_region: profileInfo.client_region,
        client_city: profileInfo.client_city,
        client_street: profileInfo.client_street,
        client_house: profileInfo.client_house,
        client_appartment: profileInfo.client_appartment,
        client_index: profileInfo.client_index,
        client_snipping_method: profileInfo.client_snipping_method,
        client_payment_method: profileInfo.client_payment_method
    });
    useEffect(() => {
        if (!profileInfoValue.client_payment_method) {
            setProfileInfoValue({...profileInfoValue, client_payment_method: 1})
        }
        if (!profileInfoValue.client_snipping_method) {
            setProfileInfoValue({...profileInfoValue, client_snipping_method: 1})
        }
    }, [modalBool])


    const updateProdil = () => {
        if (profileInfoValue.client_region.trim() !== "" && profileInfoValue.client_city.trim() != "" && profileInfoValue.client_street.trim() != "" && profileInfoValue.client_house && profileInfoValue.client_appartment && profileInfoValue.client_index) {
            dispatch(UserUpdateAddress(
                profileInfoValue.client_region,
                profileInfoValue.client_city,
                profileInfoValue.client_street,
                profileInfoValue.client_house,
                profileInfoValue.client_appartment,
                profileInfoValue.client_index,
                profileInfoValue.client_snipping_method,
                profileInfoValue.client_payment_method
            ))
        }
        setEditInfo(true)
    }
    return (
        <ModalContainer title="Доставка" closeModal={closeModal} modalBool={modalBool}>
            <div className="DeliveryModal">
                <div className="DeliveryModal__address">
                    <div className="DeliveryModal__title">
                        <h2 className="DeliveryModal__title--style">Место доставки</h2>
                    </div>
                    <div className="DeliveryModal__address--info">
                        <div className="DeliveryModal__address--city">
                            <InputText disabledBool={editInfo}
                                       valueInput={profileInfoValue.client_region}
                                       valueInputNull='Область'
                                       keyValue='client_region' value={profileInfoValue}
                                       setValue={setProfileInfoValue}/>
                            <InputText disabledBool={editInfo}
                                       valueInput={profileInfoValue.client_city}
                                       valueInputNull='Город'
                                       keyValue='client_city' value={profileInfoValue}
                                       setValue={setProfileInfoValue}/>
                        </div>
                        <div className="DeliveryModal__address--value">
                            <InputText disabledBool={editInfo}
                                       valueInput={profileInfoValue.client_street}
                                       valueInputNull='Улица'
                                       keyValue='client_street' value={profileInfoValue}
                                       setValue={setProfileInfoValue}/>
                            <InputText disabledBool={editInfo}
                                       valueInput={profileInfoValue.client_house}
                                       valueInputNull='Дом'
                                       keyValue='client_house' value={profileInfoValue}
                                       setValue={setProfileInfoValue}/>
                            <InputText disabledBool={editInfo}
                                       valueInput={profileInfoValue.client_appartment}
                                       valueInputNull='Квартира'
                                       keyValue='client_appartment' value={profileInfoValue}
                                       setValue={setProfileInfoValue}/>
                            <InputText disabledBool={editInfo}
                                       valueInput={profileInfoValue.client_index}
                                       valueInputNull='Индекс'
                                       keyValue='client_index' value={profileInfoValue}
                                       setValue={setProfileInfoValue}/>
                        </div>
                    </div>
                </div>
                <div className="DeliveryModal__method">
                    <div className="DeliveryModal__title">
                        <h2 className="DeliveryModal__title--style">Метод доставки</h2>
                    </div>
                    <div className="DeliveryModal__choice">
                        <InputRadio checked={profileInfoValue.client_snipping_method == 1}
                                    stateValue={profileInfoValue}
                                    setValue={setProfileInfoValue}
                                    valueChange={1}
                                    keyValue='client_snipping_method'
                                    disabled={editInfo}
                                    value="Почта"
                                    connection="post" group="method"/>
                        <InputRadio checked={profileInfoValue.client_snipping_method == 2}
                                    stateValue={profileInfoValue}
                                    setValue={setProfileInfoValue}
                                    valueChange={2}
                                    keyValue='client_snipping_method'
                                    disabled={editInfo}
                                    value="СДЭК"
                                    connection="sdek" group="method"/>
                        <InputRadio checked={profileInfoValue.client_snipping_method == 3}
                                    stateValue={profileInfoValue}
                                    setValue={setProfileInfoValue}
                                    valueChange={3}
                                    keyValue='client_snipping_method'
                                    disabled={editInfo}
                                    value="Постомат"
                                    connection="postomat" group="method"/>
                    </div>
                </div>
                <div className="DeliveryModal__payment">
                    <div className="DeliveryModal__title">
                        <h2 className="DeliveryModal__title--style">Способ оплаты</h2>
                    </div>
                    <div className="DeliveryModal__choice params">
                        <div className="DeliveryModal__choice--params">

                            <InputRadio checked={profileInfoValue.client_payment_method == 1}
                                        stateValue={profileInfoValue}
                                        setValue={setProfileInfoValue}
                                        valueChange={1}
                                        keyValue='client_payment_method'
                                        disabled={editInfo}
                                        value="Наличными или картой при получении"
                                        connection="offline" group="payment"/>
                            <InputRadio checked={profileInfoValue.client_payment_method == 2}
                                        stateValue={profileInfoValue}
                                        setValue={setProfileInfoValue}
                                        valueChange={2}
                                        keyValue='client_payment_method'
                                        disabled={editInfo}
                                        value="Онлайн оплата"
                                        connection="online" group="payment"/>
                        </div>
                        <div>
                            {
                                editInfo ?
                                    <button onClick={() => setEditInfo(false)}>
                                        <img src={editIcon} alt="edit"/>
                                    </button>
                                    :
                                    <button onClick={() => updateProdil()}>
                                        <img src={verification_icon} alt="edit"/>
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </ModalContainer>
    );
};

export default DeliveryModal;
