import React from 'react'
import './SizeInput.scss'

function SizeInput({setSizeValue, value_id, value, size, some}) {
    return (
        <div className='SizeInput'>
            {
                some ?
                    <input
                        className='SizeInput__input'
                        type="checkbox"
                        name="size"
                        id={`size_${size}`}
                    />
                    :
                    <input
                        className='SizeInput__input'
                        type="radio"
                        name="size"
                        id={`size_${size}`}
                        onClick={() => setSizeValue(value_id)}
                    />
            }
            <label className='SizeInput__label' htmlFor={`size_${size}`}>{value}</label>
        </div>
    )
}

export default SizeInput
