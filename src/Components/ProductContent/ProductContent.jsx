import React, {useRef, useState} from 'react'
import './ProductContent.scss';
import ColorInput from '../UI/ColorInput/ColorInput';
import SizeInput from '../UI/SizeInput/SizeInput';
import Button from '../UI/Button/Button';
import TitleText from '../UI/TitleText/TitleText';
import Favorites from '../UI/Favorites/Favorites';
import ModalSizeTable from '../ModalSizeTable/ModalSizeTable';
import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Product} from '../API/getKatalog';
import {addBasket, addFavorites, deleteFavoritesProduct} from "../API/getUser";
import arrow_back from'../../Resurces/Img/arrow-back.svg'
function ProductContent() {
    const slider = useRef("*")
    const params = useParams();
    const dispatch = useDispatch();
    const [modalSizeTable, setModalSizeTable] = useState(false);
    const navigate = useNavigate();
    const [sizeValue, setSizeValue] = useState(1);
    const loading = useSelector(state => state.Product.product_loading)
    const productContent = useSelector(state => state.Product.product_content)
    useEffect(() => {
        dispatch(Product(params.id));
    }, [params.id])
    return (
        <div className='ProductContent'>
            <div className="ProductContent__container">
                <div className='ProductContent__back'>
                    <button onClick={() => navigate(-1)}>
                        <img src={arrow_back} alt='backIcon'/>
                    </button>
                </div>
                <div className="ProductContent__description">
                    <div className="ProductContent__description--cover" ref={slider}>
                        <div className="ProductContent__cover--container active">
                            <img src={productContent.content.product_url} alt="product"/>
                        </div>
                        <div className="ProductContent__cover--additionally">
                            <div className="ProductContent__cover--container additionally">
                                <img src={productContent.content.product_url_addtional} alt="product"/>
                            </div>
                            <div className="ProductContent__cover--container additionally">

                                <img src={productContent.content.product_url_back} alt="product"/>
                            </div>
                        </div>

                    </div>
                    <div className="ProductContent__description--info">
                        <div className="ProductContent__info--title">
                            <h1 className='ProductContent__title--style'>{productContent.content.product_name}</h1>
                        </div>
                        <div className="ProductContent__info--color">
                            <div className="ProductContent__info--subtitle">
                                <h2 className='ProductContent__subtitle--style border'>Цвет:</h2>
                            </div>
                            <div className="">
                                <ColorInput color={productContent.content.color_value} fun={null}/>
                            </div>
                        </div>
                        <div className="ProductContent__info--size">
                            <div className="ProductContent__size--table">
                                <button className='ProductContent__size--btn'
                                        onClick={() => setModalSizeTable(true)}>Таблица размеров
                                </button>
                            </div>
                            <div className="ProductContent__size--list">
                                {
                                    productContent.sizeList.map(size =>
                                        <SizeInput
                                            key={'size_' + size.size_id}
                                            setSizeValue={setSizeValue}
                                            value_id={size.size_id}
                                            value={size.size_value}
                                            size={'size' + size.size_value}
                                            some={false}
                                        />
                                    )
                                }
                            </div>
                        </div>
                        <div className="ProductContent__info--price">
                            <div className="ProductContent__info--subtitle">
                                <h2 className='ProductContent__subtitle--style border'>Цена:</h2>
                            </div>
                            <div className="ProductContent__price--meaning">
                                <p className='ProductContent__price--text'>{productContent.content.product_price}
                                    <span> ₽ </span></p>
                            </div>
                        </div>
                        <div className="ProductContent__info__tools">
                            <Button fun={() => dispatch(addBasket(productContent.content.product_id, sizeValue))}>Добавить
                                в корзину</Button>
                            <Favorites
                                favorite_boulean={productContent.content.favorite_boulean == 1}
                                fun={() => dispatch(addFavorites(productContent.content.product_id, sizeValue))}
                                funElse={() => dispatch(deleteFavoritesProduct(productContent.content.favorites_id))}
                            />
                        </div>
                        <div className="ProductContent__info--characteristic">
                            <div className="ProductContent__info--subtitle">
                                <h2 className='ProductContent__subtitle--style'>О товаре :</h2>
                            </div>
                            <div className="ProductContent__characteristic--list">
                                <TitleText
                                    title="Фактура материала"
                                    text={productContent.content.characteristics_material}
                                />
                                <TitleText
                                    title="Вид застежки"
                                    text={productContent.content.characteristics_fasteners}
                                />
                                <TitleText
                                    title="Рисунок"
                                    text={productContent.content.characteristics_picture}
                                />
                                <TitleText
                                    title="Пол"
                                    text={productContent.content.characteristics_gender}
                                />
                                <TitleText
                                    title="Сезон"
                                    text={productContent.content.characteristics_season}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ProductContent__reviews">
                </div>
            </div>
            <ModalSizeTable modalState={modalSizeTable} setModalState={setModalSizeTable}/>
        </div>
    )
}

export default ProductContent
