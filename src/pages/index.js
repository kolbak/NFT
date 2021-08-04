import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"

import "./index.scss"

// import anakin from '../images/anakin.jpg'
import brutal from "../images/brutal.jpg"
// import crocoRider from '../images/croco-rider.jpg'

//? icons
import rasta from "../images/icons/rasta.png"
import superhero from "../images/icons/Superhero.png"
import cyber from "../images/icons/cyber.png"
import afterlife from "../images/icons/afterlife.png"
import basic from "../images/icons/basic.png"
import wild from "../images/icons/wild.png"
import protection from "../images/icons/protection.png"
import precious from "../images/icons/precious.png"

import yt from "../images/icons8-youtube-play-button.svg"
import f from "../images/icons8-facebook.svg"
import ig from "../images/icons8-instagram-old.svg"
import twitter from "../images/icons8-twitter.svg"
import twitch from "../images/icons8-twitch.svg"
import planet from "../animations/planet.mp4"
const IndexPage = () => {
  //? фальшивые данные
  let dummyDataArray = []
  for (let i = 0, l = 10; i < l; i++) {
    dummyDataArray.push({
      name: `Персонаж № ${i}`,
      // avatarSRC: [anakin, brutal, crocoRider][Math.floor(Math.random() * 3)],
    })
  }
  const [data, setData] = useState(dummyDataArray)

  //? Кастомные элементы chakra
  function ButtonCustomGallery({ children, className }) {
    return (
      <Box
        className={className}
        as="button"
        border="none"
        color="white"
        bgColor="#363636"
      >
        {children}
      </Box>
    )
  }
  function ButtonCustomMint({ children, className }) {
    return (
      <Box
        className={className}
        as="button"
        border="none"
        color="white"
        bgColor="#363636"
      >
        {children}
      </Box>
    )
  }
  function AccordionItemCustom({ children, title }) {
    return (
      <AccordionItem border="none" bg="#555555" outline="none" mb={4}>
        <h2>
          <AccordionButton
            _focus={{
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p={0} m={0}>
          <Box padding="0 0 5px 0" m={0}>
            <Box padding="10px 10px" m={2} bg="#464646">
              {children}
            </Box>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    )
  }
  function ButtonCustom({ children, className }) {
    return (
      <Box
        className={className}
        as="button"
        border="3px solid whitesmoke"
        color="whitesmoke"
        bgColor="#292929"
      >
        {children}
      </Box>
    )
  }
  return (
    <>
      <div className="vertical-lines"></div>
      <div className="vertical-lines" style={{ left: "33%" }}></div>
      <div className="vertical-lines" style={{ left: "50%" }}></div>
      <div className="vertical-lines" style={{ left: "66.6%" }}></div>
      <div className="vertical-lines" style={{ left: "83.3%" }}></div>
      <Layout>
        <Seo title="Home" />
        <div className="welcome-wrap">
          <video className="welcome-planet"
            width="500"
            height="400"
            preload="true"
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source src={planet} type="video/mp4" />
          </video>
          <div className="welcome">
            <h1>FAMILY PHALLUS PLANET #FAPP</h1>
            <p>The NFT planet where every Phallus is unique and free!</p>
          </div>
          <div className="nav-btns">
            <ButtonCustom>
              <span>MORE</span>
            </ButtonCustom>
          </div>
          <div className="links">
            <img src={yt} alt="youtube" />
            <img src={f} alt="facebook" />
            <img src={ig} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={twitch} alt="twitch" />
          </div>
        </div>
        <div className="index-wrap-content">
          <div className="carousel">
            <Carousel data={data} />
            <Link className="toGallery" to="/gallery">
              <ButtonCustomGallery className="_btn">
                <span>Gallery</span>
              </ButtonCustomGallery>
            </Link>
          </div>
          <div className="storyline">
            <div className="text-wrap">
              <div className="text">
                <h2>STORYLINE</h2>
                <p>
                  We are a team of artists, developers and financial analysts
                  that discovered Family Phallus Planet - FAPP. Family Phallus
                  Planet - FAPP is an Ethereum Blockchain planet with 10,000
                  unique 2.5 inch NFT Phalluses.
                </p>
                <br />
                <br />
                <p>
                  FAPP is not boring, every Phallus here knows how to deal with
                  boredom! Look at Phalluses! They know that they're small, but
                  they DGAF about it. They support each other and think about
                  their strengths while humans fixated on their "problems".
                </p>
                <p>
                  Mint your phallus and join the community where everyone can
                  find friends and forget about stupid stereotypes!
                </p>
              </div>
              <ButtonCustomMint className="toMint">
                <Link to="/">
                  <span>Mint</span>
                </Link>
              </ButtonCustomMint>
            </div>
            <img src={brutal} alt="" />
          </div>
          <div className="nft">
            <div className="info">
              <h2>
                <span>NFT</span>
              </h2>
              <div className="about">
                <h3>10,000 UNIQUE NFT</h3>
                <h3>98 UNIQUE PROPERTIES</h3>
                <h3>7 STYLES</h3>
                <h3>3 RARITY LEVELS</h3>
              </div>
              <p>
                Every Phallus has unique combination of background color, skin
                color, skin type, eyes, mouth, head, eyewear, necklace and back
                item
              </p>
            </div>
            <div className="levels">
              <div className="dope level">
                <h3>
                  <span>15%</span> DOPE LEVEL
                </h3>
                <div className="icons">
                  <figure>
                    <img src={rasta} alt="" />
                    <figcaption>Rasta style</figcaption>
                  </figure>
                </div>
              </div>
              <div className="wild level">
                <h3>
                  <span>35%</span> WILD LEVEL
                </h3>
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
                <h3>
                  <span>50%</span> BASIC LEVEL
                </h3>
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
          <div className="roadmap">
            <div className="points">
              <h2>ROADMAP</h2>
              <div className="divider-wrap">
                <div className="divider"></div>
                <i className="for5"></i>
                <i className="for15"></i>
                <i className="for30"></i>
                <i className="for50"></i>
                <i className="for70"></i>
                <i className="for80"></i>
                <i className="for100"></i>
              </div>
              <div className="point p5">
                <h3>
                  <span>5%</span> PHALLUSES NEED FRIENDS!
                </h3>
                <p>
                  Giveaway! 100 free Phalluses to people who reposted our first
                  post on twitter!
                </p>
              </div>
              <div className="point p15 right">
                <h3>
                  <span>15%</span> FAPP IS EVERYWHERE!
                </h3>
                <p>
                  We will invest up to 80% of the funds to promote the project
                  to make our Phalluses more expensive and desired!
                </p>
                <p>
                  We will need your help too! The most active Phalluses can join
                  our team!
                </p>
              </div>
              <div className="point p30">
                <h3>
                  <span>30%</span> LOOK AT THE SKY!
                </h3>
                <p>
                  5 Phalluses will be minted and air dropped to 5 random
                  collectors!
                </p>
              </div>
              <div className="point p50 right">
                <h3>
                  <span>50%</span> SHOPPING SPREE!
                </h3>
                <p>
                  Our official FAPP nft merch store will be unlocked for
                  Phalluses.
                </p>
              </div>
              <div className="point p70">
                <h3>
                  <span>70%</span> ICED OUT WHO? ICED OUT WATCH!
                </h3>
                <p>
                  We will give 1 Rolex date just 41 iced out watch piece to 1
                  random collector with rare Phalluses
                </p>
              </div>
              <div className="point p80 right">
                <h3>
                  <span>80%</span> WHO WANT THE SMOKE?
                </h3>
                <p>FAPP gives 10 ETH to 10 random Phalluses.</p>
              </div>
              <div className="point p100">
                <h3>
                  <span>100%</span> IT IS CHARITY TIME
                </h3>
                <p>FAPP will make a 35 ETH donation to the AIDS Foundation!</p>
              </div>
            </div>
          </div>
          <div className="faq">
            <h2>FAQ</h2>
            <Accordion allowMultiple allowToggle>
              <AccordionItemCustom title="WHO ARE YOU?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionItemCustom>
              <AccordionItemCustom title="WHAT IS FAPP?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionItemCustom>
              <AccordionItemCustom title="TELL ME MORE ABOUT YOUR NFT COLLECTION!">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionItemCustom>
              <AccordionItemCustom title="WHAT ERE YOU PLANNING TO DO?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionItemCustom>
              <AccordionItemCustom title="HOW CAN I GET A PHALLUS?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionItemCustom>
              <AccordionItemCustom title="WILL YOU MAKE MORE PHALLUSES?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionItemCustom>
              <AccordionItemCustom title="DO YOU HAVE YOUR OWN SMART CONTRACT?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionItemCustom>
              <AccordionItemCustom title="CAN I RESELL MY PHALLUS NFT?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionItemCustom>
            </Accordion>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
