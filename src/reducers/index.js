import { combineReducers } from "redux"
import hotelsReducer from "reducers/hotelsReducer"
import singleHotelReducer from "reducers/singleHotelReducer"

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  singleHotel: singleHotelReducer
})

export default rootReducer
