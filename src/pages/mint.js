import * as React from "react"
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
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
  return (
    <Layout>
      <Seo title="Mint" />
      <div className="gen-wrap">
        <h1>Заголовок</h1>
        <h2>Подзаголовок</h2>
        <ol>
          <li className="connect">
            <h2>Connect</h2>
            <div className="wrap">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe magnam totam eius ipsam, fuga sed consequuntur quis, ea facere, eum temporibus exercitationem blanditiis velit. Ea placeat delectus asperiores dolores.</p>
              <ButtonCustom className="mint-cnct-wallet">Connect your wallet</ButtonCustom>
            </div>
          </li>
          <br />
          <li className="mint">
            <h2>Mint</h2>
            <div className="wrap">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe magnam totam eius ipsam, fuga sed consequuntur quis, ea facere, eum temporibus exercitationem blanditiis velit. Ea placeat delectus asperiores dolores.</p>
              <div className="form">
                <form action="">
                  <FormControl id="amount">
                    <FormLabel>Amount</FormLabel>
                    <Input type="number" />
                  </FormControl>
                  <ButtonCustom className="mint-cnct-wallet">Mint</ButtonCustom>
                </form>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </Layout>)
}

export default Mint