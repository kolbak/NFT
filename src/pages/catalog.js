import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './catalog.scss'

import anakin from '../images/anakin.jpg'
import castle from '../images/castle.png'
import wizard from '../images/wizard.jpg'

const Catalog = () => {
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
  for (let i = 0, l = 99; i < l; i++) {
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
      <Seo title="Catalog" />
      <h2>Каталог с фильтрами</h2>
      <div className="catalog-content">
        <div className="filters">
          <ul>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>Список №1</h2>
              <p>This page was written in HTML and CSS.</p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>Список №1</h2>
              <p>Using the sibling and checked selectors</p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>Список №1</h2>
              <p>By making the open s</p>
            </li>
          </ul>
        </div>
        <div className="grid">
          {grid}
        </div>
      </div>
    </Layout>
  )
}

export default Catalog