import React, {useEffect} from 'react'
import './Header.scss'
import logo from '../../Resurces/Img/logo.png'
import {NavLink} from 'react-router-dom'
import favoritesIcon from '../../Resurces/Img/favorites.svg'
import basketIcon from '../../Resurces/Img/basket.svg'
import profilIcon from '../../Resurces/Img/profil.svg'
import {useDispatch, useSelector} from "react-redux";
import {Product} from "../API/getKatalog";
import {Basket, favorites} from "../API/getUser";

function Header() {
    const dispatch = useDispatch();
    const basketList = useSelector(state => state.User.basketList);
    const favoritList = useSelector(state => state.User.favoritesList);
    useEffect(() => {
        dispatch(favorites());
        dispatch(Basket());
    }, [])
    return (
        <div className='header'>
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="header__nav">
                    <ul className='header__nav--list'>
                        <li className='header__nav--item'>
                            <NavLink to="/*"
                                     className={({isActive}) => isActive ? "header__nav--link active" : "header__nav--link"}>Главная</NavLink>
                        </li>
                        <li className='header__nav--item'>
                            <NavLink to="/katalog"
                                     className={({isActive}) => isActive ? "header__nav--link active" : "header__nav--link"}>Каталог</NavLink>
                        </li>
                        <li className='header__nav--item'>
                            <NavLink to="/*"
                                     className={({isActive}) => isActive ? "header__nav--link active" : "header__nav--link"}>О
                                бренде</NavLink>
                        </li>
                        <li className='header__nav--item'>
                            <NavLink to="/*"
                                     className={({isActive}) => isActive ? "header__nav--link active" : "header__nav--link"}>Контакты</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="header__tools">
                    <ul className='header__nav--list'>
                        <li className='header__nav--item'>
                            <NavLink to="/favorites" className={({isActive}) => isActive ? "" : ""}>
                                <img src={favoritesIcon} alt="favorite"/>
                                <div className="header__nav--counter">
                                    {favoritList.length}
                                </div>
                            </NavLink>
                        </li>
                        <li className='header__nav--item'>
                            <NavLink to="/basket" className={({isActive}) => isActive ? "" : ""}>
                                <img src={basketIcon} alt="basket"/>
                                <div className="header__nav--counter">
                                    {basketList.length}
                                </div>
                            </NavLink>
                        </li>
                        <li className='header__nav--item'>
                            <NavLink to="/profile/1" className={({isActive}) => isActive ? "" : ""}>
                                <img src={profilIcon} alt="profil"/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
