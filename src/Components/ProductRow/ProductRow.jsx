import React, { useState } from 'react'
import './ProductRow.scss'
import starFillIcon from '../../Resurces/Img/StarFill.svg'
import ReviewsList from '../ReviewsList/ReviewsList';

function ProductRow({ title, url, urt_hover, price, reviews }) {
	const [rowChange, setRowChange] = useState(true);
	return (
		<tr className='ProductRow'>
			<td className='ProductRow__product'>
				<div className="ProductRow__product--container"
					onMouseOut={() => setRowChange(true)}
					onMouseOver={() => setRowChange(false)}
				>
					<div className={rowChange ? "ProductRow__product--cover" : "ProductRow__product--cover transform"}>
						<div className="">
							<img src={url} alt="product" />
						</div>
						<div className="">
							<img src={urt_hover} alt="product" />
						</div>
					</div>
				</div>
			</td>
			<td className='ProductRow__description'>
				<p className='ProductRow__description--text'>{title}</p>
			</td>
			<td className='ProductRow__description'>
				<p className='ProductRow__description--text'>
					{price + ' '}
					<span>₽</span>

				</p>
			</td>
			<td className='ProductRow__description'>
				<ReviewsList reviews={reviews} />
			</td>
		</tr>)
}

export default ProductRow