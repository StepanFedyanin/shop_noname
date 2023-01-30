import React from 'react'
import DropDown from '../UI/DropDown/DropDown'
import './FilterBar.scss'
function FilterBar() {
	return (
		<div className='FilterBar'>
			<div className="FilterBar__container">
				<div className="FilterBar__title">
					<h1 className='FilterBar__title--text'>фильтр</h1>
				</div>
				<div className="FilterBar__content">
					<DropDown />
				</div>
			</div>
		</div>
	)
}

export default FilterBar