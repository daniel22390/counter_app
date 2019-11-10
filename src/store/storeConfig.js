import { createStore, combineReducers } from 'redux'
import counterReducer from './reducers/counter'

const reducers = combineReducers({
  counters: counterReducer
})

const storeConfig = () => {
  return createStore(reducers)
}

export default storeConfig