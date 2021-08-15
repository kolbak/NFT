import * as React from "react"
import {
  Box,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './user_account.scss'

const UserAccount = () => {
  function ButtonCustomConnect({ children, className }) {
    return (
      <Box
        className={className}
        as="button"
      >
        {children}
      </Box>
    )
  }
  return (
    <Layout>
      <Seo title="Account" />
      <div className="gen-wrap">
        <h1>#FAPP</h1>
        <div className="bought">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <ButtonCustomConnect className="user-account cnct-wallet">
          Connect your wallet
        </ButtonCustomConnect>
      </div>
    </Layout>
  )
}
export default UserAccount