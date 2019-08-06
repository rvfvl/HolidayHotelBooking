import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const StyledLogoImage = styled.img`
  height: 50px;
  width: 50px;
`

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.navbarColor};
  font-weight: 700;
  font-size: 2rem;
`

const Logo = ({ logoUrl, title }) => {
  return (
    <>
      <Link to="/">
        {logoUrl ? (
          <StyledLogoImage src={logoUrl} alt={title} />
        ) : (
          <StyledTitle>{title}</StyledTitle>
        )}
      </Link>
    </>
  )
}

Logo.propTypes = {
  title: PropTypes.string.isRequired
}

export default Logo
