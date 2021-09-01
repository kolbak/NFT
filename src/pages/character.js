import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './character.scss'

const Character = ({ location }) => {
  const { name, id, src, filters } = location.state;
  return (
    <Layout>
      <Seo title="Connect" />
      <div className="gen-wrap">
        <div className="character-container">
          <img className="character-image" src={src} />
          <div className="character-text">
            <h2 className="character-header">{name}</h2>
            <a href="#" className="OpenSea-link">View on OpenSea</a>
            <p className="character-details-header">Details</p>
            <ul className="character-details">
              <li className="character-detail">Birthday
                <span className="character-detail-points"></span>
                <span className="character-detail-value">{filters.bday}</span>
              </li>
              <li className="character-detail">Traits
                <span className="character-detail-points"></span>
                <span className="character-detail-value">12</span>
              </li>
              <li className="character-detail">Background
                <span className="character-detail-points"></span>
                <span className="character-detail-value">Purple</span>
                <p className="character-detail-occurs">Occurs in
                  <span className="character-detail-occurs-value"> 10%</span>
                </p>
              </li>
              <li className="character-detail">Size
                <span className="character-detail-points"></span>
                <span className="character-detail-value">Purple</span>
                <p className="character-detail-occurs">Occurs in
                  <span className="character-detail-occurs-value"> 10%</span>
                </p>
              </li>
              <li className="character-detail">Skin color
                <span className="character-detail-points"></span>
                <span className="character-detail-value">2.5 inch</span>
                <p className="character-detail-occurs">Occurs in
                  <span className="character-detail-occurs-value"> 10%</span>
                </p>
              </li>
              <li className="character-detail">Skin type
                <span className="character-detail-points"></span>
                <span className="character-detail-value">Reptile (Wild-Animal)
                </span>
                <p className="character-detail-occurs">Occurs in
                  <span className="character-detail-occurs-value"> 10%</span>
                </p>
              </li>
              <li className="character-detail">Head
                <span className="character-detail-points"></span>
                <span className="character-detail-value">FAPP Cap (Basic-Common)</span>
                <p className="character-detail-occurs">Occurs in<span className="character-detail-occurs-value"> 10%</span>
                </p>
              </li>
              <li className="character-detail">Eyes
                <span className="character-detail-points"></span>
                <span className="character-detail-value">Cyber (Wild-Cyber) </span>
                <p className="character-detail-occurs">Occurs in<span className="character-detail-occurs-value"> 10%</span></p>
              </li>
              <li className="character-detail">Mounth
                <span className="character-detail-points"></span>
                <span className="character-detail-value">Joint (Basic-Rasta)</span>
                <p className="character-detail-occurs">Occurs in<span className="character-detail-occurs-value"> 10%</span></p>
              </li>
              <li className="character-detail">Eyewear
                <span className="character-detail-points"></span>
                <span className="character-detail-value">Cocktier Diamond (Dope-Precious) </span>
                <p className="character-detail-occurs">Occurs in<span className="character-detail-occurs-value"> 10%</span></p>
              </li>
              <li className="character-detail">Necklace
                <span className="character-detail-points"></span>
                <span className="character-detail-value">Cuban Diamond Chain (Dope-Precious)</span>
                <p className="character-detail-occurs">Occurs in<span className="character-detail-occurs-value"> 10%</span></p>
              </li>
              <li className="character-detail">Back item
                <span className="character-detail-points"></span>
                <span className="character-detail-value">Angel Wings (Wild-Afterlife)</span>
                <p className="character-detail-occurs">Occurs in<span className="character-detail-occurs-value"> 10%</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Character