import React, {useEffect, useRef} from 'react'
import './ColorInput.scss'
import styled from "styled-components";

function ColorInput({color, enable = true, fun}) {
    const Label = styled.label.attrs({id: `color_${color}`, htmlFor: `color-${color}`})`
      content: " ";
      position: absolute;
      width: 25px;
      height: 25px;
      background-color: ${props => props.color};
      border-radius: 50%;
      padding: 2px;
      transition: all 0.5s;
      border: 1px solid #000;
      cursor: ${props => !props.enable ? 'pointer' : 'default'};
      &:hover {
        box-shadow: 0px 0px 10px 2px ${props => props.color};
      }
    `;
    const Input = styled.input.attrs({type: 'checkbox', name: "color", disabled: enable, id: `color-${color}`})`
      display: none;
      &:checked + ${Label} {
        box-shadow: 0px 0px 10px 2px ${props => props.color};
      }
    `;

    return (
        <div className='ColorInput'>
            <Input
                color={color}
                disabled={enable}
                onChange={(e) => e.target.checked?fun(color):null}
            />
            <Label
                id={`color-${color}`}
                color={color}
                htmlFor={`color-${color}`}
            ></Label>
        </div>
    )
}

export default ColorInput
