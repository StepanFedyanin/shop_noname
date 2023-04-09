import React from 'react';
import './PurchasesList.scss'
import PurchasesProduct from "../PurchasesProduct/PurchasesProduct";

const PurchasesList = ({productList}) => {
    return (
        <table className="PurchasesList">
            <tbody>
            {
                productList.map((product)=>
                    <PurchasesProduct
                        key={product.product_id}
                        id={product.product_id}
                        name={product.product_name}
                        url={product.product_url}
                        url_back={product.product_url_back}
                        price={product.product_price}
                        Purchases_stast={product.Purchases_stast}
                        Purchases_end={product.Purchases_end}
                        Purchases_status={product.Purchases_status}
                        size_value={product.size_value}
                    />
                )
            }
            </tbody>
        </table>
    );
};

export default PurchasesList;
