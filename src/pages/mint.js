import React, { useRef } from "react"
// import { ethers } from "ethers";
import { Link } from "gatsby"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './mint.scss'

const Mint = () => {
  function onInput(e) {
    //? проверка на макисмальное кол-во символов
    if (e.target.value.length > +e.target.dataset.maxl) e.target.value = e.target.value.slice(0, e.target.dataset.maxl);
  }
  // console.log('new ethers :>> ', new ethers.providers.JsonRpcProvider());

  function onConnect() {

  }

  return (
    <Layout>
      <Seo title="Mint" />
      <div className="gen-wrap mint-wrap">
        <h1>Create your Phallus Avatar</h1>
        <h2>
          To mint your Phallus simply connect your MetaMask wallet and choose the number you wish to get.
          <p><em>You should add enough funds for NFTs + GAS fee.</em></p>
        </h2>
        <div className="connect">
          <div className="text">
            <h2>Connect</h2>
            <p>Join our <a href="https://discord.gg/zFjWr4wUwH">Discord</a> server if you need help.</p>
          </div>
          <button onClick={onConnect} className="mint-cnct-wallet">Connect your wallet</button>
        </div>
        <div className="mint">
          <div className="text">
            <h2>Mint</h2>
            <p>You can mint up to a maximum of 15 Phalluses in a single transaction.</p>
          </div>
          <div className="form">
            <form action="">
              <FormControl id="amount">
                <FormLabel>Amount</FormLabel>
                <NumberInput min={1} max={15}>
                  <NumberInputField data-maxl={2} onInput={onInput} required />
                </NumberInput>
              </FormControl>
            </form>
          </div>
        </div>
        <div className="terms-container">
          <button onClick={onConnect} className="mint-cnct-wallet">Mint</button>
          <p className="agreement">By minting a Phallus you agree to our <Link to="/terms">Terms of Service.</Link></p>
        </div>
      </div>
    </Layout>)
}

export default Mint