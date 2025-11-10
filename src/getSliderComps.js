import SliderComp from "./components/SliderComp"
const imagesContext = require.context("./images/slick-slider", false, /\.PNG$/)

export function getSliderComps() {
  const imageNames = imagesContext.keys()
  console.log("Image names found:", imagesContext.keys())
  let comps = []
  let index = 1
  while (true) {
    const numStr = index.toString().padStart(2, "0")
    const aName = `./Slide${numStr}-a.PNG`
    const bName = `./Slide${numStr}-b.PNG`
    if (imageNames.includes(aName) && imageNames.includes(bName)) {
      comps.push(
        <SliderComp
          key={numStr}
          firstImage={{ imageUrl: imagesContext(aName) }}
          secondImage={{ imageUrl: imagesContext(bName) }}
        />
      )
    } else {
      break // stop if we don't find a matching pair
    }
    index++
  }
  console.log(comps, comps)
  return comps
}
