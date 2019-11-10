import { createStore, combineReducers } from 'redux'
import modalReducer from './reducers/modal'
import counterReducer from './reducers/counter'

const reducers = combineReducers({
  modal: modalReducer,
  counters: counterReducer
})

const storeConfig = () => {
  return createStore(reducers)
}

export default storeConfig