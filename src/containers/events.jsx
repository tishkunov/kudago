import React, { Component } from 'react'
import './../App.css'
import { connect } from 'react-redux'
import { getEvents } from './../actions/events'
import { fetching } from './../actions/loader'
import EventItem from './../components/eventItem'
import LoaderHOC from './../HOC/Loader'
import { eventsSelector } from './../helpers/eventsPaginationSelector'
import PropTypes from 'prop-types'



class Events extends Component {
  state = {
    
  }

  componentDidMount () {
    const { events, getEvents, fetching } = this.props
    if (events.length === 0) {
      fetching()
      getEvents()
    }
      
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
  loading: state.loader.loading
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => {
    dispatch(getEvents())
  },
  fetching: () => {
    dispatch(fetching())
  }
})

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
     title: PropTypes.string.isRequired,
     images: PropTypes.array.isRequired,
     place: PropTypes.object.isRequired,
     dates: PropTypes.array.isRequired
   })).isRequired,
};



export default connect(mapStateToProps, mapDispatchToProps)(LoaderHOC(Events))