import React from 'react'
import './TitleText.scss'
function TitleText({ title, text }) {
	return (
		<div className='TitleText'>
			<div className="TitleText__title">
				<p className='TitleText__title--style'>{title + ' :'}</p>
			</div>
			<div className="TitleText__text">
				<p className='TitleText__text--style'>{text}</p>
			</div>
		</div>
	)
}

export default TitleText