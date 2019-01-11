import { GET_EVENTS_SUCCESS } from './../constants/events'

const initialState = {
  events: [],
  currentPage: 2
}

export default function data(state = initialState, action) {
	switch (action.type) {
		case GET_EVENTS_SUCCESS:
		 	return {...state, events: action.payload, currentPage:2}	
		
		default:
    		return state;
  }
}

