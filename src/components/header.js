import * as React from "react"
import PropTypes from "prop-types"

import Navbar from './navbar'

import './header.scss'

const Header = ({ siteTitle }) => {
  return (
    <header className="header" >
      <div className="header-inner-wrap">
        <Navbar />
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
