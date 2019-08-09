import { FETCH_HOTELS, FETCH_SINGLE_HOTEL } from "config/types"
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

export const fetchSingleHotel = id => {
  return async (dispatch, getState) => {
    const results = await client.getEntry(id)
    dispatch({
      type: FETCH_SINGLE_HOTEL,
      payload: results
    })
  }
}
