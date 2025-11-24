import { useEffect, useRef } from "react"
const ContactMe = ({ triggerRef, triggerRef2 }) => {
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
    <section id="ContactMe" className="main-section" ref={sectionRef}>
      <div
        className="flex-center"
        style={{
          maxWidth: "1200px",
          zIndex: "1",
        }}
      >
        <h1
          style={{
            // margin: "0",
            textAlign: "center",
          }}
        >
          I would love to hear from you.
        </h1>
        <div
          className="flex-center"
          style={{
            alignSelf: "center",
            // gap: "2px",
            textAlign: "center",
            zIndex: "1",
            lineHeight: "2",
            margin: "20px",
          }}
        >
          <div>
            Thank you for taking the time to visit my portfolio website.
          </div>
          <div>
            Please feel free to reach out to me for any inquiries or potential
            design opportunities.
          </div>
        </div>
        <a
          id="HireMeButton"
          href="https://calendly.com/acunapresentations"
          target="_blank"
          rel="noreferrer"
        >
          Book a Meeting
        </a>
        <div>Email: acunapresentations@gmail.com | sniffysloth@gmail.com</div>
      </div>
      {/* <WavesVideo /> */}
    </section>
  )
}

export default ContactMe
