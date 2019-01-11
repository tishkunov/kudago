import React from 'react'


function EventItem({title, image, place}) {
	return (
		<div className="card col-md-4 col-lg-4 col-xs-12 card__eventItem">
		  <img className="card-img-top" src={image} alt={title} />
		  <div className="card-body">
		    <h5 className="card-title">{title}</h5>
		    <p className="card-text">{place}</p>
		    <a href="#" className="btn btn-primary">Go somewhere</a>
		  </div>
		</div>	
	)
}


export default EventItem
