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
          {
            count: 0
          },
          ...state.counters,
        ],
        selected: state.selected === null ? 0 : state.selected
      }
    case REMOVE_COUNTER:
      return {
        ...state,
        counters: [state.counters.slice(0, action.payload.position), ...state.counters.slice(action.payload.position + 1)],
        selected:
          state.selected === action.payload.position ?
            (
              state.counters.length === 1 ? null : 0
            )
            :
            state.selected
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