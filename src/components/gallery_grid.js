import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import './gallery_grid.scss'

const GalleryGrid = ({ data }) => {

  let grid = [];
  console.groupCollapsed();
  for (let i = 0, l = data.length; i < l; i++) {
    console.log('object :>> ', i, data[i].image);

    grid.push(
      <div className="char-card" key={i}>
        <div className="char-body">
          <figure className="front">
            <Link to={`/character/?id=${data[i].id}`} state={{
              name: data[i].name || "",
              id: data[i].id || "",
              attributes: data[i].attributes || "",
              image: data[i].image || "",
            }} className="char-link">
              <img className="char-img" id={'char-' + data[i].id} src={data[i].image} alt={'Character number' + data[i].id} />
              <span className="char-id" id={'label-char-' + data[i].id}>{data[i].name}</span>
            </Link>
          </figure>
        </div>
      </div>
    )
  }
  console.groupEnd();

  return (
    <>
      {grid}
    </>
  )
}
export default GalleryGrid