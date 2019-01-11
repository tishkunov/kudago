import { combineReducers } from "redux";
import events from './events'
import loader from './loader'
import pagination from './pagination'

const rootReducer = combineReducers({
	events,
	loader,
	pagination
})

export default rootReducer;