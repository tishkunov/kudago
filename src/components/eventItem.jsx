import React from 'react'


function EventItem({title, image, place, dateStart}) {
	return (
		<div className="card col-md-6 col-lg-6 col-xs-12 card__eventItem">
		  <img className="card-img-top" src={image} alt={title} />
		  <div className="card-body">
		    <h5 className="card-title">{title}</h5>
		    <p className="card-text">{place}
		    	<br/> 
		    	Начало: {dateStart.start_date} {dateStart.start_time}
		    	<br/>
		    	Окончание: {dateStart.end_time} </p>
		    <a href="#" className="btn btn-primary">Go somewhere</a>
		  </div>
		</div>	
	)
}


export default EventItem
