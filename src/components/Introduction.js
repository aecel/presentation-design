import { useEffect, useRef } from "react"
import SpacingForHeader from "./SpacingForHeader"
const yearNow = new Date().getFullYear()
const numOfYears = yearNow - 2017

const Introduction = ({ triggerRef, triggerRef2 }) => {
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
    <section ref={sectionRef} id="Introduction" className="main-section">
      <SpacingForHeader />
      <div
        className="flex-center"
        style={{
          maxWidth: "1200px",
          gap: "30px",
          textAlign: "center",
          zIndex: "1",
        }}
      >
        {/* <img
          src={introductionGif}
          alt=""
          style={{
            width: "300px",
            height: "auto",
          }}
        /> */}
        <h1 className="grid-title">Hi, I'm Aecel</h1>
        <div
          style={{
            lineHeight: "2",
          }}
        >
          I'm a freelance graphic designer specializing in{" "}
          <em className="emphasize-text">presentation design </em>
          and <em className="emphasize-text">vector illustration</em>.
        </div>
        <div>
          I have <em className="emphasize-text">{numOfYears} years</em> of
          experience.
        </div>
      </div>
      {/* <WavesVideo /> */}
    </section>
  )
}

export default Introduction
