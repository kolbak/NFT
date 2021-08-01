import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Box } from "@chakra-ui/react"

import Navbar from './navbar'

import './header.scss'

import yt from '../images/icons8-youtube-play-button.svg'
import f from '../images/icons8-facebook.svg'
import ig from '../images/icons8-instagram-old.svg'
import twitter from '../images/icons8-twitter.svg'
import twitch from '../images/icons8-twitch.svg'

const Header = ({ siteTitle }) => {
  function ButtonCustom({ children, className }) {
    return <Box
      className={className}
      as="button"
      // boxShadow="0 0 5px 2px #b3b3b3"
      border="3px solid whitesmoke"
      // borderRadius="30px"
      color="whitesmoke"
      bgColor="#292929"
    >
      {children}
    </Box>
  }

  return (
    <header className="header" >
      <div className="header-inner-wrap">
        <Navbar />
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
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
