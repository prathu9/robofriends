import React from 'react';
import './robofriend.css';

const Card = ({name, email, id})=>{
	return(
		<div className="brW tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?size=200x200`} alt=""/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

	)
}

export default Card;

