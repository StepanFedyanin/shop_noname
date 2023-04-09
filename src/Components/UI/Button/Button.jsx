import React from 'react'
import './Button.scss'
function Button({ children, fun }) {
	return (
		<button className='Button' onClick={() => fun()}>{children}</button>
	)
}

export default Button