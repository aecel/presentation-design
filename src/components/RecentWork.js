import { useEffect, useRef } from "react"
import WistiaEmbed from "./WistiaEmbed"
// import VideoSample from "./VideoSample"
const RecentWork = ({ triggerRef, triggerRef2 }) => {
  // const videoId1 = "u6b4OhUfLv8"
  const videoId1 = "yH_P7d5J2tY"

  const videoSrc1 = `https://www.youtube.com/embed/${videoId1}?&mute=1&loop=1&playlist=${videoId1}`
  // const videoId2 = "Bryz_dnEitM"
  const videoId2 = "qigrdFR74bM"
  const videoSrc2 = `https://www.youtube.com/embed/${videoId2}?&mute=1&loop=1&playlist=${videoId2}`
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
    <section id="RecentWork" className="main-section" ref={sectionRef}>
      <div
        className="flex-center"
        style={{
          maxWidth: "1200px",
          zIndex: "1",
        }}
      >
        <h1 className="grid-title">Case Studies</h1>
        <div
          style={{
            textAlign: "left",
            lineHeight: "2",
            marginBottom: "20px",
            color: "rgb(49, 49, 49)",
          }}
        >
          Because I value confidentiality and protect my clients’ sensitive
          information, I can’t share most of the executive presentations, sales
          decks, and pitch decks I’ve designed over the years. Much of my work
          includes private business data and strategic insights that I treat
          with the utmost care. However, I’m happy to showcase a few select
          projects here. These samples will give you a feel for my presentation
          design style, creative process, and the collaborative way I work with
          clients. Even without sensitive details, you’ll see the level of
          clarity, impact, and storytelling I bring to every PowerPoint
          presentation, corporate deck, and infographic. All samples are posted
          with permission from the clients.
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
          <div className="video-and-desc">
            {/* <iframe
              className="youtube-video"
              id="youtube-video-1"
              width="560"
              height="315"
              src={videoSrc1}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
            <WistiaEmbed mediaId="kbt3hk7eyp" aspect={16 / 9} />
            <div className="video-desc">
              My client needed to clearly explain a complex algorithm to their
              CEO. Working from a detailed text file, I designed a concise
              visual that made the process easy to grasp, effectively
              highlighting how the algorithm saves the company valuable time.
              The CEO quickly understood the impact, helping the team secure
              buy-in for their solution.
            </div>
          </div>
          <div className="video-and-desc">
            {/* <iframe
              className="youtube-video"
              id="youtube-video-2"
              width="560"
              height="315"
              src={videoSrc2}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
            <WistiaEmbed mediaId="l7c75cr5na" aspect={16 / 9} />
            <div className="video-desc">
              For this end-of-year business unit presentation, my client
              provided a text-only PowerPoint outline. I transformed it into a
              visually engaging deck that helped the team share their
              achievements and insights with clarity. The completed presentation
              helped the team present with confidence and earned positive
              feedback from leadership.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentWork
