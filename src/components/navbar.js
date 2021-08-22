import * as React from "react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"

import './navbar.scss'

import logo from '../images/logo.svg'
import summerHolidays from '../images/summer-holidays.svg'

const Navbar = () => {
  const isBrowser = typeof window !== "undefined"

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

  function scroll(e) {
    if (isBrowser) {
      let str = e.target.getAttribute('href');
      let param = '?id=';
      let indexID = str.indexOf(param);
      let id = str.slice(indexID + param.length)

      if (window.location.pathname === "/") {
        e.preventDefault();
        let shift = document.getElementById(id).getBoundingClientRect().y;

        window.scrollTo({
          top: shift - 50,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <nav className="navbar-wrap">
      <Link className="logo" to="/">
        <img className="navbar-logo" src={logo} />
      </Link>
      <div className="navbar-btns">
        <ButtonCustom><Link onClick={scroll} to="/?id=content-block-storyline"><span>Storyline</span></Link></ButtonCustom>
        <ButtonCustom><Link onClick={scroll} to="/?id=content-block-nft"><span>NFT</span></Link></ButtonCustom>
        <ButtonCustom><Link to="/gallery"><span>Gallery</span></Link></ButtonCustom>
        <ButtonCustom><Link onClick={scroll} to="/?id=content-block-roadmap"><span>Roadmap</span></Link></ButtonCustom>
        <ButtonCustom><Link to="/FAQ"><span>FAQs</span></Link></ButtonCustom>
        <ButtonCustom><Link onClick={scroll} to="/?id=contacts"><span>Contacts</span></Link></ButtonCustom>
        <ButtonCustom className="withBg"><Link to="/mint"><span>Mint</span></Link></ButtonCustom>
        <ButtonCustom className="withBg user"><Link to="/user_account"><img src={summerHolidays} alt="summer holidays" /></Link></ButtonCustom>
      </div>
    </nav>
  )
}


export default Navbar