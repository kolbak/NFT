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
          src={logo}
        >
        </Box>
        <hr />
        <span>SUBJECT OF COPYRIGHT © 2021</span>
      </div>
      <div className="contacts footer-column">
        <h3>CONTACTS</h3>
        <div className="icons">
              <img src={yt} alt="youtube" />
              <img src={opensea} alt="opensea" />
              <img src={ig} alt="instagram" />
              <img src={twitter} alt="twitter" />
              <img src={discord} alt="discord" />
        </div>
        <span className="mail">SUPPORT@DOMIN.COM</span>
      </div>
    </div>
  </footer>
)

export default Footer