import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import MassageTail from '../MassageTail/MassageTail';
import ReviewsList from '../ReviewsList/ReviewsList';
import './ProductCard.scss'

function ProductCard({ title, url, urt_hover, price, reviews }) {
	const [cardChange, setCardChange] = useState(true);
	const filterShow = useSelector(state => state.Katalog.filter)
	return (
		<div className={filterShow ? 'ProductCard' : 'ProductCard width'}>
			<div className="ProductCard__container">
				<MassageTail />
				<div className={cardChange ? "ProductCard__cover" : "ProductCard__cover thansform"}
					onMouseOut={() => setCardChange(true)}
					onMouseOver={() => setCardChange(false)}
				>
					<div
						className="ProductCard__cover--show">
						<div className=""></div>
						<div className="">
							<img src={url} alt="product" />
						</div>
					</div>
					<div
						className="ProductCard__cover--hover">
						<img src={urt_hover} alt="product" />
					</div>
				</div>
				<div className="ProductCard__description">
					<div className="ProductCard__description--title">
						<p className='ProductCard__title--style'>{title}</p>
					</div>
					<div className="ProductCard__description--content">
						<ReviewsList reviews={reviews} />
						<div className="ProductCard__description--price">
							<p className='ProductCard__price--text'>{price + ' '} <span> ₽ </span> </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard