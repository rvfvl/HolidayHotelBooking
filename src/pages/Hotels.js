import React, { useState, useEffect } from "react"
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
  const [filters, setFilters] = useState({})
  const [updatedList, setUpdatedList] = useState([])

  useEffect(() => {
    dispatch(fetchHotels())
  }, [dispatch])

  useEffect(() => {
    setUpdatedList(hotelList)
  }, [hotelList])

  const filterList = () => {
    let filteredList = updatedList

    if (filters.name !== "") {
      filteredList = filteredList.filter(item =>
        item.fields.hotelName.toLowerCase().includes(filters.name.toLowerCase())
      )
    }

    filteredList = filteredList.filter(
      item => item.fields.pricePerNight <= filters.price
    )

    if (filters.stars !== "") {
      filteredList = filteredList.filter(
        item => item.fields.stars === parseInt(filters.stars, 10)
      )
    }

    return filteredList
  }

  const renderCards = () => {
    const hotelList = filterList()

    return hotelList.map(hotel => <Card key={hotel.sys.id} hotel={hotel} />)
  }

  return (
    <div>
      <FacetedSearch setFilters={setFilters} />
      <CardWrapper>{renderCards(hotelList)}</CardWrapper>
    </div>
  )
}

export default Hotels
