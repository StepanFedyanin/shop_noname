import React from 'react'
import './ReviewsList.scss'
import starIcon from '../../Resurces/Img/Star.svg'
import starHalfIcon from '../../Resurces/Img/StarHalf.svg'
import starFillIcon from '../../Resurces/Img/StarFill.svg'
const collectionValues = (reviews) => {
	const collection = [];
	let countCollection = 5;
	let countStar = reviews;
	for (let index = 0; index < countCollection; index++) {
		if (countStar - 1 > -0.5) {
			collection.push(starFillIcon);
			countStar--;
			continue;
		}
		else if (countStar - 0.5 == 0) {
			collection.push(starHalfIcon);
			countStar = countStar - 0.5;
			continue;
		}
		else {
			collection.push(starIcon);
		}
	}
	return collection;
}

function ReviewsList({ reviews }) {
	return (
		<div className='ReviewsList'>
			{
				collectionValues(reviews).map((star, index) =>
					<div key={"star" + index} className="">
						<img src={star} alt="star" />
					</div>
				)
			}
		</div>
	)
}

export default ReviewsList