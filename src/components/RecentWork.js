import { useEffect, useRef } from "react"
const RecentWork = ({ triggerRef, triggerRef2 }) => {
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
    <section id="RecentWork" className="main-section" ref={sectionRef}>
      <div
        className="flex-center"
        style={{
          maxWidth: "1200px",
          zIndex: "1",
        }}
      >
        <h1 className="grid-title">Recent Work</h1>
        <div
          style={{
            textAlign: "center",
            lineHeight: "2",
            marginBottom: "20px",
            color: "rgb(49, 49, 49)",
          }}
        >
          PowerPoint presentations with animations. All samples are posted with
          permission from the clients.
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Bryz_dnEitM?si=GZQxrJNkrYkLcREK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/u6b4OhUfLv8?si=kcE7BclQgqviyHWf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default RecentWork
