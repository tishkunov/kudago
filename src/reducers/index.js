import { combineReducers } from "redux";
import events from './events'
import loader from './loader'


const rootReducer = combineReducers({
	events,
	loader,
})

export default rootReducer;