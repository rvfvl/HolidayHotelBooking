import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import Button from "components/Button"
import client from "config/contentfulApi"
import LoadingBar from "components/LoadingBar"
import { addToFavourites, removeFromFavourites } from "actions"

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

  const [hotelDetails, setHotelDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const favouriteHotel = useSelector(state =>
    state.favouriteHotels.favouriteList.filter(hotel => hotel.sys.id === id)
  )

  const fetchHotelDetails = async () => {
    const results = await client.getEntry(id)
    setHotelDetails(results)
    setLoading(false)
  }

  useEffect(() => {
    fetchHotelDetails()
  }, [])

  if (loading) {
    return <LoadingBar />
  }

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

  const isFavouriteHotel = favouriteHotel.length

  const handleFavouriteButton = () => {
    if (isFavouriteHotel <= 0) {
      dispatch(addToFavourites(hotelDetails))
    } else {
      dispatch(removeFromFavourites(hotelDetails))
    }
  }

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
            <p>
              <Button onClick={handleFavouriteButton}>
                {isFavouriteHotel > 0
                  ? "Remove from favourites"
                  : "Add to favourites"}
              </Button>
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
