import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './KatalogContent.scss'
import { card } from '../../DataDelit/Data'
import ProductListCard from '../ProductListCard/ProductListCard'
import { useDispatch, useSelector } from 'react-redux'
import FilterBar from '../FilterBar/FilterBar'
import { useEffect } from 'react'
import { Katalog } from '../API/getKatalog'
function KatalogContent() {
	const dispatch = useDispatch();
	const filterShow = useSelector(state => state.Katalog.filter)
	const katalog_list = useSelector(state => state.Katalog.katalog_list)
	useEffect(() => {
		Katalog();
	})
	return (
		<div className='katalog'>
			<div className={filterShow ? "katalog__filter-sedebar" : 'katalog__filter-sedebar transform'}>
				<FilterBar />
			</div>
			<div className={filterShow ? "katalog__container" : "katalog__container transform"}>
				{/* <div className="katalog__content">
					<ProductListCard list={card} katalog_list={katalog_list} />
				</div> */}
			</div>
		</div>
	)
}

export default KatalogContent