import React from "react"
import WistiaEmbed from "./WistiaEmbed"

/**
 * Renders a list of Wistia videos as <section> blocks.
 *
 * @param {Object[]} props.videos - Array of video configs.
 *   Each item can have:
 *     - id: Wistia media ID (required)
 *     - title: Heading text (required)
 *     - aspect: Aspect ratio (optional, default 16/9 if not provided)
 */
const VideoSectionList = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return null // or some fallback UI
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {videos.map((video) => (
        <section
          className="video-and-desc"
          key={video.id}
          style={{ marginBottom: "2rem" }}
        >
          <h2>{video.title}</h2>
          <WistiaEmbed mediaId={video.id} aspect={video.aspect || 16 / 9} />
          <div className="video-desc">{video.desc}</div>
        </section>
      ))}
    </div>
  )
}

export default VideoSectionList
