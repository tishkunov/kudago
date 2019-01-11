import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEvent } from './../actions/event'
import { fetching } from './../actions/loader'
import LoaderHOC from './../HOC/Loader'
import PropTypes from 'prop-types'



class Event extends Component {

  componentDidMount () {
    const { match, getEvent, fetching } = this.props
    getEvent(match.params.id) && fetching()
    console.log(match.params.id)
  }


  render() {

    return (
      <div className="event">
         
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loader.loading,
  // error: state.events.error
})

const mapDispatchToProps = dispatch => ({
  getEvent: (id) => {
    dispatch(getEvent(id))
  },
  fetching: () => {
    dispatch(fetching())
  },
})

// Events.propTypes = {
//   events: PropTypes.arrayOf(PropTypes.shape({
//      title: PropTypes.string.isRequired,
//      images: PropTypes.array.isRequired,
//      place: PropTypes.object.isRequired,
//      dates: PropTypes.array.isRequired,
//      id: PropTypes.number.isRequired
//    })).isRequired,
// };



export default connect(mapStateToProps, mapDispatchToProps)(LoaderHOC(Event))