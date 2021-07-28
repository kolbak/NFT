import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './user_account.scss'
import animate from './catalog.js'

import anakin from '../images/anakin.jpg'
import wizard from '../images/wizard.jpg'

const UserAccount = () => {
  function animate(_e) {
    let mouseX = 0;
    let mouseY = 0;

    let target, label;
    target = _e.target;

    let coords = target.getBoundingClientRect();
    mouseX = _e.clientX - coords.left - coords.width / 2;
    mouseY = _e.clientY - coords.top - coords.height / 2;

    let mousePX = mouseX / coords.width;
    let mousePY = mouseY / coords.height;

    let rX = mousePX * 15;
    let rY = mousePY * -15;

    let tX = mousePX * 20;
    let tY = mousePY * 20;

    label = document.querySelector(`#label-char-${_e.target.getAttribute('id').match(/\d+/g)}`);
    label.style.transform = `translate(${tX}px, ${tY}px) rotateY(${rX}deg) rotateX(${rY}deg)`;
    target.style.transform = `translate(${tX}px, ${tY}px) rotateY(${rX}deg) rotateX(${rY}deg)`;

    target.onmouseleave = () => {
      label.style.transition = '.6s';
      target.style.transition = '.6s';

      setTimeout(() => {
        label.style.transform = `translate(${0}px, ${0}px) rotateY(${0}deg) rotateX(${0}deg)`;
        target.style.transform = `translate(${0}px, ${0}px) rotateY(${0}deg) rotateX(${0}deg)`;

        setTimeout(() => {
          label.style.transition = '0s';
          target.style.transition = '0s';
        }, 100)
      }, 300)
    }
  }

  let grid = [];
  for (let i = 0, l = 5; i < l; i++) {
    grid.push(
      <div className="char-card" key={i}>
        <div className="char-body">
          <figure className="front">
            <a className="char-link">
              <span id={'label-char-' + i}>{'Character №' + i}</span>
              <img id={'char-' + i} onMouseMove={animate} src={[anakin, wizard][Math.floor(Math.random() * 2)]} alt={'Character number' + i} />
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