import React from "react"
import ReactBeforeSliderComponent from "react-before-after-slider-component"
import APLogo from "../images/APLogoGray.png"

const delimiterIconStyle = {
  width: "55px",
  height: "55px",
  backgroundSize: "cover",
  borderRadius: "30px",
  backgroundImage: `url(${APLogo})`,
}

const SliderComp = ({ firstImage, secondImage }) => (
  <div className="responsive-image-container">
    <ReactBeforeSliderComponent
      firstImage={firstImage}
      secondImage={secondImage}
      delimiterIconStyles={delimiterIconStyle}
      delimiterColor="#2A2C27"
    />
  </div>
)

export default SliderComp
