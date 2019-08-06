const hotelsReducer = (state = [], action) => {
  switch (action.type) {
    case "TEST":
      console.log(state)
      break
    default:
      return state
  }
}

export default hotelsReducer
