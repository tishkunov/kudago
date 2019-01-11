import { GET_EVENTS_SUCCESS } from './../constants/events'
import { SET_PAGE } from './../constants/pagination'

const initialState = {
  currentPage: 1,
  countPages: 10
}

export default function data(state = initialState, action) {
	switch (action.type) {
		case GET_EVENTS_SUCCESS:
		 	return {...state,
		 			 currentPage:1, 
		 			 countPages: Math.ceil(action.payload.length/10)
		 			}	
		case SET_PAGE:
			return {...state, currentPage:action.payload}
		default:
    		return state;
  }
}

