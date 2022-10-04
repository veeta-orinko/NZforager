import { SHOW_PLANTS } from '../actions/plants'

const initialState = []

const plantReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SHOW_PLANTS:
      return payload

    default:
      return state
  }
}

export default plantReducer
