import { put, takeEvery, call } from 'redux-saga/effects';
import { getEvent } from './../api'
import { GET_EVENT, GET_EVENT_SUCCESS, GET_EVENT_FAIL} from './../constants/event'
import { FETCHING_SUCCESS } from './../constants/loader'

export const event = [
  takeEvery(GET_EVENT, getEventSaga), 
]


function* getEventSaga(action) {
  try {
  	const id = {id: action.payload}
  	console.log(id)
	const data = yield call(getEvent, action.payload)
	console.log(data)
    yield put({ type: GET_EVENT_SUCCESS , payload:data})
    yield put({ type: FETCHING_SUCCESS , payload:data}) // Отмена лоадера  

  } catch(e) {
    yield put({ type: GET_EVENT_FAIL , payload:e})
  }
}




