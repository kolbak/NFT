import React, { useRef, useState, useEffect } from "react"
import { connectToContract, mint } from "../etc/contract.js"
import MintTimer from "../components/mint_timer.js"
import DotLoader from "../components/loader.js"

import { Link } from "gatsby"
import {
  Box,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./mint.scss"

const Mint = () => {
  const amountEl = useRef(null)
  const [mintedAmount, setMintedAmount] = useState(null)

  useEffect(async () => {
    const res = await fetch(
      "https://familyphallusplanet.com/api/total-supply",
      {
        method: "GET",
      }
    )
    const amount = await res.json()
    setMintedAmount(amount)
  }, [])

  return (
    <Layout>
      <Seo title="Mint" />
      <div className="gen-wrap mint-wrap">
        <h1>Create your Phallus Avatar</h1>
        <h2>
          To mint your Phallus simply connect your MetaMask wallet and choose
          the number you wish to get.
          <p>
            <em>You should add enough funds for NFTs + GAS fee.</em>
          </p>
        </h2>

        <div className="timerWrapper">
          {/* <p className="mintTitle">PRE-SALE FOR FAPP-CB HOLDERS: LIVE</p> */}
          <MintTimer scale="0.9" title="PUBLIC SALE STARTS IN:" />
        </div>

        <div className="connect">
          <div className="text">
            <h2>Connect</h2>
            <p>
              Join our <a href="https://discord.gg/zFjWr4wUwH">Discord</a>{" "}
              server if you need help.
            </p>
          </div>
          <button
            onClick={() => {
              connectToContract(window.ethereum)
              dataLayer.push({ event: "metamaskconnect" })
            }}
            className="mint-cnct-wallet"
          >
            Connect your wallet
          </button>
        </div>
        <div className="mint">
          <div className="text">
            <h2>Mint</h2>
            <p>
              You can mint up to a maximum of 15 Phalluses in a single
              transaction.
            </p>
          </div>
          <div className="form">
            <form action="">
              <FormControl id="amount" onSubmit={e => e.preventDefault()}>
                <FormLabel>Amount (max: 15)</FormLabel>
                <NumberInput min={1} max={15} defaultValue={1}>
                  <NumberInputField ref={amountEl} required />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </form>
          </div>
        </div>
        <div className="terms-container">
          <button
            onClick={() => {
              console.log("Mint amount:  ", amountEl.current.value)
              mint(amountEl.current.value)
            }}
            className="mint-cnct-wallet"
          >
            Mint
          </button>
          <p className="agreement">
            By minting a Phallus you agree to our{" "}
            <Link to="/terms">Terms of Service.</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Mint
