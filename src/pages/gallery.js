import React, { useState, } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./gallery.scss"

const Gallery = () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <Layout>
      <Seo title="Gallery" />
      <div className="gen-wrap gallery-wrap">
        <h1>This page will be available after the public sale</h1>
      </div>
    </Layout>
  )
}

export default Gallery
