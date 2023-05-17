const getWebDesignImages = () => {
  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const webDesignImages = importAll(
    require.context("./images/webdesign", false, /\.(PNG|png|jpe?g|svg|webp)$/)
  )

  const webDesignThumbnailImages = importAll(
    require.context(
      "./images/webdesign-thumbnails",
      false,
      /\.(PNG|png|jpe?g|svg|webp)$/
    )
  )

  let imagesArray = []

  for (const image of webDesignImages) {
    imagesArray.push({
      src: image,
      width: 1920,
      height: 1080,
      name: `Website ${webDesignImages.indexOf(image)}`,
      thumbnail: webDesignThumbnailImages[webDesignImages.indexOf(image)],
    })
  }

  return imagesArray
}

export default getWebDesignImages
