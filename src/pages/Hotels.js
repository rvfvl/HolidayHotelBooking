import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchHotels } from "actions"
import Card from "components/Card"
import styled from "styled-components"

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Hotels = () => {
  const dispatch = useDispatch()
  const hotelList = useSelector(state => state.hotels)

  useEffect(() => {
    dispatch(fetchHotels())
  }, [])

  const renderCards = hotelList => {
    return hotelList.map(hotel => <Card hotel={hotel} />)
  }

  return (
    <div>
      <CardWrapper>{renderCards(hotelList)}</CardWrapper>
    </div>
  )
}

export default Hotels
