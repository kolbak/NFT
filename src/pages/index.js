import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"

import './index.scss'

import anakin from '../images/anakin.jpg'
import brutal from '../images/brutal.jpg'
import crocoRider from '../images/croco-rider.jpg'

const IndexPage = () => {
  //? фальшивые данные
  let dummyDataArray = [];
  for (let i = 0, l = 14; i < l; i++) {
    dummyDataArray.push({
      name: `Персонаж № ${i}`,
      avatarSRC: [anakin, brutal, crocoRider][Math.floor(Math.random() * 3)],
    })
  }
  const [data, setData] = useState(dummyDataArray);


  return (
    <Layout>
      <Seo title="Home" />
      <div className="index-wrap-content">
        <div className="carousel">
          <Carousel data={data} />
        </div>
        <br />
        <h2>Lorem</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam minus quisquam ipsam, nam aut. Aspernatur voluptate quae doloribus corrupti quis repudiandae illo aliquam eius optio animi ipsam, obcaecati odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam minus quisquam ipsam, nam aut. Aspernatur voluptate quae doloribus corrupti quis repudiandae illo aliquam eius optio animi ipsam, obcaecati odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam minus quisquam ipsam, nam aut. Aspernatur voluptate quae doloribus corrupti quis repudiandae illo aliquam eius optio animi ipsam, obcaecati odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam minus quisquam ipsam, nam aut. Aspernatur voluptate quae doloribus corrupti quis repudiandae illo aliquam eius optio animi ipsam, obcaecati odio.</p>

        <h3>Lorem</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam minus quisquam ipsam, nam aut. Aspernatur voluptate quae doloribus corrupti quis repudiandae illo aliquam eius optio animi ipsam, obcaecati odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam minus quisquam ipsam, nam aut. Aspernatur voluptate quae doloribus corrupti quis repudiandae illo aliquam eius optio animi ipsam, obcaecati odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam minus quisquam ipsam, nam aut. Aspernatur voluptate quae doloribus corrupti quis repudiandae illo aliquam eius optio animi ipsam, obcaecati odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam minus quisquam ipsam, nam aut. Aspernatur voluptate quae doloribus corrupti quis repudiandae illo aliquam eius optio animi ipsam, obcaecati odio.</p>
      </div>
    </Layout>
  )
}

export default IndexPage
