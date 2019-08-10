import { FETCH_HOTELS } from "config/types"
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
