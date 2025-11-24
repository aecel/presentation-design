import React, { useEffect, useState } from "react"

export default function VideoWistia() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let loadedCount = 0
    const onLoaded = () => {
      loadedCount += 1
      if (loadedCount === 2) {
        setReady(true)
      }
    }

    // Load player.js once
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

    // Load the embed script for this video
    let embedScript = document.querySelector(
      'script[src="https://fast.wistia.com/embed/kbt3hk7eyp.js"]'
    )
    if (!embedScript) {
      embedScript = document.createElement("script")
      embedScript.src = "https://fast.wistia.com/embed/kbt3hk7eyp.js"
      embedScript.type = "module"
      embedScript.async = true
      embedScript.onload = onLoaded
      document.body.appendChild(embedScript)
    } else {
      onLoaded()
    }
  }, [])

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      {!ready && <div>Loading video…</div>}

      {/* This is the exact custom element Wistia gives you */}
      <wistia-player
        media-id="kbt3hk7eyp"
        aspect="1.7777777777777777"
      ></wistia-player>
    </div>
  )
}
