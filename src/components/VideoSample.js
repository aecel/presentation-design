import { useRef, useEffect } from "react"

const VideoSample = ({ videoId }) => {
  const iframeRef = useRef(null)

  useEffect(() => {
    const iframe = iframeRef.current
    // Add loop and playlist to URL
    const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`

    if (!iframe) return

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          iframe.src = videoSrc
          observer.unobserve(iframe)
        }
      })
    }

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    })

    observer.observe(iframe)

    return () => {
      observer.disconnect()
    }
  }, [videoId])

  return (
    <iframe
      ref={iframeRef}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}?mute=1&loop=1&playlist=${videoId}`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="YouTube Video"
      style={{ display: "block", margin: "0 auto" }}
    />
  )
}

export default VideoSample
