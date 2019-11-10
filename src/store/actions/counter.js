
import {
  INCLUDE_COUNTER,
  REMOVE_COUNTER,
  INC_COUNTER,
  DEC_COUNTER,
  RESET_COUNTER,
  SELECT_COUNTER
} from './actionTypes'

const objPayload = (type, position) => {
  return  {
    type: type,
    payload: {
      position
    }
  }
}

export const includeCounter = () => {
  return  {
    type: INCLUDE_COUNTER
  }
}

export const removeCounter = (position) => {
  return objPayload(REMOVE_COUNTER, position)
}

export const incCounter = (position) => {
  return objPayload(INC_COUNTER, position)
}

export const decCounter = (position) => {
  return objPayload(DEC_COUNTER, position)
}

export const resetCounter = (position) => {
  return objPayload(RESET_COUNTER, position)
}

export const selectCounter = (position) => {
  return objPayload(SELECT_COUNTER, position)
}