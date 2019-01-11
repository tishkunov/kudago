import React from 'react'
import { Link } from 'react-router-dom'

function EventItem({title, image, place, dateStart, id}) {
	return (
		<div className="card col-md-6 col-lg-6 col-xs-12 card__eventItem">
		  <img className="card-img-top" src={image} alt={title} />
		  <div className="card-body">
		    <Link  to={`/events/${id}`}>
		    	<h5 className="card-title">{title}</h5>
		    </Link>	
		    <p className="card-text">{place}
		    	<br/> 
		    	Начало: {dateStart.start_date} {dateStart.start_time}
		    	<br/>
		    	Окончание: {dateStart.end_time} </p>
		    <Link className="btn btn-primary" to={`/events/${id}`}>Посмотреть </Link>	
		    
		  </div>
		</div>	
	)
}


export default EventItem
