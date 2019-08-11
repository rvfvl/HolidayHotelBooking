import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchHotels } from "actions"
import Card from "components/Card"
import CardContainer from "components/CardContainer"
import FacetedSearch from "components/FacetedSearch"
import LoadingBar from "components/LoadingBar"

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

  if (hotelList.length === 0) {
    return <LoadingBar />
  }

  return (
    <div>
      <FacetedSearch setFilters={setFilters} />
      <CardContainer>{renderCards(hotelList)}</CardContainer>
    </div>
  )
}

export default Hotels
