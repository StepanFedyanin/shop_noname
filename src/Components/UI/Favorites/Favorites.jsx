import React, {useEffect, useRef, useState} from 'react'
import anFavoritesIcon from '../../../Resurces/Img/favorites.svg'
import favoritesIcon from '../../../Resurces/Img/favoritesFill.svg'

function Favorites({favorite_boulean, fun, funElse}) {
    const [favorit, setFavorit] = useState(favorite_boulean);
    useEffect(()=>{
        setFavorit(favorite_boulean);
    },[favorite_boulean])
    const FavoriteChnage = (value) => {
        if (value) {
            setFavorit(false);
            funElse();
        } else {
            setFavorit(true);
            fun();
        }
    }
    return (
        <div>
            {
                favorit ?
                    <button onClick={() => {
                        FavoriteChnage(true);
                    }}>
                        <img src={favoritesIcon} alt="favoritesIcon"/>
                    </button>
                    :
                    <button onClick={() => {
                        FavoriteChnage(false);
                    }}>
                        <img src={anFavoritesIcon} alt="favoritesIcon"/>
                    </button>
            }


        </div>
    )
}

export default Favorites
