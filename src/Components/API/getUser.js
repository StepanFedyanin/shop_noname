import {addBasketList, addFavoritesList, addPurchasesList, addUserInfo, changeAuthorized} from "../../Redux/Slice/User";

export function User(mail, pass) {
    return function (dispatch) {
        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email: mail, password: pass})
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(changeAuthorized(data.authorized));
                dispatch(addUserInfo(data.userInfo))
            })
    }
}

export function userExit() {
    return function (dispatch) {
        fetch('/api/user_exit')
            .then(response => response.json())
            .then((data) => {
                dispatch(changeAuthorized(data.authorized));
                dispatch(addUserInfo(data.userInfo))
            })
    }
}


export function addUser(name, surname, patronymic, mail, pass, phone) {
    return function (dispatch) {
        fetch('/api/add_user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                new_name: name,
                new_surname: surname,
                new_patronymic: patronymic,
                new_mail: mail,
                new_pass: pass,
                new_phone: phone
            })
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(User(data.mail, data.pass))
                dispatch(changeAuthorized(data.authorized));
                dispatch(addUserInfo(data.userInfo))
            })
    }
}


export function UpdateUser() {
    return function (dispatch) {
        fetch('/api/user_update')
            .then(response => response.json())
            .then(userInfo => dispatch(addUserInfo(userInfo[0])))
    }
}

// dispatch(addUserInfo(userInfo)
export function UserUpdateProfil(mailValue, phoneValue) {
    return function (dispatch) {
        fetch('/api/user_update_profile', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({mail: mailValue, phone: phoneValue})
        })
            .then(() => dispatch(UpdateUser()))
    }
}

export function UserUpdateAddress(client_region, client_city, client_street, client_house, client_appartment, client_index, client_snipping_method, client_payment_method) {
    return function (dispatch) {
        fetch('/api/user_update_address', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                region: client_region,
                city: client_city,
                street: client_street,
                house: client_house,
                appartment: client_appartment,
                index: client_index,
                snipping_method: client_snipping_method,
                payment_method: client_payment_method
            })
        })
            .then(() => dispatch(UpdateUser()))

    }
}


export function favorites() {
    return function (dispatch) {
        fetch('/api/favorites')
            .then(response => response.json())
            .then(basketList => dispatch(addFavoritesList(basketList)))
    }
}

export function addFavorites(product_id, size_id) {
    return function (dispatch) {
        fetch('/api/add_favorites', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({product_id: product_id, size_id: size_id})
        })
            .then((response) => response.json())
            .then((data) => dispatch(favorites()))
    }
}

export function deleteFavoritesProduct(id) {
    return function (dispatch) {
        fetch('/api/delete_favorites_product', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({basket_id: id})
        })
            .then((response) => response.json())
            .then((data) => dispatch(favorites()))
    }
}


export function Basket() {
    return function (dispatch) {
        fetch('/api/basket')
            .then(response => response.json())
            .then(basketList => dispatch(addBasketList(basketList)))
    }
}

export function addBasket(product_id, size_id) {
    return function (dispatch) {
        fetch('/api/add_basket', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({product_id: product_id, size_id: size_id})
        })
            .then((response) => response.json())
            .then((data) => dispatch(Basket()))
    }
}

export function deleteBasketProduct(id) {
    return function (dispatch) {
        fetch('/api/delete_basket_product', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({basket_id: id})
        })
            .then((response) => response.json())
            .then((data) => dispatch(Basket()))
    }
}

export function updateBasketProduct(id, valueQuantity) {
    return function (dispatch) {
        fetch('/api/update/quantity', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({basket_id: id, valueQuantity: valueQuantity})
        })
            .then((response) => response.json())
            .then((data) => dispatch(Basket()))
            .then(() => dispatch(Purchases()))
    }
}


export function Purchases() {
    return function (dispatch) {
        fetch('/api/purchases')
            .then(response => response.json())
            .then(purchasesList => dispatch(addPurchasesList(purchasesList)))
    }
}

export function addPurchases(pro_list) {
    return function (dispatch) {
        fetch('/api/add_purchases', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({pro_list: pro_list})
        })
            .then(() => dispatch(Basket()))
    }
}

