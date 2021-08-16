import * as React from "react"
import { Box } from "@chakra-ui/react"

import './footer.scss'

const Footer = () => (
  <footer id="contacts" className="footer"  >
    <div className="footer-inner-wrap">
      <div className="info">
        <Box
          className="logo"
          as="button"
          border="3px solid whitesmoke"
          color="whitesmoke"
          bgColor="#292929"
        >
          <span>LOGO</span>
        </Box>
        <hr />
        <span>SUBJECT OF COPYRIGHT © 2021</span>
      </div>
      <div className="contacts">
        <h3>CONTACTS</h3>
        <div className="icons">Иконки</div>
        <span className="mail">SUPPORT@DOMIN.COM</span>
      </div>
    </div>
  </footer>
)

export default Footer