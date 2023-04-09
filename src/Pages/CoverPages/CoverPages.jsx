import React, {useEffect, useState} from 'react'
import './CoverPages.scss'
import {NavLink} from "react-router-dom";
import {addUser, User} from "../../Components/API/getUser";
import {useDispatch} from "react-redux";
import Button from "../../Components/UI/Button/Button";
import {isAllOf} from "@reduxjs/toolkit";
import InputText from "../../Components/UI/InputText/InputText";
import InputMask from 'react-input-mask';

function CoverPages() {
    const dispatch = useDispatch();
    const [ChangeMenu, setChangeMenu] = useState("input");
    const [inputValues, setInputValues] = useState({
        mail: "",
        pass: ""
    })
    const [registerValues, setRegisterValues] = useState({
        name: "",
        surname: "",
        patronymic: "",
        mail: "",
        pass: "",
        repeat_pass: "",
        phone: "",
    })
    const inputUser = () => {
        const maskMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/;
        if (!maskMail.test(inputValues.mail)) {
            setInputValues({...inputValues, mail: 'error'});
        } else if (inputValues.pass.length < 4) {
            setInputValues({...inputValues, pass: 'error'});
        } else {
            dispatch(User(inputValues.mail,inputValues.pass))
        }
    }
    const registerUser = () => {
        const maskMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/;
        if (!registerValues.name.length) {
            setRegisterValues({...registerValues, name: 'error'});
        } else if (!registerValues.surname.length) {
            setRegisterValues({...registerValues, surname: 'error'});
        } else if (!registerValues.patronymic.length) {
            setRegisterValues({...registerValues, patronymic: 'error'});
        } else if (!maskMail.test(registerValues.mail)) {
            setRegisterValues({...registerValues, mail: 'error'});
        } else if (registerValues.phone.replace(/[^+\d]/g, '').length != 12) {
            setRegisterValues({...registerValues, phone: 'error'});
        } else if (registerValues.pass.length < 5) {
            setRegisterValues({...registerValues, pass: 'error'});
        } else if (registerValues.pass != registerValues.repeat_pass) {
            setRegisterValues({...registerValues, repeat_pass: 'error'});
        } else {
            dispatch(addUser(registerValues.name, registerValues.surname, registerValues.patronymic, registerValues.mail, registerValues.pass, registerValues.phone))
        }
    }
    return (
        <div className='CoverPage'>
            <div className="CoverPage__container">
                <div className="CoverPage__header">
                    <ul className="CoverPage__header--list">
                        <li className="CoverPage__list--item">
                            <button
                                onClick={() => setChangeMenu("input")}
                                className={ChangeMenu == 'input' ? "CoverPage__nav--btn input" : "CoverPage__nav--btn"}
                            >
                                Вход
                            </button>
                        </li>
                        <li className="CoverPage__list--item">
                            <button
                                onClick={() => setChangeMenu("registry")}
                                className={ChangeMenu == 'registry' ? "CoverPage__nav--btn registry" : "CoverPage__nav--btn"}
                            >
                                Регистрация
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="CoverPage__content--menus">
                    <div className={ChangeMenu == 'input' ? "CoverPage__menu" : "CoverPage__menu transform"}>
                        <div className="CoverPage__menu--input">
                            <div className="CoverPage__content--inputs">
                                <div className="CoverPage__content--item">
                                    <label htmlFor="mailInput"
                                           className="CoverPage__content--label">{inputValues.mail == 'error' ? "Введите правильные данные почты" : "Почта"}</label>
                                    <input
                                        id="mailInput"
                                        className={inputValues.mail != 'error' ? "CoverPage__content--input" : "CoverPage__content--input error"}
                                        type="text"
                                        placeholder="Почта"
                                        onChange={(e) => setInputValues({...inputValues, mail: e.currentTarget.value})}
                                    />
                                </div>
                                <div className="CoverPage__content--item">
                                    <label htmlFor="mailInput"
                                           className="CoverPage__content--label">{inputValues.pass == 'error' ? "Введите правильный пароль" : "Пароль"}</label>
                                    <input
                                        className={inputValues.pass != 'error' ? "CoverPage__content--input" : "CoverPage__content--input error"}
                                        type="password"
                                        placeholder="Пароль"
                                        onChange={(e) => setInputValues({...inputValues, pass: e.currentTarget.value})}
                                    />
                                </div>
                            </div>
                            <div className="CoverPage__content--btn">
                                <Button fun={() => inputUser()}>Войти</Button>
                            </div>
                        </div>
                        <div className="CoverPage__menu--registry">
                            <div className="CoverPage__content--inputs">
                                <div className="CoverPage__content--item">
                                    <label htmlFor="mailInput"
                                           className="CoverPage__content--label">{registerValues.name == 'error' ? "Введите правильные данные почты" : "Имя"}</label>
                                    <input
                                        className="CoverPage__content--input"
                                        type="text"
                                        placeholder="Имя"
                                        onChange={(e) => setRegisterValues({
                                            ...registerValues,
                                            name: e.currentTarget.value
                                        })}
                                    />
                                </div>
                                <div className="CoverPage__content--item">
                                    <label htmlFor="mailInput"
                                           className="CoverPage__content--label">{registerValues.surname == 'error' ? "Введите правильные данные почты" : "Фамилия"}</label>
                                    <input
                                        className="CoverPage__content--input"
                                        type="text"
                                        placeholder="Фамилия"
                                        onChange={(e) => setRegisterValues({
                                            ...registerValues,
                                            surname: e.currentTarget.value
                                        })}
                                    />
                                </div>
                                <div className="CoverPage__content--item">
                                    <label htmlFor="mailInput"
                                           className="CoverPage__content--label">{registerValues.patronymic == 'error' ? "Введите правильные данные почты" : "Отчество"}</label>
                                    <input
                                        className="CoverPage__content--input"
                                        type="text"
                                        placeholder="Отчество"
                                        onChange={(e) => setRegisterValues({
                                            ...registerValues,
                                            patronymic: e.currentTarget.value
                                        })}
                                    />
                                </div>
                                <div className="CoverPage__content--item">
                                    <label htmlFor="mailInput"
                                           className="CoverPage__content--label">{registerValues.phone == 'error' ? "Введите правильные данные почты" : "Телефон"}</label>
                                    <InputMask
                                        className="CoverPage__content--input"
                                        mask='+7 999-999-99-99'
                                        placeholder="Телефон"
                                        onChange={(e) => setRegisterValues({
                                            ...registerValues,
                                            phone: e.currentTarget.value
                                        })}
                                    />
                                </div>
                                <div className="CoverPage__content--item">
                                    <label htmlFor="mailInput"
                                           className="CoverPage__content--label">{registerValues.mail == 'error' ? "Введите правильные данные почты" : "Почта"}</label>
                                    <input
                                        className="CoverPage__content--input"
                                        type="text"
                                        placeholder="Почта"
                                        onChange={(e) => setRegisterValues({
                                            ...registerValues,
                                            mail: e.currentTarget.value
                                        })}
                                    />
                                </div>
                                <div className="CoverPage__content--item">
                                    <label htmlFor="mailInput"
                                           className="CoverPage__content--label">{registerValues.pass == 'error' ? "Введите правильные данные почты" : "Пароль"}</label>
                                    <input
                                        className="CoverPage__content--input"
                                        type="password"
                                        placeholder="Пароль"
                                        onChange={(e) => setRegisterValues({
                                            ...registerValues,
                                            pass: e.currentTarget.value
                                        })}
                                    />
                                </div>
                                <div className="CoverPage__content--item">
                                    <label htmlFor="mailInput"
                                           className="CoverPage__content--label">{registerValues.repeat_pass == 'error' ? "Введите правильные данные почты" : "Подтверждение пароля"}</label>
                                    <input
                                        className="CoverPage__content--input"
                                        type="password"
                                        placeholder="Подтверждение пароля"
                                        onChange={(e) => setRegisterValues({
                                            ...registerValues,
                                            repeat_pass: e.currentTarget.value
                                        })}

                                    />
                                </div>
                            </div>
                            <div className="CoverPage__content--btn">
                                <Button fun={() => registerUser()}>Регистрация</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoverPages
