import React from "react"
import styled from "styled-components"
import { MdLocalHotel } from "react-icons/md"

const StyledCard = styled.div`
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  flex: 1 0 1;
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
    sys: { id },
    fields: {
      city,
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
    <StyledCard key={id}>
      <CardImage src={url} alt={city} />
      <CardTitle>{city}</CardTitle>
      <small>{street}</small>
      <StyledIcons>
        <div>
          <MdLocalHotel /> {noOfRooms}
        </div>
        <div>
          <MdLocalHotel /> {noOfBathrooms}
        </div>
      </StyledIcons>
    </StyledCard>
  )
}

export default Card
