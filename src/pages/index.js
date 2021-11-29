import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
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

import characterEx1 from "../images/1.png"
import characterEx2 from "../images/2.png"
import characterEx3 from "../images/3.png"
import characterEx4 from "../images/4.png"
import characterEx5 from "../images/5.png"
import characterEx6 from "../images/6.png"
import characterEx7 from "../images/7.png"
import characterEx8 from "../images/8.png"
import characterEx9 from "../images/9.png"
import characterEx10 from "../images/10.png"
import characterEx11 from "../images/11.png"
import characterEx12 from "../images/12.png"
import characterEx13 from "../images/13.png"
import characterEx14 from "../images/14.png"
import characterEx15 from "../images/15.png"
import characterEx16 from "../images/16.png"

import storyline from "../images/storyline.jpeg"
import roadmap1 from "../images/roadmap1.jpeg"
import roadmap2 from "../images/roadmap2.jpg"
import roadmap3 from "../images/roadmap3.jpeg"
import roadmap4 from "../images/roadmap4.jpg"
import roadmap5 from "../images/roadmap5.jpg"
import roadmap6 from "../images/roadmap6.jpg"

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

  let [screenWidth, setScreenWidth] = useState(null)

  const pointsMap = useRef(null)
  const line = useRef(null)
  useEffect(() => {
    if (isBrowser) {
      setScreenWidth(window.innerWidth)
      window.addEventListener("resize", resizeInIndex)
      function resizeInIndex() {
        setScreenWidth(window.innerWidth)
      }

      //? scrolling roadmap
      window.addEventListener("scroll", lineScroll)
      function lineScroll() {
        if (pointsMap.current && line.current) {
          let pointsPosTop =
            pointsMap.current?.getBoundingClientRect().top -
            window.screen.height / 2
          let pointsPosBottom =
            pointsMap.current?.getBoundingClientRect().bottom -
            window.screen.height / 2

          let scrolled = false
          if (pointsPosBottom < 0) {
            line.current.style.bottom = "20px"
            scrolled = true
          }
          if (pointsPosTop < 0 && !scrolled) {
            line.current.classList.add("visible")
            line.current.style.top = "20px"

            line.current.style.height =
              Math.floor(
                window.scrollY +
                window.screen.height / 2 -
                (window.scrollY + line.current.getBoundingClientRect().top)
              ) + "px"
          }
          if (pointsPosTop > -150) {
            line.current.style.height = "50px"
            line.current.classList.remove("visible")
          }
        }
      }

      //? scroll from nav
      let searchStr = window.location.search
      let id = new URLSearchParams(searchStr).get("id")

      if (id) {
        let shift = document.getElementById(id).getBoundingClientRect().y

        window.scrollTo({
          top: shift - 50,
          behavior: "smooth",
        })
      }
    }
  }, [])

  //? скрол по more
  // const blockCarousel = useRef(null);
  // function scrollTo() {
  //   let shift = blockCarousel.current.getBoundingClientRect().y;
  //   window.scrollTo({
  //     top: shift - 20,
  //     behavior: 'smooth',
  //   });
  // }

  //? фальшивые данные
  let dummyDataArray = []
  let imgs = [
    characterEx1,
    characterEx2,
    characterEx3,
    characterEx4,
    characterEx5,
    characterEx6,
    characterEx7,
    characterEx8,
    characterEx9,
    characterEx10,
    characterEx11,
    characterEx12,
    characterEx13,
    characterEx14,
    characterEx15,
    characterEx16,
  ]
  for (let i = 0, l = 16; i < l; i++) {
    dummyDataArray.push({
      name: "chracter" + i,
      avatarSRC: imgs[i],
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
      <AccordionItem
        border="none"
        bg="#555555"
        outline="none"
        mb={4}
        className={className}
      >
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

  return (
    <Layout>
      <Seo title="FAPP" />
      <div className="welcome-wrap">
        <div className="video-wrap"></div>
        <div className="content">
          <div className="welcome">
            <h1>
              FAMILY PHALLUS PLANET
              <br />
              FAPP
            </h1>
            <p>The NFT planet where every Phallus is unique and free rewards holders with $260,000!</p>
          </div>
          <button className="nav-btn">
            <Link to="/mint-pass">
              <a>
                <span>MINT-PASS</span>
              </a>
            </Link>
          </button>
          <div className="links">
            <a href="https://opensea.io/collection/fapp">
              <img src={opensea} alt="opensea" />
            </a>
            <a href="https://twitter.com/FAP_Planet">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://discord.gg/zFjWr4wUwH">
              <img src={discord} alt="discord" />
            </a>
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
                    We are a team of artists, developers and financial analysts.
                    Together we discovered Family Phallus Planet - FAPP.
                  </p>
                  <br />
                  <p>
                    Whether you are a male or a female, gay or lesbian, feminist
                    or masculist, transsexual or pansexual - we don't care. We
                    want to show the whole world that Phalluses are not
                    disgusting, but cute and beautiful! Our mission is to help
                    fight AIDS, stop body shaming and prove that art should be
                    provocative.
                  </p>
                  <br />
                  <p>
                    Family Phallus Planet (FAPP) is a collection of 8888 unique
                    generative 2.5-inch NFT Phalluses living on the Ethereum
                    blockchain. FAPP is far from boring, every Phallus here
                    knows exactly how to deal with boredom. Just look at them!
                    They know they're small, but they DGAF about it. Phalluses
                    support each other and focus on their strengths, while
                    humans pay too much attention to their problems.
                  </p>
                  <br />
                  <p>
                    On Family Phallus Planet everyone can find friends and
                    forget about stupid stereotypes. Mint your own unique
                    Phallus and join our exclusive community!
                  </p>
                </div>
                <ButtonCustomMint className="toMint">
                  <Link to="https://discord.gg/zFjWr4wUwH">
                    <span>Join our Discord</span>
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
                  Every Phallus has a unique combination of background color,
                  skin type, eyes, mouth, head and accessories.
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
              <h4>Sales Plan</h4>
              <ul>
                <li>
                  We will sell 200 tradable #FAPP Comic Book - FAPP-CB NFTs that
                  give you pre-sale access and let you buy up to 7 Phalluses
                  before the public sale, gives you 1 Free Phallus NFT, 25%
                  discount for the main drop and a chance to win $2000 and a
                  Rare Phallus!
                </li>
                <li>
                  After one week all FAPP-CB holders will get pre-sale access.
                </li>
                <li>
                  After the pre-sale is completed we will start the public sale.
                  During the public sale everyone will be able to buy tradable
                  #FAPP loot boxes.
                </li>
                <li>
                  After everything is sold out, we will reveal all 8888 loot
                  boxes and you will see your Phalluses.
                </li>
              </ul>
              <h3>Short-term</h3>
            </Fade>
            <div className="points" ref={screenWidth > 1300 ? pointsMap : null}>
              {screenWidth > 1300 && (
                <>
                  <div className="line-wrap">
                    <div className="line" ref={line}></div>
                  </div>
                  <Fade left>
                    <div className="point">
                      <h3>
                        <span>20%</span> FAPP is everywhere!
                      </h3>
                      <img src={roadmap1} alt="roadmap first image" />
                      <p>We’ll invest our funds in marketing. We’re great and everyone should hear about us!
                        Rolex Datejust 41 Iced-out piece or 22,000 USDT will be sent to 1 random holder!</p>
                      <p>10,000 USD will be donated to help fight HIV/AIDS</p>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="point right">
                      <h3>
                        <span>40%</span> Charity time!
                      </h3>
                      <img src={roadmap2} alt="roadmap second image" />
                      <p>FAPP will make a donation to the AIDS Foundation.</p>
                      <p>Total 3 ETH will be sent to 20 random holders.</p>
                      <p>20,000 USD will be donated to help fight HIV/AIDS.</p>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="point">
                      <h3>
                        <span>60%</span> How rare is your Phallus?
                      </h3>
                      <img src={roadmap3} alt="roadmap third image" />
                      <p>
                        FAPP will be added to «
                        <a href="https://rarity.tools/">rarity.tools</a>».
                      </p>
                      <p>Ledger wallet with 50,000 USDT will be sent to 1 random holder!
                        0.3 ETH will be sent to 10 random holders!</p>
                      <p>20,000 USD will be donated to help fight HIV/AIDS</p>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="point right">
                      <h3>
                        <span>80%</span> #FAPP merch store!
                      </h3>
                      <img src={roadmap4} alt="roadmap fourth image" />
                      <p>
                        Our official FAPP nft merch store will be unlocked for
                        collectors.
                      </p>
                      <p>Total 9 ETH will be sent to 20 random holders.</p>
                      <p>20,000 USD will be donated to help fight HIV/AIDS.</p>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="point">
                      <h3>
                        <span>90%</span> Phalluses need friends!
                      </h3>
                      <img src={roadmap5} alt="roadmap fifth image" />
                      <p>We’ll drop a new NFT collectible.</p>
                      <p>
                        Every collector will be able to mint one free companion
                        for a Phallus. Just pay the gas fee.
                      </p>
                      <p>0.6 ETH will be sent to 10 random holders..</p>
                      <p>20,000 USD will be donated to help fight HIV/AIDS.</p>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="point right">
                      <h3>
                        <span>100%</span> Elections on FAPP
                      </h3>
                      <img src={roadmap6} alt="roadmap sixth image" />
                      <p>
                        A video game? A web series? Or maybe something new and
                        crazy? FAPP will be added to decentraland! All Phalluses will vote for the future of FAPP!
                      </p>
                      <p>Mercedes-Benz c63s AMG or 105,000 USDT will be sent to 1 random holder!</p>
                      <p>20,000 USD will be donated to help fight HIV/AIDS.</p>
                    </div>
                  </Fade>
                </>
              )}
              {screenWidth <= 1300 && (
                <>
                  <div className="point">
                    <h3>
                      <span>20%</span> FAPP is everywhere!
                    </h3>
                    <img src={roadmap1} alt="roadmap first image" />
                    <p>
                      We’ll invest our funds in marketing. We’re great and
                      everyone should hear about us!
                    </p>
                    <p>Rolex Datejust 41 Iced-out piece or 22,000 USDT will be sent to 1 random holder!</p>
                    <p>10,000 USD will be donated to help fight HIV/AIDS</p>
                  </div>
                  <div className="point">
                    <h3>
                      <span>40%</span> Charity time!
                    </h3>
                    <img src={roadmap2} alt="roadmap second image" />
                    <p>FAPP will make a donation to the AIDS Foundation.</p>
                    <p>Total 3 ETH will be sent to 20 random holders.</p>
                    <p>20,000 USD will be donated to help fight HIV/AIDS.</p>
                  </div>
                  <div className="point">
                    <h3>
                      <span>60%</span> How rare is your Phallus?
                    </h3>
                    <img src={roadmap3} alt="roadmap third image" />
                    <p>
                      FAPP will be added to «
                      <a href="https://rarity.tools/">rarity.tools</a>».
                    </p>
                    <p>Ledger wallet with 50,000 USDT will be sent to 1 random holder!
                      0.3 ETH will be sent to 10 random holders!</p>
                    <p>20,000 USD will be donated to help fight HIV/AIDS</p>
                  </div>
                  <div className="point">
                    <h3>
                      <span>80%</span> #FAPP merch store!
                    </h3>
                    <img src={roadmap4} alt="roadmap fourth image" />
                    <p>
                      Our official FAPP nft merch store will be unlocked for
                      collectors.
                    </p>
                    <p>Total 9 ETH will be sent to 20 random holders.</p>
                    <p>20,000 USD will be donated to help fight HIV/AIDS.</p>
                  </div>
                  <div className="point">
                    <h3>
                      <span>90%</span> Phalluses need friends!
                    </h3>
                    <img src={roadmap5} alt="roadmap fifth image" />
                    <p>We’ll drop a new NFT collectible.</p>
                    <p>
                      Every collector will be able to mint one free companion
                      for a Phallus. Just pay the gas fee.
                    </p>
                    <p>0.6 ETH will be sent to 10 random holders.</p>
                    <p>20,000 USD will be donated to help fight HIV/AIDS.</p>
                  </div>
                  <div className="point">
                    <h3>
                      <span>100%</span> Elections on FAPP
                    </h3>
                    <img src={roadmap6} alt="roadmap sixth image" />
                    <p>
                      A video game? A web series? Or maybe something new and
                      crazy? FAPP will be added to decentraland! All Phalluses will vote for the future of FAPP!
                    </p>
                    <p>Mercedes-Benz c63s AMG or 105,000 USDT will be sent to 1 random holder!</p>
                    <p>20,000 USD will be donated to help fight HIV/AIDS.</p>
                  </div>
                </>
              )}
            </div>
            <div>
              <h4>Long-term</h4>
              <p>
                We don’t think that anybody can predict the future of FAPP.
                Family Phallus Planet is a democratic planet where every Phallus
                can vote and decide what FAPP should do to become the most
                interesting NFT project.
                <br />
                We want to create a community where everyone can be useful.
                Together we are strong!
              </p>
            </div>
          </div>
          <div id="content-block-benefits" className="content-block benefits">
            <h2>BENEFITS</h2>
            <p>
              We will take 9% from the secondary market as royalties. That's
              what we're going to do with all this money!
            </p>
            <ul>
              <li>
                <h3>Free NFT</h3>
                <p>
                  We'll develop new collections for our metaverse, we have many
                  ideas.
                </p>
                <p>
                  Every holder will be able to mint 1 free NFT companion for
                  their Phalluses.
                </p>
              </li>
              <li>
                <h3>Floor price</h3>
                <p>
                  15% from royalties will be used for buying the floor price
                  tokens. We're going to burn these tokens to increase the
                  rarity of the collection. These actions will raise the price.
                </p>
              </li>
              <li>
                <h3>Bounties</h3>
                <p>
                  We think that we must encourage our collectors. Every month
                  we'll send up to 10% from our royalties to five random
                  holders.
                </p>
              </li>
              <li>
                <h3>Fire</h3>
                <p>
                  If we don't sell everything we'll just burn all unsold NFTs,
                  it means that our collectors will benefit anyway.
                </p>
              </li>
            </ul>
          </div>
          <div id="content-block-faq" className="content-block faq">
            <Fade bottom>
              <h2>FAQ</h2>
              <Accordion className="accordion" allowMultiple allowToggle>
                <AccordionItemCustom title="WHO ARE YOU?">
                  We are a team of artists, developers and financial analysts.
                  Together we discovered Family Phallus Planet - FAPP.
                </AccordionItemCustom>
                <AccordionItemCustom title="WHAT IS FAPP?">
                  Family Phallus Planet - FAPP is an Ethereum Blockchain planet
                  with 8888 generative 2.5 inch NFT Phalluses.
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
                    <li>
                      Basic group
                      <ul className="faq-list-with-padding">
                        <li>Common attributes</li>
                        <li>Protection attributes</li>
                        <li>Superhero attributes</li>
                        <li>Stoned attributes</li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      Wild group
                      <ul className="faq-list-with-padding">
                        <li>Animal attributes</li>
                        <li>Cyber attributes</li>
                        <li>Halloween attributes</li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      Dope group
                      <ul className="faq-list-with-padding">
                        <li>Precious attributes</li>
                      </ul>
                    </li>
                  </ul>
                </AccordionItemCustom>
                <AccordionItemCustom title="WHAT ARE YOU PLANNING TO DO?">
                  <ul>
                    <li>
                      We want to help fight AIDS.
                      <p>
                        <em>
                          We will donate money to charities that will be chosen
                          by Phalluses in our #FAPP community.
                        </em>
                      </p>
                    </li>
                    <br />
                    <li>
                      We want to stop body shaming.
                      <p>
                        <em>
                          Look at Phalluses! They know that they're small, but
                          they DGAF about it. They support each other and think
                          about their strengths while humans pay too much
                          attention to their "problems". Let's create a
                          community where everyone can find friends and forget
                          about stupid stereotypes!{" "}
                        </em>
                      </p>
                    </li>
                    <br />
                    <li>
                      Our team will provide giveaways and prizes.
                      <p>
                        <em>ETH coins, free NFTs and more cool stuff!</em>
                      </p>
                    </li>
                    <br />
                    <li>
                      We want to create a big universe with different
                      characters.
                      <p>
                        <em>
                          We will create new NFT collectibles. Our collectors
                          will be able to mint new NFTs for free!
                        </em>
                      </p>
                    </li>
                  </ul>
                </AccordionItemCustom>
                <AccordionItemCustom title="WHAT ADVANTAGES DO YOU HAVE?">
                  <ul>
                    <li>Fair distribution</li>
                    <li>Good arts</li>
                    <li>A fresh and provocative idea</li>
                    <li>A great roadmap</li>
                    <li>Long-term ambitions</li>
                    <li>175 traits</li>
                    <li>Voting rights</li>
                    <li>We are unique</li>
                    <li>
                      We give ownership and commercial usage rights to the
                      collectors over their NFTs
                    </li>
                  </ul>
                </AccordionItemCustom>
                {/* <AccordionItemCustom title="HOW CAN I GET A PHALLUS?">
                  Click <a href="https://nft-cockiz.com/mint">here</a>, connect your MetaMask wallet and mint (buy) your NFT Phallus.<br />
                  1 Phallus costs 0.08 ETH + GAS.
                </AccordionItemCustom> */}
                <AccordionItemCustom title="CAN I SEE WHAT PHALLUS I WILL GET?">
                  No, you can buy tradable loot boxes. They will be replaced by
                  Phalluses after everything is sold out.
                </AccordionItemCustom>
                <AccordionItemCustom title="TELL ME ABOUT ROYALTY FEES AND LIQUIDITY POOL!">
                  We will take 9% from every resold Phallus. FAPP will send up
                  to 10% to Family Phallus Planet’s liquidity pool. Our
                  collectors will vote how this liquidity pool should be used.
                </AccordionItemCustom>
                <AccordionItemCustom title="WHERE DO YOU STORE YOUR NFTs?">
                  We use <a href="http://ifps.io/">ifps.io</a>! It’s the best
                  way to store our NFT collectible. IPFS is a decentralised file
                  hosting system. It means that your NFTs won’t disappear and
                  you will be able to see them anytime you want!
                </AccordionItemCustom>
                <AccordionItemCustom title="WILL YOU MAKE MORE PHALLUSES?">
                  No we won't. We have only 8888 Phalluses.
                </AccordionItemCustom>
                <AccordionItemCustom title="DO YOU HAVE YOUR OWN SMART CONTRACT?">
                  Yes, we developed our own Smart Contract -{" "}
                  <a href="https://etherscan.io/address/0x5334f2a1d1c0d536e28452a5740d3290067844d7">
                    0x5334F2a1d1C0D536E28452A5740D3290067844D7
                  </a>
                  .
                </AccordionItemCustom>
                <AccordionItemCustom title="CAN I RESELL MY PHALLUS NFT?">
                  You can resell it on{" "}
                  <a href="https://opensea.io/">https://opensea.io/</a>
                </AccordionItemCustom>
                <AccordionItemCustom title="WHERE CAN I FIND YOU?">
                  <a href="https://twitter.com/FAP_Planet">Twitter</a>
                  <br />
                  <a href="https://opensea.io/collection/fapp">OpenSea</a>
                  <br />
                  <a href="https://familyphallusplanet.com/">Website</a>
                  <br />
                  <a href="https://discord.gg/zFjWr4wUwH">Discord</a>
                  <br />
                </AccordionItemCustom>
              </Accordion>
            </Fade>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
