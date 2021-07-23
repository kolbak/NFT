import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Navbar from './navbar'

import './header.scss'

const Header = ({ siteTitle }) => (
  <header className="header" >
    <div className="header-inner-wrap">
      <h1>
        <Link to="/" className="link">
          {siteTitle}
        </Link>
      </h1>
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
