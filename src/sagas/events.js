import { put, takeEvery, call } from 'redux-saga/effects';
import { getEvents } from './../api'
import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAIL} from './../constants/events'
import { FETCHING_SUCCESS } from './../constants/loader'
import { dateFilter } from './../helpers/dateFilter'

export const events = [
  takeEvery(GET_EVENTS, getEventsSaga), 
]


function* getEventsSaga(action) {
  try {
	const data = yield call(getEvents)

	const filteredData = data.sort(dateFilter)
	
    yield put({ type: GET_EVENTS_SUCCESS , payload:filteredData})
    yield put({ type: FETCHING_SUCCESS , payload:data}) // Отмена лоадера  

  } catch(e) {
    yield put({ type: GET_EVENTS_FAIL , payload:e})
  }
}




