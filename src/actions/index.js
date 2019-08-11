import {
  FETCH_HOTELS,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE
} from "config/types"
import client from "config/contentfulApi"

export const fetchHotels = () => {
  return async (dispatch, getState) => {
    const results = await client.getEntries()
    dispatch({
      type: FETCH_HOTELS,
      payload: results
    })
  }
}

export const addToFavourites = hotel => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: hotel
  }
}

export const removeFromFavourites = hotel => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: hotel.sys.id
  }
}
