import { useRef } from "react"
// import CollidingCircles from "./CollidingCircles"
import ContactMe from "./ContactMe"
import Footer from "./Footer"
import Introduction from "./Introduction"
import MoreAboutMe from "./MoreAboutMe"
import SampleWorks from "./SampleWorks"
import SoftwareIUse from "./SoftwareIUse"

const Main = () => {
  const aboutMeRef = useRef()
  const softwareRef = useRef()
  const presentationRef = useRef()
  const beforeAfterRef = useRef()
  const illustrationsRef = useRef()
  const webDesignRef = useRef()
  const contactMeRef = useRef()

  const aboutMeHamburgerRef = useRef()
  const softwareHamburgerRef = useRef()
  const presentationHamburgerRef = useRef()
  const beforeAfterHamburgerRef = useRef()
  const illustrationsHamburgerRef = useRef()
  const webDesignHamburgerRef = useRef()
  const contactMeHamburgerRef = useRef()

  const hamburgerItemsRef = useRef()

  const toggleHamburgerMenu = () => {
    if (hamburgerItemsRef.current.style.display === "none") {
      hamburgerItemsRef.current.style.display = "flex"
    } else {
      hamburgerItemsRef.current.style.display = "none"
    }
  }

  return (
    <>
      <header>
        <div className="header-elements">
          <button className="header-button" ref={aboutMeRef}>
            About Me
          </button>
          <button className="header-button" ref={softwareRef}>
            Software I Use
          </button>
          <button className="header-button" ref={presentationRef}>
            Presentations
          </button>
          <button
            className="header-button"
            ref={beforeAfterRef}
            style={{
              display: "none",
            }}
          >
            More Presentations
          </button>
          <button className="header-button" ref={illustrationsRef}>
            Illustrations
          </button>
          <button className="header-button" ref={webDesignRef}>
            Web Design
          </button>
          <button className="header-button" ref={contactMeRef}>
            Contact Me
          </button>
        </div>
        <button
          id="hamburger-menu-button"
          aria-label="Hamburger Menu Button"
          onClick={toggleHamburgerMenu}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
        <div id="hamburger-items" ref={hamburgerItemsRef}>
          <button
            className="hamburger-item"
            ref={aboutMeHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            About Me
          </button>
          <button
            className="hamburger-item"
            ref={softwareHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            Software I Use
          </button>
          <button
            className="hamburger-item"
            ref={presentationHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            Presentations
          </button>
          <button
            className="hamburger-item"
            ref={beforeAfterHamburgerRef}
            onClick={toggleHamburgerMenu}
            style={{
              display: "none",
            }}
          >
            More Presentations
          </button>
          <button
            className="hamburger-item"
            ref={illustrationsHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            Illustrations
          </button>
          <button
            className="hamburger-item"
            ref={webDesignHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            Web Design
          </button>
          <button
            className="hamburger-item"
            ref={contactMeHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            Contact Me
          </button>
        </div>
        {/* <button id="theme-toggle"></button> */}
      </header>
      <main>
        {/* <Circles /> */}
        {/* <CollidingCircles /> */}
        <Introduction
          triggerRef={aboutMeRef}
          triggerRef2={aboutMeHamburgerRef}
        />
        <MoreAboutMe />
        <SoftwareIUse
          triggerRef={softwareRef}
          triggerRef2={softwareHamburgerRef}
        />
        <SampleWorks
          presentationRef={presentationRef}
          beforeAfterRef={beforeAfterRef}
          illustrationsRef={illustrationsRef}
          webDesignRef={webDesignRef}
          presentationRef2={presentationHamburgerRef}
          beforeAfterRef2={beforeAfterHamburgerRef}
          illustrationsRef2={illustrationsHamburgerRef}
          webDesignRef2={webDesignHamburgerRef}
        />

        <ContactMe
          triggerRef={contactMeRef}
          triggerRef2={contactMeHamburgerRef}
        />
      </main>
      <Footer />
    </>
  )
}

export default Main
