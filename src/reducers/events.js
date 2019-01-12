import { GET_EVENTS_SUCCESS, GET_EVENTS_FAIL } from './../constants/events'

const initialState = {
  events: [],
  error: null
}

export default function data(state = initialState, action) {
	switch (action.type) {
		case GET_EVENTS_SUCCESS:
		 	return {...state,
		 			 events: action.payload,
		 			 error: null
		 			}	
		case GET_EVENTS_FAIL: 
			return {...state,
					error:action.payload
					}			
		default:
    		return state;
  }
}

