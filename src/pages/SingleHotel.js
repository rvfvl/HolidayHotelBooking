import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchSingleHotel } from "actions"
import styled from "styled-components"
import Button from "components/Button"

const MainImageWrapper = styled.div`
  position: relative;

  img {
    object-fit: cover;
    width: 100vw;
    height: 300px;
  }

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid #fff;
    transform: translate(-50%, -50%);
  }
`

const HotelDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  div {
    margin: 0 5rem;
  }
`

const SingleHotel = props => {
  const {
    history: { goBack },
    match: {
      params: { id }
    }
  } = props

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSingleHotel(id))
  }, [])

  const hotelDetails = useSelector(state => state.singleHotel)

  const {
    fields: {
      city,
      hotelName,
      pricePerNight,
      stars,
      street,
      noOfBathrooms,
      noOfRooms,
      image: {
        fields: {
          file: { url }
        }
      }
    }
  } = hotelDetails

  return (
    <>
      <MainImageWrapper>
        <img src={url} alt={hotelName} />
        <Button onClick={goBack}>Go Back</Button>
      </MainImageWrapper>

      <HotelDetailsWrapper>
        <div>
          <h1>{hotelName}</h1>
          <p>City: {city}</p>
          <p>Street: {street}</p>
        </div>
        <div>
          <p>Price: ${pricePerNight} per night</p>
          <p>Rating: {stars} stars</p>
          <p>Number of rooms: {noOfRooms}</p>
          <p>Number of bathrooms: {noOfBathrooms}</p>
        </div>
      </HotelDetailsWrapper>
    </>
  )
}

export default SingleHotel
