import { FETCH_SINGLE_HOTEL } from "config/types"

const initialState = {
  fields: {
    hotelName: "",
    stars: null,
    description: "",
    city: "",
    street: "",
    pricePerNight: null,
    noOfRooms: null,
    noOfBathrooms: null,
    image: { fields: { file: { url: "" } } }
  },
  sys: {
    id: ""
  }
}

const singleHotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_HOTEL:
      return { ...action.payload }
    default:
      return state
  }
}

export default singleHotelReducer
