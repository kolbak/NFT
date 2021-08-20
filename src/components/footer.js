import * as React from "react"
import { Box } from "@chakra-ui/react"
import logo from '../images/logo.svg'

import './footer.scss'

const Footer = () => (
  <footer id="contacts" className="footer"  >
    <div className="footer-inner-wrap">
      <div className="info footer-column">
        <Box
          className="logo"
          as="img"
          src={logo}
        >
        </Box>
        <hr />
        <span>SUBJECT OF COPYRIGHT © 2021</span>
      </div>
      <div className="contacts footer-column">
        <h3>CONTACTS</h3>
        <div className="icons">Иконки</div>
        <span className="mail">SUPPORT@DOMIN.COM</span>
      </div>
    </div>
  </footer>
)

export default Footer