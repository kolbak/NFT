import * as React from "react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"

import './navbar.scss'

import summerHolidays from '../images/summer-holidays.svg'

const Navbar = () => {
  function ButtonCustom({ children, className }) {
    return <Box
      className={className}
      as="button"
      border="1px"
      px="8px"
      border="none"
      color="whitesmoke"
      bgColor="transparent"
    >
      {children}
    </Box>
  }

  return (
    <nav className="navbar-wrap">
      <ButtonCustom><Link to="/"><span>Storyline</span></Link></ButtonCustom>
      <ButtonCustom><Link to="/"><span>NFT</span></Link></ButtonCustom>
      <ButtonCustom><Link to="/"><span>Gallery</span></Link></ButtonCustom>
      <ButtonCustom><Link to="/roadmap"><span>Roadmap</span></Link></ButtonCustom>
      <ButtonCustom><Link to="/FAQ"><span>FAQs</span></Link></ButtonCustom>
      <ButtonCustom><Link to="#about"><span>Contacts</span></Link></ButtonCustom>
      <ButtonCustom className="withBg"><Link to="/purchases"><span>Mint</span></Link></ButtonCustom>
      <ButtonCustom className="withBg"><Link to="/user_account"><img src={summerHolidays} alt="summer holidays" /></Link></ButtonCustom>
    </nav>
  )
}


export default Navbar