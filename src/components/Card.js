import React from "react"
import styled from "styled-components"
import { MdLocalHotel } from "react-icons/md"

const StyledCard = styled.div`
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  flex: 1 0 1;
  position: relative;
`

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const CardImage = styled.img`
  height: 200px;
  width: 200px;
`

const CardPrice = styled.div`
  position: absolute;
  padding: 0.5rem;
  top: 0;
  left: 0;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.5rem;
  }
`

const StyledIcons = styled.div`
  display: flex;
  justify-content: center;

  svg {
    vertical-align: top;
  }

  div {
    margin: 0.5rem 0;
    flex: 1;
  }
`

const Card = ({ hotel }) => {
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
  } = hotel

  return (
    <StyledCard>
      <CardImage src={url} alt={city} />
      <CardPrice>
        <span>${pricePerNight}</span>
        <small>Price Per Night</small>
      </CardPrice>
      <CardTitle>{hotelName}</CardTitle>
      <small>
        {city}
        <br />
        {street}
      </small>
      <StyledIcons>
        <div>
          <MdLocalHotel /> {noOfRooms}
        </div>
        <div>
          <MdLocalHotel /> {noOfBathrooms}
        </div>
        <div>
          <MdLocalHotel /> {stars}
        </div>
      </StyledIcons>
    </StyledCard>
  )
}

export default Card
