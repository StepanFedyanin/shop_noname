import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import './FavoritesList.scss';
function FavoritesList({productList}) {
    return (
        <div className="FavoritesList">
            {
                productList.map(product =>
                    <ProductCard
                        key={product.basket_id}
                        product_id={product.product_id}
                        title={product.product_name}
                        url={product.product_url}
                        urt_hover={product.product_url_back}
                        price={product.product_price}
                        favorites={true}
                        deleteCard={true}
                        favorites_id={product.favorites_id}
                    />
                )
            }
        </div>
    );
}

export default FavoritesList;
