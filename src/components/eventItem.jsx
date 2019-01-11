import React from 'react'


function EventItem({title, image, place}) {
	return (
		<div>
			<h2>{title}</h2>
			<img src={image} alt={title} />
			<p>{place}</p>
			<p></p>
			<small></small>
		</div>
	)
}


export default EventItem
