import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import presale from "../images/presale.jpg"

import './mint-pass.scss'

const MintPass = () => {
  const isBrowser = typeof window !== "undefined"

  let [screenWidth, setScreenWidth] = useState(isBrowser && window.innerWidth);
  isBrowser && window.addEventListener("resize", resizeInMintPass);
  function resizeInMintPass() {
    setScreenWidth(isBrowser && window.innerWidth);
  }

  function onConnect() {

  }

  return (
    <Layout>
      <Seo title="Mint-pass" />
      <div className="gen-wrap presale-wrap">
        <h1>#FAPP MINT-PASS</h1>
        <div className="content">
          {screenWidth > 1300 &&
            <>
              <div className="text">
                <p>#FAPP mint-pass gives you pre-sale access that lets you buy up to 7 #FAPP loot-boxes before the public sale.</p>
                <p>Pre-sale access allows you to reduce the cost of ETH GAS fee and gives you the guaranteed right to buy #FAPP nft.</p>
                <div className="btns">
                  <button onClick={onConnect} className="cnct-wallet">Connect your wallet</button>
                  <button onClick={onConnect} className="mint">Mint</button>
                </div>
              </div>
              <img src={presale} alt="presale image" />
            </>
          }
          {screenWidth <= 1300 &&
            <>
              <p>#FAPP mint-pass gives you pre-sale access that lets you buy up to 7 #FAPP loot-boxes before the public sale.</p>
              <p>Pre-sale access allows you to reduce the cost of ETH GAS fee and gives you the guaranteed right to buy #FAPP nft.</p>
              <img src={presale} alt="presale image" />
              <button onClick={onConnect} className="cnct-wallet">Connect your wallet</button>
              <button onClick={onConnect} className="mint">Mint</button>
            </>
          }
        </div>
      </div>
    </Layout>)
}

export default MintPass