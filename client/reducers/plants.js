import { SHOW_PLANTS, ADD_PLANT } from '../actions/plants'

const initialState = []

const plantReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SHOW_PLANTS:
      return payload
    case ADD_PLANT:
      return [...state, payload]

    default:
      return state
  }
}

export default plantReducer
