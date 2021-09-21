import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import preview from "../images/storyline.jpeg"

function Seo({ lang, meta, title, refresh }) {
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
    >
      <meta name="description" content="website with NFT tokens, NFT collection, FAPP" />

      <meta name="og:description" content="8888 Generative 2.5 inch NFT Phalluses on Family Phallus Planet #FAPP" />
      <meta name="og:image" content={preview} />
      {/* <meta property="vk:image" content={preview} /> */}
      {refresh &&
        <meta httpEquiv="refresh" content="0.5; url=/" />
      }
    </Helmet>
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
