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
// Список должен состоять из колонок: 
// 1 - дата/время ивента 
// 2 - картинка ивента 
// 3 - название ивента 
// 4 - название места 
// 5 - адрес места