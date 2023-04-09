import React from 'react'
import './MassageTail.scss'
import massageArroy from '../../Resurces/Img/massageArroy.svg'
function MassageTail() {
	return (
		<div className='MassageTail'>
			<div className="MassageTail__container">
				<div className="MassageTail__content">
					<p className='MassageTail__content--text'>new</p>
				</div>
				<div className="MassageTail__Tail">
					<img src={massageArroy} alt="massageArroy" />
				</div>
			</div>
		</div>
	)
}

export default MassageTail
