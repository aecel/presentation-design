// const getSoftwareIUse = () => {
//   // Importing all images in a folder
//   const importAll = (r) => {
//     return r.keys().map(r)
//   }

//   const logoImages = importAll(
//     require.context("./images/logos", false, /\.(PNG|png|jpe?g|svg|webp)$/)
//   )

//   // Sample pattern of each image in logoImages
//   // "/presentation-design/static/media/Microsoft PowerPoint.003bdf649cda02ba4645.png"
//   // Goal is to get "Microsoft Powerpoint" string

//   // Change the repo name "presentation-design" if you changed your repo name
//   const repoNameLength = "/presentation-design".length + "/static/media/".length
//   // Gets the name of each image
//   const nameArray = logoImages.map((imageSrc) => {
//     return imageSrc.slice(repoNameLength, imageSrc.indexOf("."))
//   })

//   let imagesArray = []

//   for (const image of logoImages) {
//     imagesArray.push({
//       src: image,
//       name: nameArray[logoImages.indexOf(image)],
//     })
//   }

//   return imagesArray
// }

// export default getSoftwareIUse

const getSoftwareIUse = () => {
  const importAll = (r) => r.keys().map(r)

  const logoImages = importAll(
    require.context("./images/logos", false, /\.(PNG|png|jpe?g|svg|webp)$/)
  )
  logoImages.forEach((img) => console.log(img))

  const extractName = (imagePath) => {
    const fileNameWithExt = imagePath.split("/").pop()
    if (!fileNameWithExt) return ""

    const nameParts = fileNameWithExt.split(".")
    if (nameParts.length === 2) {
      return nameParts[0]
    } else if (nameParts.length > 2) {
      return nameParts.slice(0, -2).join(".")
    }
    return ""
  }

  let imagesArray = logoImages.map((src) => ({
    src,
    name: extractName(src),
  }))

  return imagesArray
}

export default getSoftwareIUse
