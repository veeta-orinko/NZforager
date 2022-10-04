import { combineReducers } from 'redux'
import plantReducer from './plants'
// import stuff from './stuff'

export default combineReducers({
  plants: plantReducer,
  // stuff
})
