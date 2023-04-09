import React from 'react'
import './ProductListCard.scss'
import ProductCard from '../ProductCard/ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import {changeFilter} from '../../Redux/Slice/Katalog'
import ProductRow from '../ProductRow/ProductRow'
import ProductListType from '../ProductListType/ProductListType'
import Button from '../UI/Button/Button'

function ProductListCard({katalog_list, filter = false}) {
    const dispatch = useDispatch()
    const type_list = useSelector(state => state.Katalog.type_list)
    const filterShow = useSelector(state => state.Katalog.filter)
    if (!filter) {
        dispatch(changeFilter(true));
    }
    const openFilter = () => {
        filterShow ?
            dispatch(changeFilter(false))
            :
            dispatch(changeFilter(true))
    }
    return (
        <div className={filterShow ? 'ProductList' : 'ProductList filter'}>

            <div className="ProductList__type">
                {
                    filter ?
                        <div className="">
                            <Button fun={openFilter}>фильтр</Button>
                        </div>
                        :
                        null
                }
                <ProductListType/>
            </div>
            <div className={type_list ? "ProductList__content block" : "ProductList__content list"}>

                {
                    type_list ?
                        katalog_list.map(product =>
                            <ProductCard
                                key={product.product_id}
                                product_id={product.product_id}
                                title={product.product_name}
                                url={product.product_url}
                                urt_hover={product.product_url_back}
                                price={product.product_price}
                                reviews={product.product_reviews}
                            />
                        )
                        :
                        <table>
                            <tbody>
                            {
                                katalog_list.map(product =>
                                    <ProductRow
                                        key={product.product_id}
                                        product_id={product.product_id}
                                        title={product.product_name}
                                        url={product.product_url}
                                        urt_hover={product.product_url_back}
                                        price={product.product_price}
                                        reviews={product.product_reviews}
                                    />
                                )
                            }
                            </tbody>

                        </table>
                }
            </div>

        </div>
    )
}

export default ProductListCard
