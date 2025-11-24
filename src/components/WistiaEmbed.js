import React, { useEffect, useState } from "react"

const WistiaEmbed = ({
  mediaId, // e.g. "kbt3hk7eyp"
  aspect = 16 / 9, // default aspect ratio
  className,
  style,
}) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let loadedCount = 0
    const onLoaded = () => {
      loadedCount += 1
      // We expect 2 scripts: player.js + this video's embed script
      if (loadedCount === 2) {
        setReady(true)
      }
    }

    // 1) Load global player.js (shared by all Wistia videos)
    let playerScript = document.querySelector(
      'script[src="https://fast.wistia.com/player.js"]'
    )
    if (!playerScript) {
      playerScript = document.createElement("script")
      playerScript.src = "https://fast.wistia.com/player.js"
      playerScript.async = true
      playerScript.onload = onLoaded
      document.body.appendChild(playerScript)
    } else {
      onLoaded()
    }

    // 2) Load this video's embed script (specific to mediaId)
    const embedSrc = `https://fast.wistia.com/embed/${mediaId}.js`
    let embedScript = document.querySelector(`script[src="${embedSrc}"]`)
    if (!embedScript) {
      embedScript = document.createElement("script")
      embedScript.src = embedSrc
      embedScript.type = "module"
      embedScript.async = true
      embedScript.onload = onLoaded
      document.body.appendChild(embedScript)
    } else {
      onLoaded()
    }
  }, [mediaId])

//   const paddingTop = `${(1 / aspect) * 100}%` // e.g. 56.25% for 16:9

  return (
    <div
      className={className}
    //   style={{
    //     maxWidth: "800px",
    //     margin: "2rem auto",
    //     position: "relative",
    //     ...style,
    //   }}
    >
      {!ready && <div>Loading video…</div>}

      {/* Custom element from Wistia */}
      <wistia-player
        media-id={mediaId}
        aspect={aspect}
        // style={{ display: "block", paddingTop }}
      ></wistia-player>
    </div>
  )
}

export default WistiaEmbed
