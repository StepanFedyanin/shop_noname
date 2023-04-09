import React from 'react';
import './ProfileUserBlock.scss'
import {NavLink} from 'react-router-dom'

function ProfileUserBlock({navclick = false, clickFun, clickValue, width = "third", subtitle, children}) {
    return (
        <div onClick={() => clickFun(clickValue)} className={"ProfileUserBlock " + width}>
            <div className="ProfileUserBlock__subtitle">
                <p className="ProfileUserBlock__subtitle--style">{subtitle}</p>
            </div>
            <div className="ProfileUserBlock__description">
                {children}
            </div>
        </div>

    );
}

export default ProfileUserBlock;
