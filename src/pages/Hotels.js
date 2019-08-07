import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchHotels } from "actions"
import Card from "components/Card"
import styled from "styled-components"
import FacetedSearch from "components/FacetedSearch"

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
    return hotelList.map(hotel => <Card key={hotel.sys.id} hotel={hotel} />)
  }

  return (
    <div>
      <FacetedSearch />
      <CardWrapper>{renderCards(hotelList)}</CardWrapper>
    </div>
  )
}

export default Hotels
