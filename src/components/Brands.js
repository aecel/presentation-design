import { useEffect, useRef } from "react"
import getBrands from "../getBrands"
import BrandBlock from "./BrandBlock"
import SpacingForHeader from "./SpacingForHeader"

const Brands = ({ triggerRef, triggerRef2 }) => {
  const sectionRef = useRef()

  const scroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const brandArray = getBrands()

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
    <section ref={sectionRef} className="main-section">
      <SpacingForHeader />
      <h1 className="grid-title">Brands I Worked With</h1>
      <SpacingForHeader />
      <div className="brand-blocks">
        {brandArray.map((brand) => {
          return (
            <BrandBlock
              key={brand.name}
              icon={brand.src}
            />
          )
        })}{" "}
      </div>
    </section>
  )
}

export default Brands
