import React, {useState} from 'react';
import './FilterParams.scss';
import ColorInput from "../UI/ColorInput/ColorInput";

const FilterParams = ({title, paramsList, keyValue, colorBool = false, binding, state, setState,filterValue, setFilterValue}) => {
    const addParamsFilter = (value) => {
        setFilterValue({
            ...filterValue,
            [binding]:[...filterValue[binding],value]
        })
    }
    return (
        <div className="FilterParams">
            <div className="FilterParams__title">
                <button className="FilterParams__title--style"
                        onClick={() => setState(binding)}
                >
                    {title}
                </button>
            </div>
            <div
                className={colorBool ? state ? "FilterParams__list color transform" : "FilterParams__list" : state ? "FilterParams__list transform" : "FilterParams__list"}>
                {
                    colorBool ?
                        paramsList.map((params,index) =>
                            <ColorInput key={params.color_value+'color'+index} enable={false} color={params.color_value} fun={addParamsFilter}/>
                        )
                        : paramsList.map((params, index) =>
                            <div className="FilterParams__items" key={binding + '_' + index}>
                                <input name={binding}
                                       id={binding + '_' + index}
                                       className="FilterParams__items--input"
                                       type="checkbox"
                                       onClick={(e)=>e.target.checked?addParamsFilter(params[keyValue]):null}
                                />
                                <label htmlFor={binding + '_' + index}
                                       className="FilterParams__items--label">{params[keyValue]}</label>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default FilterParams;
