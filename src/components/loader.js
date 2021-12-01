import React from "react"
import Loader from "react-loaders"
import "./loader.scss"

export default function DotLoader({ active, scale }) {
  return (
    <Loader
      type="ball-pulse-sync"
      active={active}
      style={{
        transform: `scale(${scale})`,
        display: "inline-block",
        margin: "0 auto",
      }}
    />
  )
}
