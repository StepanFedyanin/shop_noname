import React, { useState } from 'react'
import { SimpleDropdown } from 'react-js-dropdavn';
import 'react-js-dropdavn/dist/index.css'
import './DropDown.scss'

function DropDown() {
	const data = [
		{ label: 'Ex opt 1', value: 1 },
		{ label: 'Ex opt 2', value: 2 },
		{ label: 'Ex opt 3', value: 3 },
		{ label: 'Ex opt 4', value: 4 },
	]
	return (
		<SimpleDropdown
			options={data}
			clearable
			configs={
				{ position: { y: 'bottom', x: 'center' } }
			}
		/>
	)
}

export default DropDown