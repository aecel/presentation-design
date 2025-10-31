const getIntroImages = () => {
  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const presentationImages = importAll(
    require.context(
      "./images/intro-images",
      false,
      /\.(webp|gif|mp4|avif)$/
    )
  )

  const presentations = []

  for (const image of presentationImages) {
    presentations.push({
      src: image,
      width: 1280/4,
      height: 720/4,
      name: `Slide ${presentationImages.indexOf(image)}`,
    })
  }
  
  const arrowImages = importAll(
    require.context(
      "./images/intro-images",
      false,
      /\.(png)$/
    )
  )

  const arrows = []

  for (const image of arrowImages) {
    arrows.push({
        src: image,
        width: 128,
        height: 128,
        name: `Arrow ${arrowImages.indexOf(image)}`,
    })
  }

  return {
    presentations,
    arrows,
  }
}

export default getIntroImages
