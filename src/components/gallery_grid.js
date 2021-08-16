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