import { put, takeEvery, call } from 'redux-saga/effects';
import { getEvents } from './../api'
import { GET_EVENTS, GET_EVENTS_SUCCESS } from './../constants/events'
import { FETCHING_SUCCESS } from './../constants/loader'

export const events = [
  takeEvery(GET_EVENTS, getEventsSaga), 
]


function* getEventsSaga(action) {
  try {
	const data = yield call(getEvents)
	
    yield put({ type: GET_EVENTS_SUCCESS , payload:data})
    yield put({ type: FETCHING_SUCCESS , payload:data})  

  } catch(e) {
    console.error(e)
  }
}




