import React from "react"
import Slider from "react-slick"
import ReactBeforeSliderComponent from "react-before-after-slider-component"
import "react-before-after-slider-component/dist/build.css"
import img1 from "../images/before-and-after/Slide01.webp"
import img1b from "../images/slick-slider/Slide01-b.PNG"
import img1a from "../images/slick-slider/Slide01-a.PNG"
import APLogo from "../images/APLogoGray.png"
import { getSliderComps } from "../getSliderComps"

const SECOND_IMAGE = {
  imageUrl: img1b,
}
const FIRST_IMAGE = {
  imageUrl: img1a,
}

const delimiterIconStyle = {
  width: "55px",
  height: "55px",
  backgroundSize: "cover",
  borderRadius: "30px",
  backgroundImage: `url(${APLogo})`,
}

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
        borderRadius: "15px",
        // boxShadow: "5px 5px 3px rgba(0, 0, 0, 0.3)",
        // aspectRatio: "960/540",
      }}
    >
      {sliderComps}
    </Slider>
  )
}
