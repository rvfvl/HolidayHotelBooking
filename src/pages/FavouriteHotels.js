import React from "react"
import { useSelector } from "react-redux"
import CardContainer from "components/CardContainer"
import Card from "components/Card"

const FavouriteHotels = () => {
  const favouriteHotelList = useSelector(
    state => state.favouriteHotels.favouriteList
  )

  const renderList = () => {
    return favouriteHotelList.map(hotel => (
      <Card key={hotel.sys.id} hotel={hotel} />
    ))
  }

  const hasFavourites = favouriteHotelList.length

  return (
    <CardContainer>
      {hasFavourites ? (
        renderList()
      ) : (
        <h1>Your favourite hotel list is empty.</h1>
      )}
    </CardContainer>
  )
}

export default FavouriteHotels
