import React, { useState, useEffect, useRef } from "react"
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
import roadmap1 from '../images/roadmap1.jpeg';
import roadmap2 from '../images/roadmap2.jpg';
import roadmap3 from '../images/roadmap3.jpeg';
import roadmap4 from '../images/roadmap4.jpg';
import roadmap5 from '../images/roadmap5.jpg';
import roadmap6 from '../images/roadmap6.jpg';

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

const IndexPage = () => {
  const isBrowser = typeof window !== "undefined"

  let [screenWidth, setScreenWidth] = useState(isBrowser && window.innerWidth);
  isBrowser && window.addEventListener("resize", resizeInIndex);
  function resizeInIndex(){
    setScreenWidth(isBrowser && window.innerWidth);
  }

  const pointsMap = useRef(null);
  const line = useRef(null);
  useEffect(() => {
    if (isBrowser) {
      //? scrolling roadmap
      window.addEventListener('scroll', lineScroll)
      function lineScroll() {
        if (pointsMap.current && line.current) {
          let pointsPosTop = pointsMap.current?.getBoundingClientRect().top - window.screen.height / 2;
          let pointsPosBottom = pointsMap.current?.getBoundingClientRect().bottom - window.screen.height / 2;

          let scrolled = false;
          if (pointsPosBottom < 0) {
            line.current.style.bottom = "20px";
            scrolled = true;
          }
          if (pointsPosTop < 0 && !scrolled) {
            line.current.classList.add("visible");
            line.current.style.top = "20px";

            line.current.style.height =
              Math.floor((window.scrollY + window.screen.height / 2) - (window.scrollY + line.current.getBoundingClientRect().top)) + "px";
          }
          if (pointsPosTop > -150) {
            line.current.style.height = "50px";
            line.current.classList.remove("visible");
          }

        }
      }

      //? scroll from nav
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

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <div className="welcome-wrap">
          <div className="video-wrap"></div>
          <div className="content">
            <div className="welcome">
              <h1>FAMILY PHALLUS PLANET<br />FAPP</h1>
              <p>The NFT planet where every Phallus is unique and free!</p>
            </div>
            <ButtonCustom className="nav-btn">
              <span>MORE</span>
            </ButtonCustom>
            <div className="links">
              <a href="https://www.youtube.com/channel/UCch3zZDZ9ubRlhSFbknDUog"><img src={yt} alt="youtube" /></a>
              <a href="https://opensea.io/collection/fapp"><img src={opensea} alt="opensea" /></a>
              <a href="https://instagram.com/familyphallusplanet"><img src={ig} alt="instagram" /></a>
              <a href="https://twitter.com/FAP_Planet"><img src={twitter} alt="twitter" /></a>
              <a href="https://discord.gg/zFjWr4wUwH"><img src={discord} alt="discord" /></a>
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
          <div className="gen-wrap index">
            <div id="content-block-storyline" className="content-block storyline">
              <Fade left>
                <div className="text-wrap">
                  <div className="text">
                    <h2>Storyline</h2>
                    <p>
                      We are a team of artists, developers and financial analysts that discovered Family Phallus Planet - FAPP.
                    </p>
                    <br />
                    <p>
                      Whether you are a male or a female, gay or lesbian, feminist or masculist, transsexual or pansexual - we don't care who you are! We want to show the whole world that Phalluses are not "disgusting", it’s also something that can be cute and beautiful!
                      Our mission is to help fight AIDS, stop body shaming and prove that art should be provocative.
                    </p>
                    <br />
                    <p>
                      Family Phallus Planet - FAPP is an Ethereum Blockchain planet with 8888 generative 2.5 inch NFT Phalluses.
                      FAPP is not boring, every Phallus here knows how to deal with boredom!
                      Look at Phalluses! They know that they're small, but they DGAF about it. They support each other and think about their strengths while humans pay too much attention to their "problems".
                      Mint your Phallus and join the community where everyone can find friends and forget about stupid stereotypes!
                    </p>
                  </div>
                  <ButtonCustomMint className="toMint">
                    <Link to="/mint">
                      <span>MINT</span>
                    </Link>
                  </ButtonCustomMint>
                </div>
              </Fade>
              <Fade right>
                <img src={storyline} alt="storyline image" />
              </Fade>
            </div>
            <div id="content-block-nft" className="content-block nft">
              <Fade right>
                <div className="info">
                  <h2>NFT</h2>
                  <div className="about">
                    <h3>8888 generative NFTs.</h3>
                    <h3>175 Traits</h3>
                    <h3>7 kinds of attributes</h3>
                    <h3>3 groups</h3>
                  </div>
                  <p>
                    Every Phallus has unique combination of background color, skin type, eyes, mouth, head and accessory
                  </p>
                </div>
              </Fade>
              <Fade left cascade>
                <div className="levels">
                  <div className="dope level">
                    <h3>
                      <span>5%</span> Dope group
                    </h3>
                    <div className="icons">
                      <figure>
                        <img src={precious} alt="Precious attribute image" />
                        <figcaption>Precious attributes</figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="wild level">
                    <h3>
                      <span>40%</span> Wild group
                    </h3>
                    <div className="icons">
                      <figure>
                        <img src={afterlife} alt="Halloween attribute image" />
                        <figcaption>Halloween attributes</figcaption>
                      </figure>
                      <figure>
                        <img src={cyber} alt="Cyber attribute image" />
                        <figcaption>Cyber attributes</figcaption>
                      </figure>
                      <figure>
                        <img src={wild} alt="Animal attribute image" />
                        <figcaption>Animal attributes</figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="basic level">
                    <h3>
                      <span>55%</span> Basic group
                    </h3>
                    <div className="icons">
                      <figure>
                        <img src={basic} alt="Common attribute image" />
                        <figcaption>Common attributes</figcaption>
                      </figure>
                      <figure>
                        <img src={superhero} alt="Superhero attribute image" />
                        <figcaption>Superhero attributes</figcaption>
                      </figure>
                      <figure>
                        <img src={protection} alt="Protection attribute image" />
                        <figcaption>Protection attributes</figcaption>
                      </figure>
                      <figure>
                        <img src={rasta} alt="Stoned attribute image" />
                        <figcaption>Stoned attributes</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div id="content-block-roadmap" className="content-block roadmap">
              <Fade left>
                <h2>ROADMAP</h2>
                <h4>Short-term</h4>
              </Fade>
              {screenWidth > 1300 &&
                <div className="points" ref={pointsMap}>
                  <div className="line-wrap">
                    <div className="line" ref={line}></div>
                  </div>
                  <Fade left>
                    <div className="point">
                      <h3><span>20%</span> FAPP is everywhere!</h3>
                      <img src={roadmap1} alt="roadmap first image" />
                      <p>
                        We will invest our funds in marketing. Everybody should know that we are great!
                      </p>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="point right">
                      <h3><span>40%</span> Charity time!</h3>
                      <img src={roadmap2} alt="roadmap second image" />
                      <p>
                        FAPP will make a donation to the AIDS Foundation.
                      </p>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="point">
                      <h3><span>60%</span> How rare is your Phallus?</h3>
                      <img src={roadmap3} alt="roadmap third image" />
                      <p>
                        FAPP will be added to «<a href="https://rarity.tools/">rarity.tools</a>».
                      </p>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="point right">
                      <h3><span>80%</span> #FAPP merch store!</h3>
                      <img src={roadmap4} alt="roadmap fourth image" />
                      <p>
                        Our official FAPP nft merch store will be unlocked for collectors.
                      </p>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="point">
                      <h3><span>90%</span> Phalluses need friends!</h3>
                      <img src={roadmap5} alt="roadmap fifth image" />
                      <p>We will drop new NFT collectible.</p>
                      <p>Every collector will be able to mint one free companion for a Phallus. Just pay GAS fee.</p>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="point right">
                      <h3><span>100%</span> Elections on FAPP</h3>
                      <img src={roadmap6} alt="roadmap sixth image" />
                      <p>Video game? Web series? Or maybe something new and crazy? All phalluses will vote for the future of FAPP!</p>
                    </div>
                  </Fade>
                </div>
              }
              {screenWidth <= 1300 &&
                <div className="points">
                  <div className="point">
                    <h3><span>20%</span> FAPP is everywhere!</h3>
                    <img src={roadmap1} alt="roadmap first image" />
                    <p>
                      We will invest our funds in marketing. Everybody should know that we are great!
                    </p>
                  </div>
                  <div className="point">
                    <h3><span>40%</span> Charity time!</h3>
                    <img src={roadmap2} alt="roadmap second image" />
                    <p>
                      FAPP will make a donation to the AIDS Foundation.
                    </p>
                  </div>
                  <div className="point">
                    <h3><span>60%</span> How rare is your Phallus?</h3>
                    <img src={roadmap3} alt="roadmap third image" />
                    <p>
                      FAPP will be added to «<a href="https://rarity.tools/">rarity.tools</a>».
                    </p>
                  </div>
                  <div className="point">
                    <h3><span>80%</span> #FAPP merch store!</h3>
                    <img src={roadmap4} alt="roadmap fourth image" />
                    <p>
                      Our official FAPP nft merch store will be unlocked for collectors.
                    </p>
                  </div>
                  <div className="point">
                    <h3><span>90%</span> Phalluses need friends!</h3>
                    <img src={roadmap5} alt="roadmap fifth image" />
                    <p>We will drop new NFT collectible.</p>
                    <p>Every collector will be able to mint one free companion for a Phallus. Just pay GAS fee.</p>
                  </div>
                  <div className="point">
                    <h3><span>100%</span> Elections on FAPP</h3>
                    <img src={roadmap6} alt="roadmap sixth image" />
                    <p>Video game? Web series? Or maybe something new and crazy? All phalluses will vote for the future of FAPP!</p>
                  </div>
                </div>}
              <div>
                <h4>Long-term</h4>
                <p>We don’t think that anybody can predict the future of FAPP.
                  Family Phallus Planet is a democratic planet where every Phallus can vote and decide what FAPP should do to become the most interesting NFT project.<br />
                  We want to create a community where everyone can be useful. Together we are strong!
                </p>
              </div>
            </div>
            <div id="content-block-faq" className="content-block faq">
              <Fade bottom>
                <h2>FAQ</h2>
                <Accordion className="accordion" allowMultiple allowToggle>
                  <AccordionItemCustom title="WHO ARE YOU?">
                    We are a team of artists, developers and financial analysts that discovered Family Phallus Planet - FAPP.
                  </AccordionItemCustom>
                  <AccordionItemCustom title="WHAT IS FAPP?">
                    Family Phallus Planet - FAPP is an Ethereum Blockchain planet with 8888 generative 2.5 inch NFT Phalluses.
                  </AccordionItemCustom>
                  <AccordionItemCustom title="TELL ME MORE ABOUT YOUR NFT COLLECTION!">
                    #FAPP nft collection has 175 hand-drawn traits.
                    <br />
                    <br />
                    Every Phallus has different combination of
                    <ul>
                      <li>Background color</li>
                      <li>Skin Type</li>
                      <li>Eyes</li>
                      <li>Mouth</li>
                      <li>Head</li>
                      <li>Accessories</li>
                    </ul>
                    <br />
                    Every traits have different attributes:
                    <ul>
                      <li>Common attributes</li>
                      <li>Protection attributes</li>
                      <li>Superhero attributes</li>
                      <li>Stoned attributes</li>
                      <li>Animal attributes</li>
                      <li>Cyber attributes</li>
                      <li>Halloween attributes</li>
                      <li>Precious attributes</li>
                    </ul>
                    <br />
                    Every attribute belongs to its own group:
                    <ul>
                      <li>Basic group
                        <ul className="faq-list-with-padding">
                          <li>Common attributes</li>
                          <li>Protection attributes</li>
                          <li>Superhero attributes</li>
                          <li>Stoned attributes</li>
                        </ul>
                      </li>
                      <br />
                      <li>Wild group
                        <ul className="faq-list-with-padding">
                          <li>Animal attributes</li>
                          <li>Cyber attributes</li>
                          <li>Halloween attributes</li>
                        </ul>
                      </li>
                      <br />
                      <li>Dope group
                        <ul className="faq-list-with-padding">
                          <li>Precious attributes</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionItemCustom>
                  <AccordionItemCustom title="WHAT ARE YOU PLANNING TO DO?">
                    <ul>
                      <li>We want to help fight AIDS.
                        <p>
                          <em>We will donate money to charities that will be chosen by Phalluses in our #FAPP community.</em>
                        </p>
                      </li>
                      <br />
                      <li>We want to stop body shaming.
                        <p>
                          <em>Look at Phalluses! They know that they're small, but they DGAF about it. They support each other and think about their strengths while humans pay too much attention to their "problems". Let's create a community where everyone can find friends and forget about stupid stereotypes! </em>
                        </p>
                      </li>
                      <br />
                      <li>Our team will provide giveaways and prizes.
                        <p>
                          <em>ETH coins, free NFTs and more cool stuff!</em>
                        </p>
                      </li>
                      <br />
                      <li>We want to create a big universe with different characters.
                        <p>
                          <em>We will create new NFT collectibles. Our collectors will be able to mint new NFTs for free!</em>
                        </p>
                      </li>
                    </ul>
                  </AccordionItemCustom>
                  <AccordionItemCustom title="WHAT ADVANTAGES DO YOU HAVE?">
                    <ul>
                      <li>Fair distribution</li>
                      <li>Good arts</li>
                      <li>Fresh and provocative idea</li>
                      <li>Great roadmap</li>
                      <li>Long-term ambitions</li>
                      <li>175 traits</li>
                      <li>Voting rights</li>
                      <li>We are unique</li>
                      <li>We give ownership and commercial usage rights to the collectors over their NFTs</li>
                    </ul>
                  </AccordionItemCustom>
                  <AccordionItemCustom title="HOW CAN I GET A PHALLUS?">
                    Click <a href="https://nft-cockiz.com/mint">here</a>, connect your MetaMask wallet and mint (buy) your NFT Phallus.<br />
                    1 Phallus costs 0.08 ETH + GAS.
                  </AccordionItemCustom>
                  <AccordionItemCustom title="CAN I SEE WHAT PHALLUS I WILL GET?">
                    No, you can buy tradable loot boxes. They will be replaced by Phalluses after the sold-out.
                  </AccordionItemCustom>
                  <AccordionItemCustom title="TELL ME ABOUT ROYALTY FEES AND LIQUIDITY POOL!">
                    We will take 7% from every resold Phallus. FAPP will send up to 10% to Family Phallus Planet’s liquidity pool. Our collectors will vote how this liquidity pool should be used.
                  </AccordionItemCustom>
                  <AccordionItemCustom title="WHERE DO YOU STORE YOUR NFTs?">
                    We use <a href="http://ifps.io/">ifps.io</a>! It’s the best way to store our NFT collectible. IPFS is a decentralised file hosting system. It means that your NFTs won’t disappear and you will be able to see them anytime you want!
                  </AccordionItemCustom>
                  <AccordionItemCustom title="WILL YOU MAKE MORE PHALLUSES?">
                    No we won't. We have only 8888 Phalluses.
                  </AccordionItemCustom>
                  <AccordionItemCustom title="DO YOU HAVE YOUR OWN SMART CONTRACT?">
                    Yes, we developed our own Smart Contract smartcontract-.
                  </AccordionItemCustom>
                  <AccordionItemCustom title="CAN I RESELL MY PHALLUS NFT?">
                    You can resell it on <a href="https://opensea.io/">https://opensea.io/</a>
                  </AccordionItemCustom>
                  <AccordionItemCustom title="WHERE CAN I FIND YOU?">
                    <a href="https://twitter.com/FAP_Planet">Twitter</a><br />
                    <a href="https://instagram.com/familyphallusplanet">Instagram</a><br />
                    <a href="https://opensea.io/collection/fapp">OpenSea</a><br />
                    <a href="https://familyphallusplanet.com/">Website</a><br />
                    <a href="https://bubbleron.com/familyphallusplanet">Bubbleron</a><br />
                    <a href="https://www.youtube.com/channel/UCch3zZDZ9ubRlhSFbknDUog">Youtube</a>
                    <a href="https://discord.gg/zFjWr4wUwH">Discord</a>
                  </AccordionItemCustom>
                </Accordion>
              </Fade>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
