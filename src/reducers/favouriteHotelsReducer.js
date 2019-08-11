import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "config/types"

const favouriteHotelsReducer = (state = { favouriteList: [] }, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favouriteList: [...state.favouriteList, action.payload]
      }
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favouriteList: [
          ...state.favouriteList.filter(
            hotel => hotel.sys.id !== action.payload
          )
        ]
      }
    default:
      return state
  }
}

export default favouriteHotelsReducer
