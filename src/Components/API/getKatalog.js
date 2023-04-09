import axios from "axios";
import {useDispatch} from "react-redux";
import {addFilterParams, crateKatalogList} from "../../Redux/Slice/Katalog";
import {changeProductLoad, fillingProductContent} from "../../Redux/Slice/Product";

export function Katalog() {
    return function (dispatch) {
        fetch('/api/pruductlist')
            .then(response => response.json())
            .then(katalog => dispatch(crateKatalogList(katalog[0])))
    }
}

export function Filter_params() {
    return function (dispatch) {
        fetch('/api/filter_params')
            .then(response => response.json())
            .then(params => dispatch(addFilterParams({color: params.color, params: params.params})))
    }
}

export function KatalogFilter(filterValue) {
    return function (dispatch) {
        fetch('/api/pruductlist_filter', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                material:filterValue.material,
                season:filterValue.season,
                type:filterValue.type,
                picture:filterValue.picture,
                gender:filterValue.gender,
                fasteners:filterValue.fasteners,
                color:filterValue.color,
            })
        })
            .then(response => response.json())
            .then(katalog => dispatch(crateKatalogList(katalog)))
    }
}

export function Product(id) {
    return function (dispatch) {
        fetch('/api/product/' + id)
            .then(response => response.json())
            .then(product => dispatch(fillingProductContent(product)))
            .then(() => dispatch(changeProductLoad(true)))
    }
}
