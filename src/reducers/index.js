import { combineReducers } from "redux";
import events from './events'
import loader from './loader'
import pagination from './pagination'
import event from './event'

const rootReducer = combineReducers({
	events,
	loader,
	pagination,
	event
})

export default rootReducer;