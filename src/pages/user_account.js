import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './user_account.scss'
import animate from './catalog.js'

import anakin from '../images/anakin.jpg'
import castle from '../images/castle.png'
import wizard from '../images/wizard.jpg'

// import 'bootstrap/dist/css/bootstrap.min.css';

const UserAccount = () => {
  let grid = [];
  for (let i = 0, l = 5; i < l; i++) {
    grid.push(
      <div className="char-card" key={i}>
        <div className="char-body">
          <figure className="front">
            <a className="char-link">
              <span id={'label-char-' + i}>{'Character №' + i}</span>
              <img id={'char-' + i} onMouseMove={animate} src={[anakin, castle, wizard][Math.floor(Math.random() * 3)]} alt={'Character number' + i} />
            </a>
          </figure>
        </div>
      </div>
    )
  }

  return (
  <Layout>
    <Seo title="Account" />
    <h2>Личный кабинет</h2>
    <div className="user-account">
      <div className="profile">
        <img alt="Аватар" className="profile-avatar" src={anakin}/>
        <div className="profile-info">
          <h1 className="profile-name">Name</h1>
          <button type="button" className="profile-edit-button"></button>  
          <p className="profile-description">Description</p>
        </div>
        <ul className="currency-list">
          <h3 className="currency-header">Your currency</h3>
          <li className="currency-item">BTC<span className="currency-value">0.0</span></li>
          <li className="currency-item">ETH<span className="currency-value">0.0</span></li>
          <li className="currency-item">USDT<span className="currency-value">0.0</span></li>
        </ul>
      </div>
      <div className="grid">
        <h3 className="token-header">Your tokens</h3>
        {grid}
      </div>
      
    </div>
  </Layout>
  )
}
export default UserAccount