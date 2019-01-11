import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPage } from './../actions/pagination'
import Pagination from 'react-ultimate-pagination-bootstrap-4';

class PaginationEvents extends Component {

	handleClick = (pageNumber) => {
	    this.props.setPage(pageNumber)
	    window.scrollTo(0, 0);
  	}

  	render() {
  		const { countPages, currentPage } = this.props
  		return (
  			        <Pagination
	        currentPage={currentPage}
	        totalPages={countPages}
	        onChange={this.handleClick}/>
  		)
  	}
}



const mapStateToProps = state => ({
  countPages: state.pagination.countPages,
  currentPage: state.pagination.currentPage
})




export default connect(mapStateToProps, {setPage})(PaginationEvents)