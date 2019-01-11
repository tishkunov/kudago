import React, { Component } from 'react'
import './../App.css'
import { connect } from 'react-redux'
import { getEvents } from './../actions/events'
import EventItem from './../components/eventItem'
import { eventsSelector } from './../helpers/eventsPaginationSelector'

class Events extends Component {
  state = {
    
  }

  componentDidMount () {
    const { events, getEvents } = this.props
    events === undefined && getEvents()
      
  }

  render() {
    const { events } = this.props
    return (
      <div className="events">
        {events.map((item,i) => {
          return (
              <EventItem 
                key={i}
                title={item.title}
                image={item.images[0].image}
                place={item.place.title + ', ' + item.place.address}
                dateStart={item.dates[item.dates.length-1]}
               />
            )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: eventsSelector(state),
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => {
    dispatch(getEvents())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Events)