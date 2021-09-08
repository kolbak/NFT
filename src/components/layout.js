import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../fonts/fonts.css"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="layout-inner-wrap" >
        <div className="layout-second-inner-wrap">
          <main>{children}</main>
        </div>
      </div>
      <script charSet="utf-8"
        src="https://cdn.ethers.io/lib/ethers-5.1.umd.min.js"
        type="text/javascript">
      </script>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
