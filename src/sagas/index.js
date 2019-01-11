import { all } from 'redux-saga/effects';

import { events } from './events'
import { event } from './event'

 function* rootSaga() {
  yield all([
    ...events,
    ...event,
  ])
}


export default rootSaga;