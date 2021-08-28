import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
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

import characterEx from "../images/character-ex.png"
import storyline from "../images/storyline.jpeg"
import whiteIMG from "../images/photo_2021-08-25_21-41-59.jpg"

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
import discord from "../images/icons8-discord.svg"
import ig from "../images/icons8-instagram-old.svg"
import twitter from "../images/icons8-twitter.svg"
import opensea from "../images/opensea.svg"

import arrow from "../images/icons8-down-arrow-50.png"

const IndexPage = () => {
  const isBrowser = typeof window !== "undefined"

  let [screenWidth, setScreenWidth] = useState(null);
  useEffect(() => {
    setScreenWidth(isBrowser && window.screen.width);
    if (isBrowser) {
      window.addEventListener('resize', () => {
        setScreenWidth(window.screen.width)
      })
    }

    if (isBrowser) {
      let searchStr = window.location.search;
      let id = new URLSearchParams(searchStr).get('id');

      if (id) {
        let shift = document.getElementById(id).getBoundingClientRect().y;

        window.scrollTo({
          top: shift - 50,
          behavior: 'smooth',
        });
      };
    }
  }, []);

  //? фальшивые данные
  let dummyDataArray = []
  for (let i = 0, l = 10; i < l; i++) {
    dummyDataArray.push({
      name: `Персонаж № ${i}`,
      avatarSRC: characterEx,
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
  function AccordionItemCustom({ className, children, title }) {
    return (
      <AccordionItem border="none" bg="#555555" outline="none" mb={4} className={className}>
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
      >
        {children}
      </Box>
    )
  }

  //? анимация
  // function animation() {

  //   function offset(el) {
  //     const rect = el.getBoundingClientRect(),
  //       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  //       scrollTop = window.pageyOffset || document.documentElement.scrollTop;
  //     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  //   }
  // };

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <div className="welcome-wrap">
          <div className="video-wrap"></div>
          <div className="content">
            <div className="welcome">
              <h1>FAMILY PHALLUS PLANET #FAPP</h1>
              <p>The NFT planet where every Phallus is unique and free!</p>
            </div>
            <ButtonCustom className="nav-btn">
              <span>MORE</span>
            </ButtonCustom>
            <div className="links">
              <img src={yt} alt="youtube" />
              <img src={opensea} alt="opensea" />
              <img src={ig} alt="instagram" />
              <img src={twitter} alt="twitter" />
              <img src={discord} alt="discord" />
            </div>
          </div>
        </div>
        <div className="index-wrap-content">
          <div className="carousel-wrap">
            <Carousel data={data} className="carousel" />
            <Link className="toGallery" to="/gallery">
              <ButtonCustomGallery className="_btn">
                <span>Gallery</span>
              </ButtonCustomGallery>
            </Link>
          </div>
          <div className="gen-wrap">
            <div id="content-block-storyline" className="content-block storyline">
              <Fade left>
                <div className="text-wrap">
                  <div className="text">
                    <h2>STORYLINE</h2>
                    <p>
                      We are a team of artists, developers and financial analysts
                      that discovered Family Phallus Planet - FAPP. Family Phallus
                      Planet - FAPP is an Ethereum Blockchain planet with 10,000
                      unique 2.5 inch NFT Phalluses.
                    </p>
                    <br className="display-none" />
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
                    <Link to="/mint">
                      <span>Mint</span>
                    </Link>
                  </ButtonCustomMint>
                </div>
              </Fade>
              <Fade right>
                <img src={storyline} alt="" />
              </Fade>
            </div>
            <div id="content-block-nft" className="content-block nft">
              <Fade right>
                <div className="info">
                  <h2>NFT</h2>
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
              </Fade>
              <Fade left cascade>
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
              </Fade>
            </div>
            <div id="content-block-roadmap" className="content-block roadmap">
              <Fade left>
                <h2>ROADMAP</h2>
              </Fade>
              {screenWidth > 750 &&
                <div className="points">
                  <Fade left>
                    <div className="point p5">
                      <h3><span>5%</span> PHALLUSES NEED FRIENDS!</h3>
                      <img src={whiteIMG} alt="" />
                      <p>
                        Giveaway! 100 free Phalluses to people who reposted our first
                        post on twitter!
                      </p>
                      <div className="arrow-wrap">
                        <p>15%</p>
                        <img className="arrow" src={arrow} alt="" />
                      </div>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="point p15 right">
                      <h3><span>15%</span> FAPP IS EVERYWHERE!</h3>
                      <img src={whiteIMG} alt="" />
                      <p>
                        We will invest up to 80% of the funds to promote the project
                        to make our Phalluses more expensive and desired!
                      </p>
                      <p>
                        We will need your help too! The most active Phalluses can join
                        our team!
                      </p>
                      <div className="arrow-wrap left">
                        <p>30%</p>
                        <img className="arrow" src={arrow} alt="" />
                      </div>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="point p30">
                      <h3><span>30%</span> LOOK AT THE SKY!</h3>
                      <img src={whiteIMG} alt="" />
                      <p>
                        5 Phalluses will be minted and air dropped to 5 random
                        collectors!
                      </p>
                      <div className="arrow-wrap">
                        <p>50%</p>
                        <img className="arrow" src={arrow} alt="" />
                      </div>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="point p50 right">
                      <h3><span>50%</span> SHOPPING SPREE!</h3>
                      <img src={whiteIMG} alt="" />
                      <p>
                        Our official FAPP nft merch store will be unlocked for
                        Phalluses.
                      </p>
                      <div className="arrow-wrap left">
                        <p>70%</p>
                        <img className="arrow" src={arrow} alt="" />
                      </div>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="point p70">
                      <h3><span>70%</span> ICED OUT WHO? ICED OUT WATCH!</h3>
                      <img src={whiteIMG} alt="" />
                      <p>
                        We will give 1 Rolex date just 41 iced out watch piece to 1
                        random collector with rare Phalluses
                      </p>
                      <div className="arrow-wrap">
                        <p>80%</p>
                        <img className="arrow" src={arrow} alt="" />
                      </div>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="point p80 right">
                      <h3><span>80%</span> WHO WANT THE SMOKE?</h3>
                      <img src={whiteIMG} alt="" />
                      <p>FAPP gives 10 ETH to 10 random Phalluses.</p>
                      <div className="arrow-wrap left">
                        <p>100%</p>
                        <img className="arrow" src={arrow} alt="" />
                      </div>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="point p100">
                      <h3><span>100%</span> IT IS CHARITY TIME</h3>
                      <img src={whiteIMG} alt="" />
                      <p>FAPP will make a 35 ETH donation to the AIDS Foundation!</p>
                    </div>
                  </Fade>
                </div>
              }
              {screenWidth <= 750 &&
                <div className="points">
                  <div className="point p5">
                    <h3><span>5%</span> PHALLUSES NEED FRIENDS!</h3>
                    <img src={whiteIMG} alt="" />
                    <p>
                      Giveaway! 100 free Phalluses to people who reposted our first
                      post on twitter!
                    </p>
                  </div>
                  <div className="point p15">
                    <h3><span>15%</span> FAPP IS EVERYWHERE!</h3>
                    <img src={whiteIMG} alt="" />
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
                    <h3><span>30%</span> LOOK AT THE SKY!</h3>
                    <img src={whiteIMG} alt="" />
                    <p>
                      5 Phalluses will be minted and air dropped to 5 random
                      collectors!
                    </p>
                  </div>
                  <div className="point p50">
                    <h3><span>50%</span> SHOPPING SPREE!</h3>
                    <img src={whiteIMG} alt="" />
                    <p>
                      Our official FAPP nft merch store will be unlocked for
                      Phalluses.
                    </p>
                  </div>
                  <div className="point p70">
                    <h3><span>70%</span> ICED OUT WHO? ICED OUT WATCH!</h3>
                    <img src={whiteIMG} alt="" />
                    <p>
                      We will give 1 Rolex date just 41 iced out watch piece to 1
                      random collector with rare Phalluses
                    </p>
                  </div>
                  <div className="point p80">
                    <h3><span>80%</span> WHO WANT THE SMOKE?</h3>
                    <img src={whiteIMG} alt="" />
                    <p>FAPP gives 10 ETH to 10 random Phalluses.</p>
                  </div>
                  <div className="point p100">
                    <h3><span>100%</span> IT IS CHARITY TIME</h3>
                    <img src={whiteIMG} alt="" />
                    <p>FAPP will make a 35 ETH donation to the AIDS Foundation!</p>
                  </div>
                </div>}
            </div>
            <div id="content-block-faq" className="content-block faq">
              <h2>FAQ</h2>
              <Accordion className="accordion" allowMultiple allowToggle>
                <AccordionItemCustom title="WHO ARE YOU?">
                  We are a team of artists, developers and financial analysts that discovered Family Phallus Planet - FAPP.
                </AccordionItemCustom>
                <AccordionItemCustom title="WHAT IS FAPP?">
                  Family Phallus Planet - FAPP is an Ethereum Blockchain planet with 10,000 unique 2.5 inch NFT Phalluses.
                </AccordionItemCustom>
                <AccordionItemCustom title="TELL ME MORE ABOUT YOUR NFT COLLECTION!">
                  Every Phallus has different combination of
                  <ul>
                    <li>Background color</li>
                    <li>Skin Color</li>
                    <li>Skin Type</li>
                    <li>Head</li>
                    <li>Eyes</li>
                    <li>Mouth</li>
                    <li>Glasses</li>
                    <li>Necklace</li>
                  </ul>
                  Every item has different styles:
                  <ul>
                    <li>Common items</li>
                    <li>Animal items</li>
                    <li>Cyber items</li>
                    <li>Precious items</li>
                    <li>Afterlife items</li>
                    <li>Rasta items</li>
                    <li>Protection items</li>
                    <li>Superhero items</li>
                  </ul>
                  Every style belongs to its own level of rarity
                  <ul>
                    <li>Basic level
                      <ul>
                        <li>Common items</li>
                        <li>Rasta items</li>
                        <li>Protection items</li>
                        <li>Superhero items</li>
                      </ul>
                    </li>
                    <li>Wild
                      <ul>
                        <li>Animal items</li>
                        <li>Cyber items</li>
                        <li>Afterlife items</li>
                      </ul>
                    </li>
                    <li>Dope
                      <ul>
                        <li>precious items</li>
                      </ul>
                    </li>
                  </ul>
                </AccordionItemCustom>
                <AccordionItemCustom title="WHAT ARE YOU PLANNING TO DO?">
                  <ul>
                    <li>We are planning to show that art must be provocative because our planet became boring and too much structured.
                      <p>
                        <em>FAPP is not boring, every Phallus here knows how to deal with boredom! </em>
                      </p>
                    </li>
                    <br />
                    <li>We want to stop body shaming.
                      <p>
                        <em>Look at Phalluses! They know that they're small, but they DGAF about it. They support each other and think about their strengths while humans fixated on their "problems". Let's create a community where everyone can find friends and forget about stupid stereotypes!  </em>
                      </p>
                    </li>
                    <br />
                    <li>We want to help fight AIDS.
                      <p>
                        <em>We will donate money to charities that will be chosen by Phalluses in our #FAPP community.</em>
                      </p>
                    </li>
                    <br />
                    <li>Our team will provide giveaways and prizes.
                      <p>
                        <em>ETH coins, free NFTs, Rolex watch and more cool stuff! </em>
                      </p>
                    </li>
                  </ul>
                </AccordionItemCustom>
                <AccordionItemCustom title="HOW CAN I GET A PHALLUS?">
                  Click here <a href="/">https://nft-cockiz.com/mint</a>, connect your MetaMask wallet and mint (buy) your NFT Phallus.
                </AccordionItemCustom>
                <AccordionItemCustom title="WILL YOU MAKE MORE PHALLUSES?">
                  No we won't. We have limited emission because we want to preserve the value of our NFTs.
                </AccordionItemCustom>
                <AccordionItemCustom title="DO YOU HAVE YOUR OWN SMART CONTRACT?">
                  Yes, we developed our own Smart Contract smartcontract.
                </AccordionItemCustom>
                <AccordionItemCustom title="CAN I RESELL MY PHALLUS NFT?">
                  You can resell it on <a href="https://opensea.io/">https://opensea.io/</a>
                </AccordionItemCustom>
              </Accordion>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
