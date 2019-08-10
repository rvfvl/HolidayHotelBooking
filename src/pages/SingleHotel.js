import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchSingleHotel } from "actions"
import styled from "styled-components"
import Button from "components/Button"
import device from "theme/mediaQueries"

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
  padding: 2rem;
  margin-top: 1rem;
  box-shadow: ${({ theme }) => theme.cardShadow};

  h1 {
    text-align: center;
  }

  div {
    margin: 0 5rem;
    flex: 1 1 0;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;

  strong {
    display: inline-block;
    margin-bottom: 10px;
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
        <h1>{hotelName}</h1>
        <FlexContainer>
          <div>
            <p>
              <strong>City:</strong> {city}
            </p>
            <p>
              <strong>Street:</strong> {street}
            </p>
          </div>
          <div>
            <p>
              <strong>Price:</strong> ${pricePerNight} per night
            </p>
            <p>
              <strong>Rating:</strong> {stars} stars
            </p>
            <p>
              <strong>Number of rooms:</strong> {noOfRooms}
            </p>
            <p>
              <strong>Number of bathrooms:</strong> {noOfBathrooms}
            </p>
          </div>
        </FlexContainer>
      </HotelDetailsWrapper>
    </>
  )
}

export default SingleHotel
