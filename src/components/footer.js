import * as React from "react"
import { Box } from "@chakra-ui/react"
import logo from '../images/logo.svg'

import yt from "../images/icons8-youtube-play-button.svg"
import discord from "../images/icons8-discord.svg"
import ig from "../images/icons8-instagram-old.svg"
import twitter from "../images/icons8-twitter.svg"
import opensea from "../images/opensea.svg"

import './footer.scss'

const Footer = () => (
  <footer id="contacts" className="footer"  >
    <div className="footer-inner-wrap">
      <div className="info footer-column">
        <Box
          className="logo"
          as="img"
          alt="logo"
          src={logo}
        ></Box>
        <hr />
        <span>Copyright © 2021 Family Phallus Planet - FAPP.<br /> All rights reserved.</span>
      </div>
      <div className="contacts footer-column">
        <h3>CONTACTS</h3>
        <div className="icons">
            <a href="https://opensea.io/collection/fapp"><img src={opensea} alt="opensea" /></a>
            <a href="https://twitter.com/FAP_Planet"><img src={twitter} alt="twitter" /></a>
            <a href="https://discord.gg/zFjWr4wUwH"><img src={discord} alt="discord" /></a>
        </div>
        <span><a className="mail" href="mailto:familyphallusplanet@gmail.com">familyphallusplanet@gmail.com</a></span>
      </div>
    </div>
  </footer>
)

export default Footer