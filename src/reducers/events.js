import { GET_EVENTS_SUCCESS } from './../constants/events'

const initialState = {
  events: [],
}

export default function data(state = initialState, action) {
	switch (action.type) {
		case GET_EVENTS_SUCCESS:
		 	return {...state,
		 			 events: action.payload,
		 			}	
		default:
    		return state;
  }
}

