import React from 'react';
import './MassageError.scss'

const MassageError = ({errorMassage, setErrorMassage}) => {
    if (errorMassage.show) {
        setTimeout(() => {
            setErrorMassage({
                show:false,
                textMassage:errorMassage.textMassage
            })
        }, 2000)
    }
    return (
        <div className={errorMassage.show ? "MassageError active" : "MassageError"}>
            <div className="MassageError__subtitle">
                <p className="MassageError__subtitle--style">
                    что-то не так:
                </p>
            </div>
            <div className="MassageError__massage">
                <p className="MassageError__massage--style">
                    {errorMassage.textMassage}
                </p>
            </div>
        </div>
    );
};

export default MassageError;
