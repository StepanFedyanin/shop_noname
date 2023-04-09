import React from 'react';
import './InputRadio.scss'

const InputRadio = ({
                        checked,
                        stateValue,
                        setValue,
                        valueChange,
                        keyValue,
                        connection,
                        group,
                        value,
                        disabled = true
                    }) => {
    return (
        <div className="InputRadio">
            <label className="InputRadio__label" htmlFor={connection}>{value}</label>
            <input
                checked={checked}
                disabled={disabled}
                className="InputRadio__input"
                id={connection}
                name={group}
                type="radio"
                onChange={() => setValue({...stateValue, [keyValue]: valueChange})}/>
        </div>
    );
};

export default InputRadio;
