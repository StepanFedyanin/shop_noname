import React, {useState} from 'react';
import './InputText.scss'

const InputText = ({keyValue,valueInputNull, valueInput, value = '', setValue, disabledBool = true}) => {
    return (
        <div className="InputText">
            <input className={disabledBool ? " InputText__input nullBorder" : " InputText__input border"}
                   disabled={disabledBool} type="text" value={valueInput}
                   placeholder={valueInputNull}
                   onChange={(e) => setValue({...value, [keyValue]: e.target.value})}/>
        </div>
    );
};

export default InputText;
