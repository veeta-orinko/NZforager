import { get_plants } from '../apis/plants'

export const SHOW_PLANTS = 'SHOW_PLANTS'
export const SET_ERROR = 'SET_ERROR'

//Thunk
export function fetch_plants() {
  return (dispatch) => {
    return get_plants()
      .then((plants) => {
        dispatch(show_plants(plants))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

// Simple action
export function show_plants(plants) {
  return {
    type: SHOW_PLANTS,
    payload: plants,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}
