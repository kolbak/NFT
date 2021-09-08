import React, { useState } from "react"
import {
  Box,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryGrid from "../components/gallery_grid"
import characterEx from "../images/character-ex.png"
import './user_account.scss'

const UserAccount = () => {
  //? data bought
  let arrData = [];
  for (let i = 0; i < 3; i++) {
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
    alert('Hello');
  }
  
  return (
    <Layout>
      <Seo title="Account" />
      <div className="gen-wrap user-acc">
        <h1>#FAPP</h1>
        <button onClick={onConnect} className="user-account cnct-wallet">
          Connect your wallet
        </button>
        <div className="bought">
          <GalleryGrid data={data} />
        </div>
      </div>
    </Layout>
  )
}
export default UserAccount