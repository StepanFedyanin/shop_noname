import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './KatalogContent.scss'
import { card } from '../../DataDelit/Data'
import ProductListCard from '../ProductListCard/ProductListCard'
import { useSelector } from 'react-redux'
function KatalogContent() {
	const filterShow = useSelector(state => state.Katalog.filter)
	return (
		<div className='katalog'>
			<div className="katalog__container">
				<div className={filterShow ? "sedebar" : 'sedebar transform'}>

				</div>
				<div className={filterShow ? "katalog__content" : "katalog__content transform"}>
					<ProductListCard list={card} />
				</div>
			</div>
		</div>
	)
}

export default KatalogContent