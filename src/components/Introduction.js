import { useEffect, useRef } from "react"
import SpacingForHeader from "./SpacingForHeader"
import getIntroImages from "../getIntroImages"

const yearNow = new Date().getFullYear()
const numOfYears = yearNow - 2017

const Introduction = ({ triggerRef, triggerRef2 }) => {
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

  const introImagesTest = getIntroImages()
  const arrowDesktop = introImagesTest.arrows[0]
  const arrowMobile = introImagesTest.arrows[1]

  return (
    <section ref={sectionRef} id="Introduction" className="main-section">
      <SpacingForHeader />
      <div className="mobile-introduction-images">
        <div className="intro-images-layout">
          {introImagesTest.presentations.map(
            ({ src, width, height }, index) => (
              <img
                className="intro-image-mobile"
                src={src}
                width={width*0.9}
                // height={height}
                key={index}
                fetchPriority="high"
              />
            )
          )}
          <img
            className="intro-arrow-mobile"
            src={arrowMobile.src}
            width={170}
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="introduction-layout">
        <div
          className="flex-center"
          style={{
            // maxWidth: "1200px",
            // gap: "30px",
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
          {/* <img
            src={APLogo}
            alt=""
            style={{
              width: "150px",
              height: "auto",
            }}
          /> */}
          <h1 className="grid-title-intro">Hi, I'm Ace</h1>
          <div className="introduction-text">
            {/* I'm a freelance designer specializing in{" "}
            <em className="emphasize-text">presentation design </em>
            and <em className="emphasize-text">vector illustration</em>. */}
            Your on-call PowerPoint expert.
          </div>
          <div className="introduction-text" style={{ maxWidth: "400px" }}>
            {/* I have <em className="emphasize-text">{numOfYears + 3} years</em> of
            experience in vector illustration and{" "}
            <em className="emphasize-text">{numOfYears} years</em> of experience
            in presentation design. */}
            Transform your ideas into on-brand, high-impact slides so you can{" "}
            <em className="emphasize-text">focus on what matters</em>.
          </div>
          <a
            className="hire-me-button"
            href="https://calendly.com/acunapresentations"
            target="_blank"
            rel="noreferrer"
          >
            Book a Meeting
          </a>
          {/* <div className="introduction-text">
            I'm a freelance{" "}
            <em className="emphasize-text">presentation design specialist </em>
            with{" "}
            <em className="emphasize-text">{numOfYears} years</em> of experience.
          </div> */}
        </div>
        <div className="desktop-introduction-images">
          <div className="intro-images-layout">
            {introImagesTest.presentations.map(
              ({ src, width, height }, index) => (
                <img
                  className="intro-image-desktop"
                  src={src}
                  width={width}
                  height={height}
                  key={index}
                  fetchPriority="high"
                />
              )
            )}
            <img
              className="intro-arrow-desktop"
              src={arrowDesktop.src}
              width={200}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
      {/* <WavesVideo /> */}
    </section>
  )
}

export default Introduction
