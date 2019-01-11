import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEvent } from './../actions/event'
import { fetching } from './../actions/loader'
import LoaderHOC from './../HOC/Loader'
import PropTypes from 'prop-types'
import EventComponent from './../components/event'
import { removeTags } from './../helpers/removeHTMLtags'

class Event extends Component {

  componentDidMount () {
    const { match, getEvent, fetching } = this.props
    getEvent(match.params.id) && fetching()
  }


  render() {
    const { body_text,
            dates,
            description,
            images, 
            site_url, 
            place, 
            title
            } = this.props.event

    return <EventComponent 
              images={images}
              title={title}
              site_url={site_url}
              place={place}
              dates={dates}
              body_text={removeTags(body_text)}
              description={removeTags(description)}
                       />
  }
}

const mapStateToProps = state => ({
  loading: state.loader.loading,
  event: state.event.event
})

const mapDispatchToProps = dispatch => ({
  getEvent: (id) => {
    dispatch(getEvent(id))
  },
  fetching: () => {
    dispatch(fetching())
  },
})

Event.propTypes = {
  event: PropTypes.arrayOf(PropTypes.shape({
     title: PropTypes.string.isRequired,
     images: PropTypes.array.isRequired,
     place: PropTypes.object.isRequired,
     dates: PropTypes.array.isRequired,
     site_url: PropTypes.string.isRequired,
     body_text: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
   })).isRequired,
};



export default connect(mapStateToProps, mapDispatchToProps)(LoaderHOC(Event))