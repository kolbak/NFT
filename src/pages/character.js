import React, { useState, useRef } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './character.scss'

import char from "../images/character-ex.png"

const Character = ({ location }) => {
  const isBrowser = typeof window !== "undefined"
  let name, id, filters;
  let src;
  if (isBrowser) {
    console.log('location :>> ', new URL(location.href).searchParams.get('id'));
    if(new URL(location.href).searchParams.get('id')) {
      //? запрос
      // .......
      
      // .......      

    } else {
      src = location.state ? location.state.src :
        (window.localStorage.getItem("details") && JSON.parse(window.localStorage.getItem("details")).src);
        
      if (location.state) {
        name = location.state.name;
        id = location.state.id;
        filters = location.state.filters;
  
        window.localStorage.setItem("details", JSON.stringify({ name, id, src, filters }));
      }
      else if (window.localStorage.getItem("details")) {
        let detObj = JSON.parse(window.localStorage.getItem("details"));
  
        name = detObj.name;
        id = detObj.id;
        filters = detObj.filters;
      }
    }
  }

  return (
    <Layout>
      <Seo title="Connect" />
      <div className="gen-wrap char">
        <h1 className="name">{name}</h1>
        <img className="avatar" alt="character image" src={src} />
        <a href="#" className="OpenSea-link">View on OpenSea</a>
        <h2 className="detail-header">Details</h2>
        <div className="text">
          <ul>
            <li className="detail">Birthday
              <span className="points"></span>
              <span className="value">{filters?.bday}</span>
            </li>
            <li className="detail">Traits
              <span className="points"></span>
              <span className="value">12</span>
            </li>
            <li className="detail">Background
              <span className="points"></span>
              <span className="value">Purple</span>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
            <li className="detail">Size
              <span className="points"></span>
              <span className="value">Purple</span>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
            <li className="detail">Skin color
              <span className="points"></span>
              <span className="value">2.5 inch</span>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
            <li className="detail">Skin type
              <span className="points"></span>
              <span className="value">Reptile</span>
              <p className="level">Wild-Animal</p>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
            <li className="detail">Head
              <span className="points"></span>
              <span className="value">FAPP Cap</span>
              <p className="level">Basic-Common</p>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
            <li className="detail">Eyes
              <span className="points"></span>
              <span className="value">Cyber</span>
              <p className="level">Wild-Cyber</p>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
            <li className="detail">Mounth
              <span className="points"></span>
              <span className="value">Joint</span>
              <p className="level">Basic-Rasta</p>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
            <li className="detail">Eyewear
              <span className="points"></span>
              <span className="value">Cocktier Diamond</span>
              <p className="level">Dope-Precious</p>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
            <li className="detail">Necklace
              <span className="points"></span>
              <span className="value">Cuban Diamond Chain</span>
              <p className="level">Dope-Precious</p>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
            <li className="detail">Back item
              <span className="points"></span>
              <span className="value">Angel Wings</span>
              <p className="level">Wild-Afterlife</p>
              <p className="occurs">Occurs in<span> 10%</span></p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Character