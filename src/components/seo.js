import * as React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"
import preview from "../images/storyline.jpeg"

function Seo({ lang, meta, title, refresh, isMintPassPage }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={isMintPassPage ? title : "FAPP"}
      name="viewport"
      content="width=device-width, initial-scale=1.0"
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
      <meta
        name="description"
        content="website with NFT tokens, NFT collection, FAPP"
      />
      <meta
        name="og:description"
        content="3333 Generative 2.5 inch NFT Phalluses on Family Phallus Planet #FAPP"
      />
      <meta name="og:image" content={preview} />
      {/* <meta property="vk:image" content={preview} /> */}
      {refresh && <meta httpEquiv="refresh" content="0.5; url=/" />}
      //? Yandex.Metrika counter
      <script>
        {`(function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
            m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
          })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(85436380, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          });`}
      </script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <noscript>
        {`<div><img src="https://mc.yandex.ru/watch/85436380" style="position:absolute; left:-9999px;" alt="" /></div>`}
      </noscript>
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
