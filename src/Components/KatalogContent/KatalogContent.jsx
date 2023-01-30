import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './KatalogContent.scss'
import { card } from '../../DataDelit/Data'
import ProductListCard from '../ProductListCard/ProductListCard'
import { useSelector } from 'react-redux'
import FilterBar from '../FilterBar/FilterBar'
function KatalogContent() {
	const filterShow = useSelector(state => state.Katalog.filter)
	return (
		<div className='katalog'>
			<div className={filterShow ? "katalog__filter-sedebar" : 'katalog__filter-sedebar transform'}>
				<FilterBar />
			</div>
			<div className={filterShow ? "katalog__container" : "katalog__container transform"}>
				<div className="katalog__content">
					<ProductListCard list={card} />
				</div>
			</div>
		</div>
	)
}

export default KatalogContent