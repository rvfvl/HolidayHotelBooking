import React from "react"
import Slider from "react-slick"
import styled from "styled-components"
import PropTypes from "prop-types"
import Button from "components/Button"

const StyledImage = styled.img`
  width: 100vw;
  height: 100vh;
`

const StyledSlider = styled(Slider)`
  overflow: hidden;
  height: calc(100vh - 50px);

  .slick-prev,
  .slick-next {
    width: unset;
    font-size: 1rem;
    z-index: 50;
  }

  .slick-prev {
    left: 1%;
  }

  .slick-next {
    right: 0;
  }
`

const StyledImageContent = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  height: 300px;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 0 10px 0;
    color: #111;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 7rem;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 1;
  }

  p {
    color: #111;
    font-family: "Open Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 32px;
    margin: 0 0 20px;
  }
`

const StyledImageWrapper = styled.div`
  position: relative;
`

const Carousel = ({ images, customSettings }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <StyledSlider {...(customSettings ? customSettings : settings)}>
      {images.map(({ src, title, subTitle, cta }) => {
        const randomId = Math.random()
          .toString(36)
          .substring(2, 15)

        return (
          <StyledImageWrapper key={randomId}>
            <StyledImage src={src} alt="" />
            {title || subTitle || cta ? (
              <StyledImageContent>
                <h1>{title ? title : ""}</h1>
                <p>{subTitle ? subTitle : ""}</p>
                <Button>{cta ? cta : ""}</Button>
              </StyledImageContent>
            ) : null}
          </StyledImageWrapper>
        )
      })}
    </StyledSlider>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      subTitle: PropTypes.string,
      cta: PropTypes.string
    })
  )
}

export default Carousel
