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
      <ButtonCustom><Link className="link" to="/"><span>Gallery</span></Link></ButtonCustom>
      <ButtonCustom><Link className="link" to="/roadmap"><span>Roadmap</span></Link></ButtonCustom>
      <ButtonCustom><Link className="link" to="/FAQ"><span>FAQs</span></Link></ButtonCustom>
      <ButtonCustom className="red" ><Link className="link" to="/purchases"><span>Buy</span></Link></ButtonCustom>
      <ButtonCustom className="red" ><Link className="link" to="/landing"><img src={summerHolidays} alt="" /></Link></ButtonCustom>
    </nav>
  )
}


export default Navbar