import React, { useState } from "react"
import {
  Box, Tabs, TabList, TabPanels, Tab, TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryGrid from "../components/gallery_grid"
import characterEx from "../images/character-ex.png"
import './user_account.scss'

const UserAccount = () => {
  const isBrowser = typeof window !== "undefined"

  const [width, setWidth] = useState(isBrowser && window.innerWidth)
  isBrowser && window.addEventListener("resize", resizeInGallery)
  function resizeInGallery() {
    setWidth(isBrowser && window.innerWidth)
  }
  // backend dummy data
  const [tokenAmount, setTokenAmount] = useState(2)
  const [connectedWallet, setConnectedWallet] = useState(false)
  //? data bought
  let arrData = [];
  for (let i = 0; i < 1; i++) {
    arrData.push({
      name: `Character ${i + 1}`,
      id: i + 1,
      src: characterEx,
      filters: {
        bday: new Intl.DateTimeFormat('en-US').format(new Date()),
      }
    })
  }
  const [data, setData] = useState(arrData);

  function onConnect() {
    setConnectedWallet(true);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Seo title="Account" />
      <div className="gen-wrap user-acc">
        <h1>The #FAPP Community</h1>
        <h2>An exclusive member-only area where you can buy #FAPP merch and view your NFTs</h2>
        {connectedWallet === true ? (
          <>
            {tokenAmount !== 0 ? (
              <>
                <Tabs className="tab-container">
                  <TabList className="buttons-container">
                    <Tab _selected={{ color: "white", boxShadow: "0px 0px 0px 2px #ed55b3" }} className="phalluses-button">Your Phalluses</Tab>
                    <Tab _selected={{ color: "white", boxShadow: "0px 0px 0px 2px #34bdbd" }} className="merch-store-button">FAPP Merch Store</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <div className="bought">
                        <GalleryGrid data={data} />
                      </div>
                    </TabPanel>
                    <TabPanel className="market-container">
                      <p>FAPP Merch store will be available ASAP.<br />
                        We are working on this project!<br />
                        Join our discord server or check our twitter for updates!</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </>
            ) : (
              <>
                <p className="zero-token-msg">No #FAPP Phalluses are found in this wallet 🙁<br />
                  You need at least one Phallus to view this page!</p>
              </>
            )}
          </>
        ) : (
          <>
            <button onClick={onOpen} className="user-account cnct-wallet">
              Connect your wallet
            </button>
            <Modal isCentered isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent style={{ display: 'flex', fontFamily: '"Amatic SC", cursive', color: 'white', backgroundColor: 'rgba(19, 24, 38, 1)' }}>
                <ModalHeader>#FAPP page is unavailable<ModalCloseButton style={{ transform: 'scale(.5)', opacity: '.7', display: 'inline-block', position: 'initial', float: 'right' }} /></ModalHeader>
                <ModalBody>
                  <p>This page will be available after the first minted #FAPP NFT.</p>
                  <p>Join our <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://discord.gg/zFjWr4wUwH"><span>Discord</span></a> server and <a style={{ color: 'rgb(59, 130, 246)' }} className="link-discord" href="https://twitter.com/FAP_Planet"><span>Twitter</span></a> to get the latest news!</p>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )}
      </div>
    </Layout>
  )
}
export default UserAccount