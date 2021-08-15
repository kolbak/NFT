import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'

import Layout from "../components/layout"
import Seo from "../components/seo"

import './gallery_grid.scss'

import anakin from '../images/anakin.jpg'
import wizard from '../images/wizard.jpg'

const GalleryGrid = ({ data }) => {
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

    label = document.querySelector(`#label-${_e.target.getAttribute('id')}`);
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
  for (let i = 0, l = data.length; i < l; i++) {
    grid.push(
      <div className="char-card" key={i}>
        <div className="char-body">
          <figure className="front">
            <Link to={`/character?id=${data[i].id}, ${data[i].src}`} className="char-link">
              <span className="char-id" id={'label-char-' + data[i].id}>{data[i].name}</span>
              <img className="char-img" id={'char-' + data[i].id} onMouseMove={animate} src={data[i].src} alt={'Character number' + data[i]} />
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