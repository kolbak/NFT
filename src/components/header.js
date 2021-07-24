import * as React from "react"
import PropTypes from "prop-types"

import { Box } from "@chakra-ui/react"

import Navbar from './navbar'

import './header.scss'

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
            Explore the roadmap
          </ButtonCustom>
          <ButtonCustom colorScheme="teal" variant="ghost">
            Join the club
          </ButtonCustom>
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
