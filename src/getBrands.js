const getBrands = () => {
    const importAll = (r) => r.keys().map(r)
  
    const logoImages = importAll(
      require.context("./images/brands", false, /\.(PNG|png|jpe?g|svg|webp)$/)
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
  
  export default getBrands