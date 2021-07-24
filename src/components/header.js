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
      boxShadow="0 0 5px 2px #b3b3b3"
      borderRadius="30px"
      color="whitesmoke"
      bgColor="#131826"
    >
      {children}
    </Box>
  }

  return (
    <header className="header" >
      <div className="header-inner-wrap">
        <Navbar />
        <div className="welcome">
          <h1>WELCOME TO THE TOP DOG BEACH CLUB!</h1>
          <p>A unique NFT experience, pushing the boundaries of community and club membership.</p>
        </div>
        <div className="nav-btns">
          <ButtonCustom colorScheme="teal" variant="ghost">
            <span>Explore the roadmap</span>
          </ButtonCustom>
          <ButtonCustom colorScheme="teal" variant="ghost">
            <span>Join the club</span>
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
