import { FETCH_HOTELS } from "config/types"

const hotelsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_HOTELS:
      return action.payload.items
    default:
      return state
  }
}

export default hotelsReducer
