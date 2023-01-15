import React from 'react'
import './CoverPages.scss'
function CoverPages() {
	return (
		<div className='CoverPage'>
			<div className="CoverPage__container">
				<div className="CoverPage__nav">
					<div className="CoverPage__nav">
						<ul className='CoverPage__nav--list'>
							<li className="CoverPage__nav--item">Мужсикое</li>
							<li className="CoverPage__nav--item">Женское</li>
							<li className="CoverPage__nav--item">Вопросы</li>
							<li className="CoverPage__nav--item">Философия</li>
						</ul>
					</div>
					<div className="">
						<div className="">
							<ul>
								<li className="CoverPage__nav--item">Регистрация</li>
								<li className="CoverPage__nav--item">Вход</li>
							</ul>
						</div>
						<div className=""></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CoverPages