const getSoftwareIUse = () => {
  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const logoImages = importAll(
    require.context("./images/logos", false, /\.(PNG|png|jpe?g|svg|webp)$/)
  )

  // Sample pattern of each image in logoImages
  // "/design-portfolio/static/media/Microsoft PowerPoint.003bdf649cda02ba4645.png"
  // Goal is to get "Microsoft Powerpoint" string

  // Change the repo name "design-portfolio" if you changed your repo name
  const repoNameLength = "/design-portfolio".length + "/static/media/".length
  // Gets the name of each image
  const nameArray = logoImages.map((imageSrc) => {
    return imageSrc.slice(repoNameLength, imageSrc.indexOf("."))
  })

  let imagesArray = []

  for (const image of logoImages) {
    imagesArray.push({
      src: image,
      name: nameArray[logoImages.indexOf(image)],
    })
  }

  return imagesArray
}

export default getSoftwareIUse
