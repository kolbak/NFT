import * as React from "react"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './mint.scss'

const Mint = () => {
  function ButtonCustom({ children, className }) {
    return (
      <Box
        className={className}
        as="button"
        type="submit"
      >
        {children}
      </Box>
    )
  }
  
  function checkValidity(){
    const amountInput = document.querySelector(".amount-input");
    amountInput.addEventListener('keypress', function(evt){
      if(Number.isInteger(+evt.key) || (evt.key === '.') || (evt.key === ',') || (evt.key === 'e')){
        evt.preventDefault();
          if(Number.isInteger(+evt.key) && amountInput.value.length === 0 && (+evt.key !== 0)){
            amountInput.value = evt.key;
          }
          else if(Number.isInteger(+evt.key) && amountInput.value.length === 1 && ((+amountInput.value * 10 + +evt.key) <= 15)) {
            amountInput.value += evt.key;
          }
      }
    })
  }
  
  return (
    <Layout>
      <Seo title="Mint" />
      <div className="gen-wrap">
        <h1>Create your Phallus Avatar</h1>
        <h2>
          To mint your Phallus simply connect your MetaMask wallet and choose the number you wish to mint.
          <p><em>You should add enough funds for NFTs + GAS fee.</em></p>
        </h2>
        <div className="connect">
          <div className="text">
            <h2>Connect</h2>
            <p>Join the our Discord server if you need help. lorem</p>
          </div>
          <ButtonCustom className="mint-cnct-wallet">Connect your wallet</ButtonCustom>
        </div>
        <div className="mint">
          <div className="text">
            <h2>Mint</h2>
            <p>You can mint up to a maximum of 15 Phalluses in a single transaction</p>
          </div>
          <div className="form">
            <form action="">
              <FormControl id="amount">
                <FormLabel>Amount</FormLabel>
                <Input ref={checkValidity} className="amount-input" type="number" min="1" max="15" maxLength ="3"/>
              </FormControl>
              
            </form>
          </div>
        </div>
        <div className="terms-container">
          <ButtonCustom className="mint-cnct-wallet">Mint</ButtonCustom>
          <p className="agreement">By minting a Phallus you agree to our <a href='#'>Terms of Service.</a></p>
        </div>
      </div>
    </Layout>)
}

export default Mint