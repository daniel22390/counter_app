
import {
  INCLUDE_COUNTER,
  REMOVE_COUNTER,
  INC_COUNTER,
  DEC_COUNTER,
  RESET_COUNTER
} from './actionTypes'

const objPayload = (type, name) => {
  return  {
    type: type,
    payload: {
      name
    }
  }
}

export const includeCounter = (name) => {
  return objPayload(INCLUDE_COUNTER, name)
}

export const removeCounter = (name) => {
  return objPayload(REMOVE_COUNTER, name)
}

export const INC_COUNTER = (name) => {
  return objPayload(INC_COUNTER, name)
}

export const DEC_COUNTER = (name) => {
  return objPayload(DEC_COUNTER, name)
}

export const RESET_COUNTER = (name) => {
  return objPayload(RESET_COUNTER, name)
}