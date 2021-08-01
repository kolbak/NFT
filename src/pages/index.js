import React, { useState } from "react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"

import './index.scss'

import anakin from '../images/anakin.jpg'
import brutal from '../images/brutal.jpg'
import crocoRider from '../images/croco-rider.jpg'

//? icons
import rasta from '../images/icons/rasta.png'
import superhero from '../images/icons/Superhero.png'
import cyber from '../images/icons/cyber.png'
import afterlife from '../images/icons/afterlife.png'
import basic from '../images/icons/basic.png'
import wild from '../images/icons/wild.png'
import protection from '../images/icons/protection.png'
import precious from '../images/icons/precious.png'

const IndexPage = () => {
  //? фальшивые данные
  let dummyDataArray = [];
  for (let i = 0, l = 10; i < l; i++) {
    dummyDataArray.push({
      name: `Персонаж № ${i}`,
      avatarSRC: [anakin, brutal, crocoRider][Math.floor(Math.random() * 3)],
    })
  }
  const [data, setData] = useState(dummyDataArray);

  function ButtonCustomGallery({ children, className }) {
    return <Box
      className={className}
      as="button"
      // border="1px"
      // px="8px"
      border="none"
      color="white"
      bgColor="#363636"
    >
      {children}
    </Box>
  }

  function ButtonCustomMint({ children, className }) {
    return <Box
      className={className}
      as="button"
      border="none"
      color="white"
      bgColor="#363636"
    >
      {children}
    </Box>
  }

  return (
    <Layout>
      <Seo title="Home" />
      <div className="index-wrap-content">
        <div className="carousel">
          <Carousel data={data} />
          <ButtonCustomGallery className="toGallery"><Link to="/"><span>Gallery</span></Link></ButtonCustomGallery>
        </div>
        <div className="storyline">
          <div className="text-wrap">
            <div className="text">
              <h2>STORYLINE</h2>
              <p>We are a team of artists, developers and financial analysts that discovered Family Phallus Planet - FAPP. Family Phallus Planet - FAPP is an Ethereum Blockchain planet with 10,000 unique 2.5 inch NFT Phalluses.</p>
              <br /><br />
              <p>FAPP is not boring, every Phallus here knows how to deal with boredom! Look at Phalluses! They know that they're small, but they DGAF about it. They support each other and think about their strengths while humans fixated on their "problems".</p>
              <p>Mint your phallus and join the community where everyone can find friends and forget about stupid stereotypes!</p>
            </div>
            <ButtonCustomMint className="toMint">
              <Link to="/"><span>Mint</span></Link>
            </ButtonCustomMint>
          </div>
          <img src={brutal} alt="" />
        </div>
        <div className="nft">
          <div className="info">
            <h2><span>NFT</span></h2>
            <div className="about">
              <h3>10,000 UNIQUE NFT</h3>
              <h3>98 UNIQUE PROPERTIES</h3>
              <h3>7 STYLES</h3>
              <h3>3 RARITY LEVELS</h3>
            </div>
            <p>Every Phallus has unique combination of background color, skin color, skin type,
              eyes, mouth, head, eyewear, necklace and back item</p>
          </div>
          <div className="levels">
            <div className="dope level">
              <h3><span>15%</span> DOPE LEVEL</h3>
              <div className="icons">
                <figure>
                  <img src={rasta} alt="" />
                  <figcaption>Rasta style</figcaption>
                </figure>
              </div>
            </div>
            <div className="wild level">
              <h3><span>35%</span> WILD LEVEL</h3>
              <div className="icons">
                <figure>
                  <img src={superhero} alt="" />
                  <figcaption>Superhero style</figcaption>
                </figure>
                <figure>
                  <img src={cyber} alt="" />
                  <figcaption>Cyber style</figcaption>
                </figure>
                <figure>
                  <img src={afterlife} alt="" />
                  <figcaption>Afterlife style</figcaption>
                </figure>
              </div>
            </div>
            <div className="basic level">
              <h3><span>50%</span> BASIC LEVEL</h3>
              <div className="icons">
                <figure>
                  <img src={basic} alt="" />
                  <figcaption>Basic style</figcaption>
                </figure>
                <figure>
                  <img src={wild} alt="" />
                  <figcaption>Wild style</figcaption>
                </figure>
                <figure>
                  <img src={protection} alt="" />
                  <figcaption>Protection style</figcaption>
                </figure>
                <figure>
                  <img src={precious} alt="" />
                  <figcaption>Precious style</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
