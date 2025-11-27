import React, { useEffect, useState } from "react"

const WistiaEmbed = ({ mediaId, aspect = 16 / 9, className, style }) => {
  const [ready, setReady] = useState(false)
  const [playerScriptLoading, setPlayerScriptLoading] = useState(false)
  const [embedScriptLoading, setEmbedScriptLoading] = useState(false)
  const [playerScriptLoaded, setPlayerScriptLoaded] = useState(false)
  const [embedScriptLoaded, setEmbedScriptLoaded] = useState(false)

  useEffect(() => {
    if (playerScriptLoaded && embedScriptLoaded) {
      setReady(true)
      return
    }

    const playerSrc = "https://fast.wistia.com/player.js"
    const embedSrc = `https://fast.wistia.com/embed/${mediaId}.js`

    let playerScript = document.querySelector(`script[src="${playerSrc}"]`)
    let embedScript = document.querySelector(`script[src="${embedSrc}"]`)

    // Load player.js if needed
    if (!playerScript && !playerScriptLoading) {
      playerScript = document.createElement("script")
      playerScript.src = playerSrc
      playerScript.async = true
      playerScript.onerror = () => {
        console.error("Failed to load Wistia player.js")
      }
      playerScript.onload = () => {
        setPlayerScriptLoaded(true)
        console.log("player script loaded for", mediaId)
      }
      document.body.appendChild(playerScript)
      setPlayerScriptLoading(true)
    } else if (playerScript) {
      setPlayerScriptLoaded(true)
    }

    // Load embed script for this video if needed
    if (!embedScript && !embedScriptLoading) {
      embedScript = document.createElement("script")
      embedScript.src = embedSrc
      embedScript.type = "module"
      embedScript.async = true
      embedScript.onload = () => {
        setEmbedScriptLoaded(true)
        console.log("embed script loaded for ", mediaId)
      }
      embedScript.onerror = () => {
        console.error(`Failed to load Wistia embed script for ${mediaId}`)
      }
      document.body.appendChild(embedScript)
      setEmbedScriptLoading(true)
    } else if (embedScript) {
      setEmbedScriptLoaded(true)
    }
  }, [
    mediaId,
    playerScriptLoaded,
    embedScriptLoaded,
    playerScriptLoading,
    embedScriptLoading,
  ])

  return (
    <div className={className} style={style}>
      {ready ? (
        <wistia-player media-id={mediaId} aspect={aspect}></wistia-player>
      ) : (
        <div>Loading Video...</div>
      )}
    </div>
  )
}

export default WistiaEmbed
