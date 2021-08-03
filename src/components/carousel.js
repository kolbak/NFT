import React, { useState } from "react"

import './carousel.scss'

const Carousel = ({ data }) => {
  let grid = [];
  for (let i = 0, l = data.length; i < l; i++) {
    grid.push(
      <div className="slide" key={i}>
        {/* <img src={data[i].avatarSRC} alt="" /> */}
        <div></div>
      </div>
    )
  }
  for (let i = 0, l = data.length; i < l; i++) {
    grid.push(
      <div className="slide" key={`${i}-d`}>
        {/* <img src={data[i].avatarSRC} alt="" /> */}
        <div></div>
      </div>
    )
  }

  return (
    <div className="slider">
      <div className="slide-track">
        {grid}
      </div>
    </div>
  )
}


export default Carousel