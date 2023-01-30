import React, { useState } from 'react'
import anFavoritesIcon from '../../../Resurces/Img/favorites.svg'
import favoritesIcon from '../../../Resurces/Img/favoritesFill.svg'

function Favorites() {
	const [favorit, setFavorit] = useState(false)
	return (
		<div>
			{
				favorit ?
					<button onClick={() => setFavorit(false)}>
						<img src={favoritesIcon} alt="favoritesIcon" />
					</button>
					:
					<button onClick={() => setFavorit(true)}>
						<img src={anFavoritesIcon} alt="favoritesIcon" />
					</button>
			}


		</div>
	)
}

export default Favorites