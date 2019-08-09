import React from "react"
import Carousel from "components/Carousel"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import image1 from "images/beach.jpg"
import image2 from "images/bedroom.jpg"
import image3 from "images/holiday.jpg"

const Home = () => {
  const images = [
    {
      src: image1,
      title: "Title 1",
      subTitle: "Sub-Title 1",
      cta: "Click here"
    },
    {
      src: image2,
      title: "Title 2",
      subTitle: "Sub-Title 2",
      cta: "Click here"
    },
    {
      src: image3,
      title: "Title 3",
      subTitle: "Sub-Title 3",
      cta: "Click here"
    }
  ]

  return (
    <div>
      <Carousel images={images} />
    </div>
  )
}

export default Home
