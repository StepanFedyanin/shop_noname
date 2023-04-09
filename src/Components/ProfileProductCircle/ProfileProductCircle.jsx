import React from 'react';
import './ProfileProductCircle.scss'

function ProfileProductCircle({arrayCover, arrayCoverLength}) {
    return (
        <div className="ProfileProductCircle">
            {
                arrayCover.map((item, index) =>
                    <div className="ProfileProductCircle__item" style={{left: (index * 27 + 'px')}}>
                        <img src={item.product_url} alt="product_circle"/>
                    </div>
                )
            }
            <div className="ProfileProductCircle__item last" style={{left: (arrayCover.length * 27 + 'px')}}>
                <p className="last__length">{arrayCoverLength.length > 8 ? "+ " + arrayCover.length : arrayCover.length}</p>
            </div>
        </div>
    );
}

export default ProfileProductCircle;
