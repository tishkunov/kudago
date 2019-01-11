import React from 'react'
import Carousel from 'nuka-carousel'
import { Link } from 'react-router-dom'

function EventComponent({title, site_url, place, dates, body_text, description, images}) {
	return (
         	<div className="card mb-3 event">
         		<Link to='/'>Вернуться на главную страницу</Link>
         		<Carousel>
					{images.map((item,i) => (
						<img key={i} className="card-img-top" src={item.image} alt={title}/>
					))}
         		</Carousel>
				
				<div className="card-body">
			    	<h5 className="card-title">{title}</h5>
			    	<p className="card-text">{body_text}</p>
			    	<p className="card-text">Дата проведения: {dates.start_date ? dates.start_date : 'Ежедневно'} </p>
			    	<p className="card-text">Место проведения: {place.title } , {place.address} </p>
			    	<a href={site_url}>Узнать подробнее на сайте</a>
				</div>
			</div>
	)
}

export default EventComponent