import { START_FETCHING, FETCHING_SUCCESS } from './../constants/loader'

const initialState = {
  loading: false,
}

export default function data(state = initialState, action) {
	switch (action.type) {
		case START_FETCHING:
		 	return {...state, loading:true}	
		case FETCHING_SUCCESS:
			return {...state, loading: false} 	
		default:
    		return state;
  }
}

