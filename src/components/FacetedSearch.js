import React, { useState, useEffect } from "react"
import styled from "styled-components"

const FacetedSearchWrapper = styled.div`
  background-color: yellow;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`

const StyledSearchBy = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  align-items: center;

  small {
    font-weight: 700;
    margin-bottom: 5px;
  }
`

const FacetedSearch = ({ setFilters }) => {
  const [state, setState] = useState({ name: "", price: "600", stars: "" })

  const handleInput = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setFilters(state)
  }, [state, setFilters])

  return (
    <FacetedSearchWrapper>
      <StyledSearchBy>
        <small>City</small>
        <input type="text" name="name" id="name" onChange={handleInput} />
      </StyledSearchBy>
      <StyledSearchBy>
        <small>Price - ${state.price}</small>
        <input
          onChange={handleInput}
          type="range"
          min="0"
          max="600"
          name="price"
          id="price"
          value={state.price}
        />
      </StyledSearchBy>
      <StyledSearchBy>
        <small>Rating</small>
        <select defaultValue={state.stars} name="stars" onChange={handleInput}>
          <option value="">Choose rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </StyledSearchBy>
    </FacetedSearchWrapper>
  )
}

export default FacetedSearch
