import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchSingleHotel } from "actions"

const SingleHotel = props => {
  const {
    match: {
      params: { id }
    }
  } = props

  const dispatch = useDispatch()

  const hotelDetails = useSelector(state => state.singleHotel)

  useEffect(() => {
    dispatch(fetchSingleHotel(id))
  }, [])

  return (
    <div>Single hotel page {console.log(hotelDetails.fields.hotelName)}</div>
  )
}

export default SingleHotel
