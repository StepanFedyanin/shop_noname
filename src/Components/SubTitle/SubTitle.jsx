import React from 'react';
import './SubTitle.scss'
const SubTitle = ({children}) => {
    return (
        <div className="subtitle">
            <h1 className="subtitle--text">{children}</h1>
        </div>
    );
};

export default SubTitle;
