import React from "react"
import styled, { css } from "styled-components"
import Logo from "components/Logo"
import device from "theme/mediaQueries"
import { NavLink } from "react-router-dom"

const NavbarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 50px;
  background-color: ${({ theme }) => theme.primary};
`

const NavbarLinksWrapper = styled.div`
  list-style-type: none;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 0;
  }

  @media ${device.small} {
    display: flex;
    height: 100%;
    align-items: center;
  }
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  padding: 0.5rem 2rem;

  &.active {
    border-bottom: 2px solid #fff;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    color: #000;
    padding: 3rem;

    &.active {
      background-color: #dbe8f9;
      border: 0;
    }
  }
`

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo title="Holiday Hotel Booking" />
      <NavbarLinksWrapper>
        <StyledLink exact to="/" activeClassName="active">
          Home
        </StyledLink>
        <StyledLink to="/hotels" activeClassName="active">
          Hotels
        </StyledLink>
      </NavbarLinksWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
