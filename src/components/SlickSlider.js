import React from "react"
import Slider from "react-slick"
import "react-before-after-slider-component/dist/build.css"
import { getSliderComps } from "../getSliderComps"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)",
        borderRadius: "50px",
        backgroundColor: "#2A2C27",
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)",
        borderRadius: "50px",
        backgroundColor: "#2A2C27",
      }}
      onClick={onClick}
    />
  )
}

const sliderComps = getSliderComps()

export default function SlickSlider() {
  var settings = {
    dots: true,
    fade: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <Slider
      {...settings}
      style={{
        width: "90%",
        maxWidth: "1200px",
        boxShadow: "5px 5px 3px rgba(0, 0, 0, 0.3)",
        borderRadius: "15px",
      }}
    >
      {sliderComps}
    </Slider>
  )
}
