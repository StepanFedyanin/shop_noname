import React, { useRef, useState } from 'react'
import './ProductContent.scss';
import delitThem3 from '../../Resurces/Img/cardDelit2.png'
import delitThem2 from '../../Resurces/Img/cardDelit1.png'
import ColorInput from '../UI/ColorInput/ColorInput';
import SizeInput from '../UI/SizeInput/SizeInput';
import Button from '../UI/Button/Button';
import TitleText from '../UI/TitleText/TitleText';
import Favorites from '../UI/Favorites/Favorites';
import ModalSizeTable from '../ModalSizeTable/ModalSizeTable';

function ProductContent() {
	const slider = useRef("*")
	const [indexShow, setIndexShow] = useState(1);
	const [modalSizeTable, setModalSizeTable] = useState(false);
	const changeSlide = () => {

		let indexActive = (Array.from(slider.current.children).findIndex(item => item.className.split(' ')[1] == 'active'));

		if (indexShow == Array.from(slider.current.children).length - 1) {
			setIndexShow(0);
		} else {
			setIndexShow(state => state + 1);
		}
		Array.from(slider.current.children)[indexActive].classList.remove('active');
		Array.from(slider.current.children)[indexShow].classList.add('active')
	}
	const ZoomProductCover = (e, boolean) => {
		var zoomer = e.currentTarget;
		let offsetX;
		let offsetY;
		offsetX = e.nativeEvent.offsetX ? offsetX = e.nativeEvent.offsetX : offsetX = e.touches[0].pageX
		offsetY = e.nativeEvent.offsetY ? offsetY = e.nativeEvent.offsetY : offsetX = e.touches[0].pageX
		let x = offsetX / zoomer.offsetWidth * 100
		let y = offsetY / zoomer.offsetHeight * 100
		if (boolean && zoomer.parentNode.className.split(' ')[1] == 'active') {
			zoomer.style.width = 200 + '%';
			zoomer.firstElementChild.style.padding = y + '%';
			zoomer.firstElementChild.style.paddingBottom = x + '%'
			console.log(zoomer.style.width = x + '% ' + y + '%');
		} else {
			zoomer.style.width = '100%';
		}

	}
	return (
		<div className='ProductContent'>
			<div className="ProductContent__container">
				<div className="ProductContent__description">
					<div className="ProductContent__description--cover" ref={slider}>
						<div className="ProductContent__cover--container active" onClick={() => changeSlide()}>
							<figure className='ProductContent__cover--figure'
								onMouseMove={(e) => ZoomProductCover(e, true)}
								onMouseOut={(e) => ZoomProductCover(e, false)}
							>
								<img src={delitThem3} alt="product" />

							</figure>
						</div>
						<div className="ProductContent__cover--container" onClick={() => changeSlide()}>
							<figure className='ProductContent__cover--figure'
								onMouseMove={(e) => ZoomProductCover(e, true)}
								onMouseOut={(e) => ZoomProductCover(e, false)}
							>
								<img src={delitThem2} alt="product" />
							</figure>
						</div>
						<div className="ProductContent__cover--container" onClick={() => changeSlide()}>
							<figure className='ProductContent__cover--figure'
								onMouseMove={(e) => ZoomProductCover(e, true)}
								onMouseOut={(e) => ZoomProductCover(e, false)}
							>
								<img src={delitThem3} alt="product" />
							</figure>
						</div>
					</div>
					<div className="ProductContent__description--info">
						<div className="ProductContent__info--title">
							<h1 className='ProductContent__title--style'>Рубашка</h1>
						</div>
						<div className="ProductContent__info--color">
							<div className="ProductContent__info--subtitle">
								<h2 className='ProductContent__subtitle--style border'>Цвет:</h2>
							</div>
							<div className="">
								<ColorInput color={'#a1e3ca'} enable={true} fun={null} />
							</div>
						</div>
						<div className="ProductContent__info--size">
							<div className="ProductContent__size--table">
								<button className='ProductContent__size--btn' onClick={() => setModalSizeTable(true)}>Таблица размеров</button>
							</div>
							<div className="ProductContent__size--list">
								<SizeInput value={'S'} size={'sizeS'} some={false} />
								<SizeInput value={'M'} size={'sizeM'} some={false} />
								<SizeInput value={'L'} size={'sizeL'} some={false} />
								<SizeInput value={'XL'} size={'sizeXL'} some={false} />
							</div>
						</div>
						<div className="ProductContent__info--price">
							<div className="ProductContent__info--subtitle">
								<h2 className='ProductContent__subtitle--style border'>Цена:</h2>
							</div>
							<div className="ProductContent__price--meaning">
								<p className='ProductContent__price--text'>1790 <span> ₽ </span></p>
							</div>
						</div>
						<div className="ProductContent__info__tools">
							<Button>Добавить в корзину</Button>
							<Favorites />
						</div>
						<div className="ProductContent__info--characteristic">
							<div className="ProductContent__info--subtitle">
								<h2 className='ProductContent__subtitle--style'>О товаре :</h2>
							</div>
							<div className="ProductContent__characteristic--list">
								<TitleText
									title="Фактура материала"
									text='деним'
								/>
								<TitleText
									title="Вид застежки"
									text='пуговицы'
								/>
								<TitleText
									title="Рисунок"
									text='нет'
								/>
								<TitleText
									title="Пол"
									text='Мужской'
								/>
								<TitleText
									title="Сезон"
									text='демисезон'
								/>
							</div>

						</div>
					</div>
				</div>
				<div className="ProductContent__reviews">

				</div>
			</div>
			<ModalSizeTable modalState={modalSizeTable} setModalState={setModalSizeTable} />
		</div>
	)
}

export default ProductContent