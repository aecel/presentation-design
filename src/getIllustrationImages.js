const getIllustrationImages = () => {
  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const illustrationImages = importAll(
    require.context(
      "./images/illustrations",
      false,
      /\.(PNG|png|jpe?g|svg|webp)$/
    )
  )

  const illustrationThumbnailImages = importAll(
    require.context(
      "./images/illustrations-thumbnails",
      false,
      /\.(PNG|png|jpe?g|svg|webp)$/
    )
  )

  const imagesArray = [
    {
      src: illustrationImages[10],
      width: 1284,
      height: 1926,
      name: "Marwen",
      thumbnail: illustrationThumbnailImages[10],
    },
    {
      src: illustrationImages[3],
      width: 625,
      height: 835,
      name: "Downsizing - Small Astronaut",
      thumbnail: illustrationThumbnailImages[3],
    },
    {
      src: illustrationImages[12],
      width: 704,
      height: 813,
      name: "Pacific Rim",
      thumbnail: illustrationThumbnailImages[12],
    },
    {
      src: illustrationImages[6],
      width: 768,
      height: 1021,
      name: "Good Omens",
      thumbnail: illustrationThumbnailImages[6],
    },
    {
      src: illustrationImages[0],
      width: 1973,
      height: 2908,
      name: "No Time To Die",
      thumbnail: illustrationThumbnailImages[0],
    },
    {
      src: illustrationImages[9],
      width: 626,
      height: 836,
      name: "The Man in the High Castle",
      thumbnail: illustrationThumbnailImages[9],
    },
    {
      src: illustrationImages[11],
      width: 630,
      height: 838,
      name: "Mortal Engines",
      thumbnail: illustrationThumbnailImages[11],
    },
    {
      src: illustrationImages[7],
      width: 470,
      height: 711,
      name: "Kingsman",
      thumbnail: illustrationThumbnailImages[7],
    },
    {
      src: illustrationImages[1],
      width: 768,
      height: 1024,
      name: "Downsizing",
      thumbnail: illustrationThumbnailImages[1],
    },
    {
      src: illustrationImages[2],
      width: 768,
      height: 1024,
      name: "The Crimes of Grindelwald",
      thumbnail: illustrationThumbnailImages[2],
    },

    {
      src: illustrationImages[4],
      width: 768,
      height: 1207,
      name: "Glass",
      thumbnail: illustrationThumbnailImages[4],
    },
    {
      src: illustrationImages[5],
      width: 768,
      height: 1024,
      name: "Good Omens - Silhouette",
      thumbnail: illustrationThumbnailImages[5],
    },
    {
      src: illustrationImages[8],
      width: 768,
      height: 1024,
      name: "La Llorona",
      thumbnail: illustrationThumbnailImages[8],
    },

    {
      src: illustrationImages[13],
      width: 768,
      height: 1024,
      name: "Shazam - Shadow",
      thumbnail: illustrationThumbnailImages[13],
    },
    {
      src: illustrationImages[14],
      width: 768,
      height: 1024,
      name: "Shazam",
      thumbnail: illustrationThumbnailImages[14],
    },
    {
      src: illustrationImages[15],
      width: 595,
      height: 842,
      name: "Take Your Time",
      thumbnail: illustrationThumbnailImages[15],
    },
  ]

  return imagesArray
}

export default getIllustrationImages
