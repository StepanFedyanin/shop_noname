import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './KatalogContent.scss'
import { card } from '../../DataDelit/Data'
import ProductListCard from '../ProductListCard/ProductListCard'
import { useDispatch, useSelector } from 'react-redux'
import FilterBar from '../FilterBar/FilterBar'
import { useEffect } from 'react'
import {Filter_params, Katalog} from '../API/getKatalog'
import SubTitle from "../SubTitle/SubTitle";
function KatalogContent() {
	const dispatch = useDispatch();
	const filterShow = useSelector(state => state.Katalog.filter)
	const katalog_list = useSelector(state => state.Katalog.katalog_list)
	const filter_params = useSelector(state=>state.Katalog.filter_params);
	useEffect(() => {
		dispatch(Katalog());
		dispatch(Filter_params());
	}, [])
	return (
		<div className='katalog'>
			<SubTitle>Каталог</SubTitle>
			<div className={filterShow ? "katalog__filter-sedebar" : 'katalog__filter-sedebar transform'}>
				<FilterBar filter_params={filter_params}/>
			</div>
			<div className={filterShow ? "katalog__container" : "katalog__container transform"}>
				<div className="katalog__content">
					<ProductListCard filter={true} katalog_list={katalog_list} />
				</div>
			</div>
		</div>
	)
}

export default KatalogContent
