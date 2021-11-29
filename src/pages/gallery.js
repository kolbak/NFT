import React, { useState, useEffect, useRef } from "react"
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  CheckboxGroup,
  Stack,
  Icon,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryGrid from "../components/gallery_grid"
import "./gallery.scss"

const Gallery = () => {
  const isBrowser = typeof window !== "undefined"

  const [width, setWidth] = useState(isBrowser && window.innerWidth)
  isBrowser && window.addEventListener("resize", resizeInGallery)
  function resizeInGallery() {
    setWidth(isBrowser && window.innerWidth)
  }

  return (
    <Layout>
      <Seo title="FAPP"/>
      <div className="gen-wrap gallery-wrap">
        <h1>This page will be available after the first minted #FAPP NFT</h1>
      </div>
    </Layout>
  )
}

export default Gallery
