import React from "react"
import "../style/ribbon.css"

export default function Ribbon({
  href = "https://presentationace.com",
  text = "New site: presentationace.com",
  target = "_blank",
}) {
  return (
    <div className="site-flag" aria-label="New site announcement">
      <a
        className="site-flag__link"
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  )
}
