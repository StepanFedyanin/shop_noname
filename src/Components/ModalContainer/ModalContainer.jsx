import React from 'react';
import './ModalContainer.scss';
import close_modal from "../../Resurces/Img/close_modal.svg";

function ModalContainer({children,modalBool,closeModal,title}) {
    return (
        <div className={modalBool?'ModalContainer active':"ModalContainer"} onClick={()=>closeModal(null)}>
            <div className='ModalContainer__content' onClick={(e)=>e.stopPropagation()}>
                <div className="ModalContainer__header">
                    <div className="ModalContainer__header--title">
                        <h1 className="ModalContainer__title--style">{title}</h1>
                    </div>
                    <div className="ModalContainer__header--close">
                        <button className="ModalContainer__header--btn" onClick={()=>closeModal(null)}>
                            <img src={close_modal} alt="close_modal"/>
                        </button>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default ModalContainer;
