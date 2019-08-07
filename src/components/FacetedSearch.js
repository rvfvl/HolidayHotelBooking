import React from "react"
import styled from "styled-components"

const FacetedSearchWrapper = styled.div`
  background-color: yellow;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`

const StyledSearchBy = styled.div``

const FacetedSearch = () => {
  return (
    <FacetedSearchWrapper>
      <StyledSearchBy>
        NAME
        <input type="text" name="name" id="name" />
      </StyledSearchBy>
      <StyledSearchBy>PRICE</StyledSearchBy>
      <StyledSearchBy>STAR</StyledSearchBy>
    </FacetedSearchWrapper>
  )
}

export default FacetedSearch
