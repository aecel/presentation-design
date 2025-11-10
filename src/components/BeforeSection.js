import "photoswipe/dist/photoswipe.css"
import { useEffect, useRef } from "react"
import { Gallery } from "react-photoswipe-gallery"
import ImageItem from "./ImageItem"
import SpacingForHeader from "./SpacingForHeader"
import SlickSlider from "./SlickSlider"

const BeforeSection = ({ id, title, subtitle, triggerRef, triggerRef2 }) => {
  const sectionRef = useRef()

  const scroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const trigger = triggerRef.current
    const trigger2 = triggerRef2.current
    if (!trigger) return
    if (!trigger2) return

    trigger.addEventListener("click", scroll)
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
      </div>
    </section>
  )
}

export default BeforeSection
