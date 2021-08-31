/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

function Seo({ lang, meta, title }) {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      name="viewport" content="width=device-width, initial-scale=1.0"
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
