import React, {useState} from "react";
import './ProductTransform.scss';
function ProductTransform({url,urt_hover}) {
    const [cardChange, setCardChange] = useState(true);
    return (
        <div className={cardChange ? "ProductTransform" : "ProductTransform thansform"}
             onMouseOut={() => setCardChange(true)}
             onMouseOver={() => setCardChange(false)}
        >
            <div
                className="ProductTransform--show">
                <div className=""></div>
                <div className="">
                    <img src={url} alt="product"/>
                </div>
            </div>
            <div
                className="ProductTransform--hover">
                <img src={urt_hover} alt="product"/>
            </div>
        </div>
    )
}

export default ProductTransform
