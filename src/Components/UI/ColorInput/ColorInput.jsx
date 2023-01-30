import React from 'react'
import './ColorInput.scss'
import styled from "styled-components";
function ColorInput({ color, enable = false, fun }) {
	const Label = styled.label`
		content: " ";
		position: absolute;
		width: 25px;
		height: 25px;
		background-color: ${props => props.color};
		border-radius: 50%;
		padding: 2px;
		transition: all 0.5s;
	`;

	const Input = styled.input`
  		display: none;
		&:checked + Label {
			box-shadow: 0px 0px 10px 2px ${props => props.color};
		}
	`;
	return (
		<div className='ColorInput'>
			<Input disabled={enable} color={color} type='checkbox' name="color" id={`color-${color}`} />
			<Label color={color} enable={enable} htmlFor={`color-${color}`} ></Label>
		</div>
	)
}

export default ColorInput