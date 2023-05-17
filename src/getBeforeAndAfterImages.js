const getBeforeAndAfterImages = () => {
  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const presentationImages = importAll(
    require.context(
      "./images/before-and-after",
      false,
      /\.(PNG|png|jpe?g|svg|webp)$/
    )
  )

  const presentationThumbnailImages = importAll(
    require.context(
      "./images/before-and-after-thumbnails",
      false,
      /\.(PNG|png|jpe?g|svg|webp)$/
    )
  )

  let imagesArray = []

  for (const image of presentationImages) {
    imagesArray.push({
      src: image,
      width: 1280,
      height: 720,
      name: `Slide ${presentationImages.indexOf(image)}`,
      thumbnail: presentationThumbnailImages[presentationImages.indexOf(image)],
    })
  }

  return imagesArray
}

export default getBeforeAndAfterImages
