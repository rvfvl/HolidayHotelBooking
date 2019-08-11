import React, { useState } from "react"
import styled, { css } from "styled-components"
import Logo from "components/Logo"
import device from "theme/mediaQueries"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

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
    z-index: 10;
    border-bottom: 1px solid ${({ theme }) => theme.primary}
    background-color: #fff;
    width: 100%;
    padding: 0;
    transform: translateX(-100%);
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateX(0);
      `};
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
    padding: 2rem;

    &.active {
      background-color: #dbe8f9;
      border: 0;
    }
  }
`

const MobileBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media ${device.small} {
    display: none;
  }

  svg {
    color: #fff;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMobileToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavbarWrapper>
      <Logo title="Holiday Hotel Booking" />

      <NavbarLinksWrapper isOpen={isOpen}>
        <StyledLink exact to="/" activeClassName="active">
          Home
        </StyledLink>
        <StyledLink to="/hotels" activeClassName="active">
          Hotels
        </StyledLink>
        <StyledLink to="/favourites" activeClassName="active">
          Favourite Hotels
        </StyledLink>
      </NavbarLinksWrapper>

      <MobileBreadcrumb onClick={handleMobileToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileBreadcrumb>
    </NavbarWrapper>
  )
}

export default Navbar
