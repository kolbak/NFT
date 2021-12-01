import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import contractConfig from "../etc/config.json"

import "./character.scss"

const Character = ({ location }) => {
  const isBrowser = typeof window !== "undefined"
  const [nftData, setNftData] = useState({ attributes: [] })

  useEffect(async () => {
    try {
      const id = new URL(location.href).searchParams.get("id")
      const res = await fetch(`https://cockiz-test.ru/api/nft/${id}`, {
        method: "GET",
      })
      const nft = await res.json()

      //   nft.birthday = new Intl.DateTimeFormat("en-US").format(new Date())
      nft.opensea = `https://testnets.opensea.io/assets/${contractConfig.contractArdess}/${id}`

      setNftData(nft)
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <Layout>
      <Seo title="FAPP" />
      <div className="gen-wrap char">
        <h1 className="name">{nftData.name}</h1>
        <img className="avatar" alt="character image" src={nftData.image} />
        <a href={nftData.opensea} target="_blank" className="OpenSea-link">
          View on OpenSea
        </a>
        <h2 className="detail-header">Details</h2>
        <div className="text">
          <ul>
            <li className="detail">
              Birthday
              <span className="points"></span>
              <span className="value">none</span>
            </li>
            {nftData.attributes.map(attr => (
              <li className="detail">
                {attr.trait_type}
                <span className="points"></span>
                <span className="value">{attr.value}</span>
                {/* <p className="level">Wild-Afterlife</p>
                <p className="occurs">
                  Occurs in<span> 10%</span>
                </p> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Character
