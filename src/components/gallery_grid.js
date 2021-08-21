import React from "react"
import { Link } from "gatsby"
import './gallery_grid.scss'

const GalleryGrid = ({ data }) => {

  let grid = [];
  for (let i = 0, l = data.length; i < l; i++) {
    grid.push(
      <div className="char-card" key={i}>
        <div className="char-body">
          <figure className="front">
            <Link to={`/character?id=${data[i].id}, ${data[i].src}`} className="char-link">
              <span className="char-id" id={'label-char-' + data[i].id}>{data[i].name}</span>
              <img className="char-img" id={'char-' + data[i].id} src={data[i].src} alt={'Character number' + data[i]} />
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