import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import './gallery_grid.scss'

const GalleryGrid = ({ data }) => {

  let grid = [];
  for (let i = 0, l = data.length; i < l; i++) {
    grid.push(
      <div className="char-card" key={i}>
        <div className="char-body">
          <figure className="front">
            <Link to={`/character/?id=${data[i].id}`} state={{
              name: data[i].name,
              id: data[i].id,
              filters: data[i].filters,
              src: data[i].src,
            }} className="char-link">
              <StaticImage className="char-img" id={'char-' + data[i].id} src="../images/character-ex.png" alt={'Character number' + data[i]} />
              <span className="char-id" id={'label-char-' + data[i].id}>{data[i].name}</span>
            </Link>
          </figure>
        </div>
      </div>
    )
  }

  return (
    <>
      {grid}
    </>
  )
}
export default GalleryGrid