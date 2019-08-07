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
  const [filteredList, setFilteredList] = useState({})
  const [updatedList, setUpdatedList] = useState([])

  useEffect(() => {
    dispatch(fetchHotels())
  }, [])

  const filterList = list => {
    let updatedList = list

    if (filteredList.name !== "") {
      updatedList = updatedList.filter(item =>
        item.fields.hotelName
          .toLowerCase()
          .includes(filteredList.name.toLowerCase())
      )
    }

    updatedList = updatedList.filter(
      item => item.fields.pricePerNight <= filteredList.price
    )

    if (filteredList.stars !== "") {
      updatedList = updatedList.filter(
        item => item.fields.stars === parseInt(filteredList.stars, 10)
      )
    }

    setUpdatedList(updatedList)
  }

  const renderCards = hotelList => {
    return hotelList.map(hotel => <Card key={hotel.sys.id} hotel={hotel} />)
  }

  return (
    <div>
      <FacetedSearch setFilteredList={setFilteredList} />
      {console.log(updatedList)}
      <CardWrapper>{renderCards(hotelList)}</CardWrapper>
    </div>
  )
}

export default Hotels
