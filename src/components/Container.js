import React from "react"
import styled from "styled-components"
import device from "theme/mediaQueries"

const ContainerWrapper = styled.div`
  margin: 0 1rem;

  @media ${device.small} {
    margin: 0 3rem;
  }

  @media ${device.medium} {
    margin: 0 6rem;
  }
`

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

export default Container
