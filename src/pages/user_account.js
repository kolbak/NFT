import React, { useState } from "react"
import {
  Box, Tabs, TabList, TabPanels, Tab, TabPanel
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryGrid from "../components/gallery_grid"
import characterEx from "../images/character-ex.png"
import './user_account.scss'

const UserAccount = () => {
  // backend dummy data
  const [tokenAmount, setTokenAmount] = useState(0)
  const [connectedWallet, setConnectedWallet] = useState(false)
  //? data bought
  let arrData = [];
  for (let i = 0; i < 4; i++) {
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
            <button onClick={onConnect} className="user-account cnct-wallet">
              Connect your wallet
            </button>
          </>
        )}
      </div>
    </Layout>
  )
}
export default UserAccount