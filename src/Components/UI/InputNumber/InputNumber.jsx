import React, {useEffect, useState} from 'react'
import './InputNumber.scss'
import {useDispatch} from "react-redux";
import {updateBasketProduct} from "../../API/getUser";

function InputNumber({startValue = 1, id_basket}) {
    const dispatch = useDispatch();
    const [valueQuantity, setValueQuantity] = useState(startValue);
    useEffect(() => {
        setValueQuantity(startValue);
    }, [])
    const counterValue = (value) => {
        if (valueQuantity + value > 0) {
            setValueQuantity(state => state + value)
        }
    }
    useEffect(() => {
        dispatch(updateBasketProduct(id_basket, valueQuantity))
    }, [valueQuantity])
    return (
        <div className='InputNumber'>
            <button className="InputNumber--arrow__minus InputNumber--text__arrow" onClick={() => counterValue(-1)}> -
            </button>
            <input className="InputNumber--num InputNumber--text" type="number" value={valueQuantity}/>
            <button className="InputNumber--arrow__plus InputNumber--text__arrow" onClick={() => counterValue(1)}> +
            </button>
        </div>
    )
}

export default InputNumber
