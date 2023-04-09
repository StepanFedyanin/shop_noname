import React from 'react';
import ModalContainer from "../ModalContainer/ModalContainer";
import './ExitConfirmation.scss'
import Button from "../UI/Button/Button";

const ExitConfirmation = ({exit, closeModal, modalBool}) => {
    return (
        <ModalContainer title="Выход" closeModal={closeModal} modalBool={modalBool}>
            <div className="ExitConfirmation">
                <div className="ExitConfirmation__subtitle">
                    <h2 className="ExitConfirmation__subtitle--style">Вы уверенны что хотите выйти?</h2>
                </div>
                <div className="ExitConfirmation__choice">
                    <div className="ExitConfirmation__choice--btn">
                        <Button fun={() => closeModal(null)}>Остаться</Button>
                    </div>
                    <div className="ExitConfirmation__choice--btn">
                        <Button fun={() => exit(true)}>Выйти</Button>
                    </div>
                </div>
            </div>

        </ModalContainer>
    );
};

export default ExitConfirmation;
