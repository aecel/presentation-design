import "photoswipe/dist/photoswipe.css"
import { useEffect, useRef } from "react"
import { Gallery } from "react-photoswipe-gallery"
import ImageItem from "./ImageItem"
import SpacingForHeader from "./SpacingForHeader"

const ImageGrid = ({
  id,
  title,
  imagesArray,
  subtitle,
  imageClasses,
  triggerRef,
  triggerRef2,
}) => {
  const sectionRef = useRef()

  const scroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const trigger = triggerRef.current
    trigger.addEventListener("click", scroll)
    const trigger2 = triggerRef2.current
    trigger2.addEventListener("click", scroll)

    return () => {
      trigger.removeEventListener("click", scroll)
      trigger2.removeEventListener("click", scroll)
    }
  }, [triggerRef, triggerRef2])

  return (
    <section ref={sectionRef} id={id} className="main-with-margin flex-center">
      <SpacingForHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h1 className="grid-title">{title}</h1>
        {subtitle && (
          <div style={{ textAlign: "center", lineHeight: "2" }}>{subtitle}</div>
        )}
        <div
          style={{
            textAlign: "center",
            lineHeight: "2",
            marginBottom: "20px",
            color: "rgb(49, 49, 49)",
          }}
        >
          Click to enlarge and go to slideshow mode
        </div>
        <Gallery>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {imagesArray.map((image) => {
              return (
                <ImageItem
                  image={image}
                  key={image.name}
                  imageClasses={imageClasses}
                />
              )
            })}
          </div>
        </Gallery>
      </div>
    </section>
  )
}

export default ImageGrid
