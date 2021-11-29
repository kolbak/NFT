import React, { useState, useRef } from "react"
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryGrid from "../components/gallery_grid"
import characterEx from "../images/character-ex.png"
import "./user_account.scss"

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

  function onConnect() {
    setConnectedWallet(true)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  const refInput = useRef(null)
  const [data, setData] = useState(null)
  function request(e) {
    console.group()

    fetch(
      `https://www.nft-cockiz.com/api/tokens/wallet=${refInput.current.value}`,
      {
        method: "GET",
      }
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log("res :>> ", res)
        setData(res)
      })
      .catch(_err => {
        console.log("ERORR in request > ", _err)
      })

    console.groupEnd()
  }

  return (
    <Layout>
      <Seo />
      <div className="gen-wrap user-acc">
        <h1>The #FAPP Community</h1>
        <h2>
          An exclusive member-only area where you can buy #FAPP merch and view
          your NFTs
        </h2>
        <form>
          <FormControl>
            <Input ref={refInput} placeholder="Your wallet here" />
          </FormControl>
          {connectedWallet === true ? (
            <>
              {tokenAmount !== 0 ? (
                <>
                  <Tabs className="tab-container">
                    <TabList className="buttons-container">
                      <Tab
                        _selected={{
                          color: "white",
                          boxShadow: "0px 0px 0px 2px #ed55b3",
                        }}
                        className="phalluses-button"
                      >
                        Your Phalluses
                      </Tab>
                      <Tab
                        _selected={{
                          color: "white",
                          boxShadow: "0px 0px 0px 2px #34bdbd",
                        }}
                        className="merch-store-button"
                      >
                        FAPP Merch Store
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <div className="bought">
                          <GalleryGrid data={data} />
                        </div>
                      </TabPanel>
                      <TabPanel className="market-container">
                        <p>
                          FAPP Merch store will be available ASAP.
                          <br />
                          We are working on this project!
                          <br />
                          Join our discord server or check our twitter for
                          updates!
                        </p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </>
              ) : (
                <>
                  <p className="zero-token-msg">
                    No #FAPP Phalluses are found in this wallet 🙁
                    <br />
                    You need at least one Phallus to view this page!
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <button
                onClick={e => {
                  e.preventDefault()
                  request(e)
                }}
                className="user-account cnct-wallet"
              >
                Connect your wallet
              </button>

              {data && (
                <div className="grid-wrap">
                  <div className="grid">
                    <GalleryGrid data={data} />
                  </div>
                </div>
              )}
            </>
          )}
        </form>
      </div>
    </Layout>
  )
}
export default UserAccount
