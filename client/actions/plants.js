import { get_plants, post_plant } from '../apis/plants'
export const ADD_PLANT = 'ADD_PLANT'
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

export function send_plant(planty) {
  return (dispatch) => {
    return post_plant(planty)
      .then((plant) => {
        dispatch(add_plant(plant))
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

export function add_plant(plant) {
  return {
    type: ADD_PLANT,
    payload: plant,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}
