import { combineReducers } from "redux"
import hotelsReducer from "reducers/hotelsReducer"
import favouriteHotelsReducer from "reducers/favouriteHotelsReducer"

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  favouriteHotels: favouriteHotelsReducer
})

export default rootReducer
