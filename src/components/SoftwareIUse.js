import { useEffect, useRef } from "react"
import getSoftwareIUse from "../getSoftwareIUse"
import SoftwareBlock from "./SoftwareBlock"
import SpacingForHeader from "./SpacingForHeader"

const SoftwareIUse = ({ triggerRef, triggerRef2 }) => {
  const sectionRef = useRef()

  const scroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const softwareArray = getSoftwareIUse()

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
      <h1 className="grid-title">Software and Technology I Use</h1>
      <SpacingForHeader />
      <div className="software-blocks">
        {softwareArray.map((software) => {
          return (
            <SoftwareBlock
              key={software.name}
              icon={software.src}
              text={software.name}
            />
          )
        })}{" "}
      </div>
    </section>
  )
}

export default SoftwareIUse
