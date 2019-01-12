
import { GET_EVENT_SUCCESS, GET_EVENT_FAIL } from './../constants/event'

const initialState = {
  event: {
  	body_text:'',
  	description:'',
  	images: [],
  	dates: {
  		start_date: ''
  	},
  	place: {
  		address:'',
  		title:''
  	}
  },
  error: null
}

export default function data(state = initialState, action) {
	switch (action.type) {
		case GET_EVENT_SUCCESS:
		 	return {...state,
		 			 event: action.payload,
           error: null
		 			}	
		case GET_EVENT_FAIL:
			return {...state,
					error: action.payload
					}				
		default:
    		return state;
  }
}

