import { all } from 'redux-saga/effects';

import { events } from './events'


 function* rootSaga() {
  yield all([
    ...events,
  ])
}


export default rootSaga;