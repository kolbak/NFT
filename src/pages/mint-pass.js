import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { connectToContract, mint } from "../etc/contract.js"
import MintPassTimer from "../components/mint_pass_timer"
import DotLoader from "../components/loader"
import { List, ListItem, UnorderedList } from "@chakra-ui/react"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"

import "./mint-pass.scss"
import presale from "../images/presale.jpg"

const MintPass = () => {
  const isBrowser = typeof window !== "undefined"

  let [screenWidth, setScreenWidth] = useState(9999999)
  isBrowser && window.addEventListener("resize", resizeInMintPass)
  function resizeInMintPass() {
    setScreenWidth(isBrowser && window.innerWidth)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  if (isBrowser) {
    window.onOpenModalMint = onOpen
  }

  const [alreadyMinded, setAlreadyMinded] = useState(false) // useState(false) когда задеплоим маиннет контракт
  useEffect(() => {
    ;(async function getTotalSupply() {
      const res = await fetch(
        "https://familyphallusplanet.com/api/total-supply",
        {
          method: "GET",
        }
      )
      setAlreadyMinded(await res.json())
    })()
  }, [])

  return (
    <Layout>
      <Seo title="Mint-pass" isMintPassPage={true} />
      <div className="gen-wrap presale-wrap">
        <h1>#FAPP MINT-PASS</h1>
        <div className="content">
          {screenWidth > 1500 ? (
            <>
              <div className="text">
                {/* <MintPassTimer windowWidth={isBrowser && window.innerWidth} /> */}
                <p className="mint-message">
                  MINT-PASS SALE ENDS ON NOVEMBER 30th
                </p>
                <p className="alreadyMinted">
                  AVAILABLE:
                  {alreadyMinded ? (
                    <span style={{ marginLeft: "15px" }}>
                      {alreadyMinded}/200
                    </span>
                  ) : (
                    <DotLoader active scale="0.3" />
                  )}
                </p>
                {/* <p className="attentionMsg">
                  Yesterday we sold 92 mint-passes in 15 minutes!
                </p> */}
                <p></p> {/*DON'T DELETE THIS !!!!!!*/}
                <div className="benefits">
                  <p>MINT-PASS BENEFITS:</p>
                  <UnorderedList>
                    <ListItem>One free Phallus NFT</ListItem>
                    <ListItem>
                      Chance to win $2000 and 1/5 ultra-rare Phalluses
                    </ListItem>
                    <ListItem>25% discount for the main drop</ListItem>
                    <ListItem>An exclusive comic-book and more</ListItem>
                    <ListItem>Early-access</ListItem>
                  </UnorderedList>
                </div>
                <div className="info">
                  <p>
                    Read more about&nbsp;
                    <a href="https://medium.com/@FamilyPhallusPlanet/fapp-nft-mint-pass-is-something-you-should-not-miss-sale-ends-november-30-9e0c9a96e209">
                      FAPP-CB
                    </a>
                  </p>
                  <p>
                    Stay tuned for FAPP in our&nbsp;
                    <a href="https://discord.gg/zFjWr4wUwH">Discord</a>
                  </p>
                </div>
                <div className="btns">
                  <button
                    onClick={() => {
                      connectToContract(window.ethereum)
                    }}
                    className="cnct-wallet"
                  >
                    Connect your wallet
                  </button>
                  <button
                    onClick={() => {
                      mint()
                    }}
                    className="mint"
                  >
                    Mint 0.06 ETH
                  </button>
                </div>
                <p className="agreement">
                  By minting a FAPP-CB you agree to our{" "}
                  <Link to="/terms">Terms of Service.</Link>
                </p>
              </div>

              <img src={presale} alt="presale image" />

              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  style={{
                    display: "flex",
                    fontFamily: '"Amatic SC", cursive',
                    color: "white",
                    backgroundColor: "rgba(19, 24, 38, 1)",
                  }}
                >
                  <ModalHeader>
                    <ModalCloseButton
                      style={{
                        transform: "scale(.5)",
                        opacity: ".7",
                        display: "inline-block",
                        position: "initial",
                        float: "right",
                      }}
                    />
                  </ModalHeader>

                  <ModalBody>
                    <p
                      style={{
                        textAlign: "center",
                        margin: "10px 50px 50px 50px",
                      }}
                    >
                      Something went wrong. Contact support
                    </p>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          ) : (
            <>
              {/* <MintPassTimer windowWidth={isBrowser && window.innerWidth} /> */}
              <p className="mint-message">
                MINT-PASS SALE ENDS ON NOVEMBER 30th
              </p>
              <p className="alreadyMinted">
                AVAILABLE:
                {alreadyMinded ? (
                  <span style={{ marginLeft: "15px" }}>
                    {alreadyMinded}/200
                  </span>
                ) : (
                  <DotLoader active scale="0.3" />
                )}
              </p>
              {/* <p className="attentionMsg">
                Yesterday we sold 92 mint-passes in 15 minutes!
              </p> */}
              <p></p> {/*DON'T DELETE THIS !!!!!!*/}
              <div className="benefits">
                <p>MINT-PASS BENEFITS:</p>
                <UnorderedList>
                  <ListItem>One free Phallus NFT</ListItem>
                  <ListItem>
                    Chance to win $2000 and 1/5 ultra-rare Phalluses
                  </ListItem>
                  <ListItem>25% discount for the main drop</ListItem>
                  <ListItem>An exclusive comic-book and more</ListItem>
                  <ListItem>Early-access</ListItem>
                </UnorderedList>
              </div>
              <div className="info">
                <p>
                  Read more about&nbsp;
                  <a href="https://medium.com/@FamilyPhallusPlanet/fapp-nft-mint-pass-is-something-you-should-not-miss-sale-ends-november-30-9e0c9a96e209">
                    FAPP-CB
                  </a>
                </p>
                <p>
                  Stay tuned for FAPP in our&nbsp;
                  <a href="https://discord.gg/zFjWr4wUwH">Discord</a>
                </p>
              </div>
              <img src={presale} alt="presale image" />
              <button
                onClick={() => {
                  connectToContract(window.ethereum)
                }}
                className="cnct-wallet"
              >
                Connect your wallet
              </button>
              <button
                onClick={() => {
                  mint()
                }}
                className="mint"
              >
                Mint 0.06 ETH
              </button>
              <p className="agreement">
                By minting a FAPP-CB you agree to our{" "}
                <Link to="/terms">Terms of Service.</Link>
              </p>
              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  style={{
                    display: "flex",
                    fontFamily: '"Amatic SC", cursive',
                    color: "white",
                    backgroundColor: "rgba(19, 24, 38, 1)",
                  }}
                >
                  <ModalHeader>
                    <ModalCloseButton
                      style={{
                        transform: "scale(.5)",
                        opacity: ".7",
                        display: "inline-block",
                        position: "initial",
                        float: "right",
                      }}
                    />
                  </ModalHeader>

                  <ModalBody>
                    <p
                      style={{
                        textAlign: "center",
                        margin: "10px 50px 50px 50px",
                      }}
                    >
                      Something went wrong. Contact support
                    </p>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default MintPass
