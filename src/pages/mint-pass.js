import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

import presale from "../images/presale.jpg"

import './mint-pass.scss'


const MintPass = () => {
  const isBrowser = typeof window !== "undefined"
  
  let [screenWidth, setScreenWidth] = useState(isBrowser && window.innerWidth);
  isBrowser && window.addEventListener("resize", resizeInMintPass);
  function resizeInMintPass() {
    setScreenWidth(isBrowser && window.innerWidth);
  }
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (isBrowser) {
    window.onOpenModalMint = onOpen;
  }
  
  const [value, setValue] = useState(0); // integer state
  function useForceUpdate(){
    return () => setValue(value => value + 1); // update the state to force render
  }

  return (
    <Layout>
      <Seo title="Mint-pass" isMintPassPage={true} />
      <div className="gen-wrap presale-wrap">
        <h1>#FAPP MINT-PASS</h1>
        <div className="content">
          {screenWidth > 1300 &&
            <>
              <div className="text">
                <p>#FAPP Comic Book | FAPP-CB is a collection of 500 tradable mint-pass NFT comic books.</p>
                <p>FAPP-CB gives you pre-sale access that lets you get access to exclusive raffles, buy up to 7 #FAPP loot-boxes before the public sale and avoid GAS war (very expensive ETH GAS fees).</p>
                <div className="btns">
                  {isBrowser && !window._isConnect &&
                    <button onClick={() => {
                      window.__connect && window.__connect();
                      useForceUpdate();
                    }} className="cnct-wallet">Connect your wallet</button>
                  }
                  {isBrowser && window._isConnect &&
                    <button onClick={() => {
                      window.__mint && window.__mint();
                      useForceUpdate();
                    }} className="mint">Mint 0.06 ETH</button>
                  }
                </div>
                <p className="agreement">By minting a FAPP-CB you agree to our <Link to="/terms">Terms of Service.</Link></p>
              </div>
              <img src={presale} alt="presale image" />

              <Modal isCentered
                isOpen={isOpen}
                onClose={onClose}>
                <ModalOverlay />
                <ModalContent style={{ display: 'flex', fontFamily: '"Amatic SC", cursive', color: 'white', backgroundColor: 'rgba(19, 24, 38, 1)' }}>
                  <ModalHeader><ModalCloseButton style={{ transform: 'scale(.5)', opacity: '.7', display: 'inline-block', position: 'initial', float: 'right' }} /></ModalHeader>

                  <ModalBody>
                    <p style={{ textAlign: 'center', margin: '10px 50px 50px 50px' }}>Something went wrong. Contact support</p>
                    {/* <p>Join our <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://discord.gg/zFjWr4wUwH"><span>Discord</span></a> server and <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://twitter.com/FAP_Planet"><span>Twitter</span></a> to get the latest news!</p> */}
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          }
          {screenWidth <= 1300 &&
            <>
              <p>#FAPP Comic Book | FAPP-CB is a collection of 500 tradable mint-pass NFT comic books.</p>
              <p>FAPP-CB gives you pre-sale access that lets you get access to exclusive raffles, buy up to 7 #FAPP loot-boxes before the public sale and avoid GAS war (very expensive ETH GAS fees).</p>
              <img src={presale} alt="presale image" />
              {isBrowser && !window._isConnect &&
                <button onClick={() => {
                  window.__connect && window.__connect();
                  useForceUpdate();
                }} className="cnct-wallet">Connect your wallet</button>
              }
              {isBrowser && window._isConnect &&
                <button onClick={() => {
                  window.__mint && window.__mint();
                  useForceUpdate();
                }} className="mint">Mint 0.06 ETH</button>
              }
              <p className="agreement">By minting a FAPP-CB you agree to our <Link to="/terms">Terms of Service.</Link></p>

              <Modal isCentered isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent style={{ display: 'flex', fontFamily: '"Amatic SC", cursive', color: 'white', backgroundColor: 'rgba(19, 24, 38, 1)' }}>
                  <ModalHeader><ModalCloseButton style={{ transform: 'scale(.5)', opacity: '.7', display: 'inline-block', position: 'initial', float: 'right' }} /></ModalHeader>

                  <ModalBody>
                    <p style={{ textAlign: 'center', margin: '10px 50px 50px 50px' }}>Something went wrong. Contact support</p>
                    {/* <p>Join our <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://discord.gg/zFjWr4wUwH"><span>Discord</span></a> server and <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://twitter.com/FAP_Planet"><span>Twitter</span></a> to get the latest news!</p> */}
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          }

        </div>
      </div>
      {/* <script charset="utf-8"
        src="https://cdn.ethers.io/lib/ethers-5.1.umd.min.js"
        type="text/javascript">
      </script> */}
      {/* <script src='../scripts/web3_script.js' type='text/javascript'></script> */}
    </Layout>)
}

export default MintPass