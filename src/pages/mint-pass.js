import React, { useState } from "react"
import { Link } from "gatsby"

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
                <p>#FAPP Comic Book | FAPP-CB is a collection of 500 tradable mint-pass NFT comic books.</p>
                <p>FAPP-CB gives you pre-sale access that lets you get access to exclusive raffles, buy up to 7 #FAPP loot-boxes before the public sale and avoid GAS war (very expensive ETH GAS fees).</p>
                <div className="btns">
                  <button onClick={onConnect} className="cnct-wallet">Connect your wallet</button>
                  <button onClick={onConnect} className="mint">Mint</button>
                </div>
                <p className="agreement">By minting a FAPP-CB you agree to our <Link to="/terms">Terms of Service.</Link></p>
              </div>
              <img src={presale} alt="presale image" />
            </>
          }
          {screenWidth <= 1300 &&
            <>
              <p>#FAPP Comic Book | FAPP-CB is a collection of 500 tradable mint-pass NFT comic books.</p>
              <p>FAPP-CB gives you pre-sale access that lets you get access to exclusive raffles, buy up to 7 #FAPP loot-boxes before the public sale and avoid GAS war (very expensive ETH GAS fees).</p>
              <img src={presale} alt="presale image" />
              <button onClick={onConnect} className="cnct-wallet">Connect your wallet</button>
              <button onClick={onConnect} className="mint">Mint</button>
              <p className="agreement">By minting a FAPP-CB you agree to our <Link to="/terms">Terms of Service.</Link></p>
            </>
          }
        </div>
      </div>
    </Layout>)
}

export default MintPass