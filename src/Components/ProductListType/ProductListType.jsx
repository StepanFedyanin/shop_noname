import React from 'react'
import './ProductListType.scss'
import listTableNoActive from '../../Resurces/Img/listTableNoActive.svg';
import listTableActive from '../../Resurces/Img/listTableActive.svg'
import listBlockNoActive from '../../Resurces/Img/listBlockNoActive.svg';
import listBlockActive from '../../Resurces/Img/listBlockActive.svg'
import { useDispatch, useSelector } from 'react-redux';
import { changeTypeList } from '../../Redux/Slice/Katalog';
function ProductListType() {
	const dispatch = useDispatch()
	const type_list = useSelector(state => state.Katalog.type_list)
	return (
		<div className='ProductListType'>
			{
				type_list ?
					<div className="ProductListType__category">
						<div className="ProductListType__category--item">
							<button className='ProductListType__item--btn'>
								<img src={listBlockActive} alt="iconBlock" />
							</button>
						</div>
						<div className="ProductListType__category--item">
							<button className='ProductListType__item--btn' onClick={() => dispatch(changeTypeList(false))}>
								<img src={listTableNoActive} alt="iconBlock" />
							</button>
						</div>
					</div>
					:
					<div className="ProductListType__category">
						<div className="ProductListType__category--item">
							<button className='ProductListType__item--btn' onClick={() => dispatch(changeTypeList(true))}>
								<img src={listBlockNoActive} alt="iconBlock" />
							</button>
						</div>
						<div className="ProductListType__category--item">
							<button className='ProductListType__item--btn'>
								<img src={listTableActive} alt="iconBlock" />
							</button>
						</div>
					</div>
			}

		</div>
	)
}

export default ProductListType
