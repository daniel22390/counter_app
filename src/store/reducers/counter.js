import {
  INCLUDE_COUNTER,
  REMOVE_COUNTER,
  INC_COUNTER,
  DEC_COUNTER,
  RESET_COUNTER,
  SELECT_COUNTER
} from '../actions/actionTypes'

const initialState = {
  counters: [],
  selected: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCLUDE_COUNTER:
      return {
        ...state,
        counters: [
          ...state.counters,
          {
            count: 0
          }
        ],
        selected: state.selected === null ? 0 : state.selected
      }
    case REMOVE_COUNTER:
      let counter_copy = [...state.counters]
      counter_copy.splice(action.payload.position, 1)

      return {
        ...state,
        counters: counter_copy,
        selected: counter_copy.length === 0 ? null : 0
      }
    case INC_COUNTER:
      return {
        ...state,
        counters: state.counters.map(
          function (item, index) {
            if (index === action.payload.position) {
              item.count++
            }
            return item
          }
        )
      }
    case DEC_COUNTER:
      return {
        ...state,
        counters: state.counters.map(
          function (item, index) {
            if (index === action.payload.position && item.count > 0) {
              item.count--
            }
            return item
          }
        )
      }
    case RESET_COUNTER:
      return {
        ...state,
        counters: state.counters.map(
          function (item, index) {
            if (index === action.payload.position) {
              item.count = 0
            }
            return item
          }
        )
      }
    case SELECT_COUNTER:
      return {
        ...state,
        selected: action.payload.position
      }
    default:
      return state
  }
}

export default reducer