import React, { Component } from 'react'
import './../App.css'
import { connect } from 'react-redux'
import { getEvents } from './../actions/events'
import { fetching } from './../actions/loader'
import EventItem from './../components/eventItem'
import LoaderHOC from './../HOC/Loader'
import { eventsSelector } from './../helpers/eventsPaginationSelector'
import PropTypes from 'prop-types'
import PaginationEvents from './pagination'


class Events extends Component {

  componentDidMount () {
    const { events, getEvents, fetching } = this.props
    console.log(events.length)
    if (events.length === 0) {
      fetching()
      getEvents()
    }
   
  }


  render() {
    // const sorting = (a,b) => a.dates[a.dates.length-1].
    const { events, error } = this.props
    console.log(events)
    return (
      <div className="events">
        {error && 'Ошибка при загрузке событий, попробуйте перезагрузить страницу'}
        {events.map((item,i) => {
          return (
              <EventItem 
                key={i}
                title={item.title}
                image={item.images[0].image}
                place={item.place.title + ', ' + item.place.address}
                dateStart={item.dates[item.dates.length-1]}
                id={item.id}
               />
            )
        })}
        <PaginationEvents/>   
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: eventsSelector(state),
  loading: state.loader.loading,
  error: state.events.error
})



Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
     title: PropTypes.string.isRequired,
     images: PropTypes.array.isRequired,
     place: PropTypes.object.isRequired,
     dates: PropTypes.array.isRequired,
     id: PropTypes.number.isRequired
   })).isRequired,
};



export default connect(mapStateToProps, { getEvents, fetching})(LoaderHOC(Events))