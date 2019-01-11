import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './sagas'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedData = loadState();


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  persistedData,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.subscribe(throttle(() => {
	saveState({
		events: store.getState().events
	})
}, 1000))

export default store;