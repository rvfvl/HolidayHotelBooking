import { combineReducers } from "redux"
import hotelsReducer from "reducers/hotelsReducer"

const rootReducer = combineReducers({
  hotels: hotelsReducer
})

export default rootReducer
