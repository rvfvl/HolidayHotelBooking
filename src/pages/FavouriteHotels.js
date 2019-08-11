import React from "react"
import { useSelector } from "react-redux"
import CardContainer from "components/CardContainer"
import Card from "components/Card"

const FavouriteHotels = () => {
  const favouriteHotelList = useSelector(
    state => state.favouriteHotels.favouriteList
  )

  return (
    <CardContainer>
      {favouriteHotelList.map(hotel => (
        <Card key={hotel.sys.id} hotel={hotel} />
      ))}
    </CardContainer>
  )
}

export default FavouriteHotels
