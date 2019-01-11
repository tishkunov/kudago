import React from 'react'
import Carousel from 'nuka-carousel'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function EventComponent({title, site_url, place, dates, body_text, description, images}) {
	
	// При загрузке диспатчится событие из-за того, что библиотека не загружает первое изображени
	// Скролл на самый верх из-за карусели, начальная высота слишком большая
	return (
         	<div className="card mb-3 event">
         		<Link to='/'>Вернуться на главную страницу</Link>
         		<Carousel>  
					{images.map((item,i) => (
						<img onLoad={() => {window.dispatchEvent(new Event('resize'));window.scrollTo(0,0)}} key={i} className="card-img-top" src={item.image} alt={title}/>
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

EventComponent.propTypes = {
	title: PropTypes.string,
    images: PropTypes.array,
    place: PropTypes.object,
    site_url: PropTypes.string,
    description: PropTypes.string,
}

export default EventComponent