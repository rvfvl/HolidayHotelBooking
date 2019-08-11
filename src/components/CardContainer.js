import styled from "styled-components"
import React from "react"

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CardContainer = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>
}

export default CardContainer
