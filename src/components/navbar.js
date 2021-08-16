import * as React from "react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"

import './navbar.scss'

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

  function ButtonLogo({ children, className }) {
    return <Box
      className={className}
      as="button"
      border="2px solid whitesmoke"
      color="whitesmoke"
      bgColor="#292929"
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

        let shift = document.getElementById(id).getBoundingClientRect().top;

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
        <ButtonLogo>
          <span>LOGO</span>
        </ButtonLogo>
      </Link>
      <div className="navbar-btns">
        <ButtonCustom><Link onClick={scroll} to="/?id=content-block-storyline">Storyline</Link></ButtonCustom>
        <ButtonCustom><Link onClick={scroll} to="/?id=content-block-nft">NFT</Link></ButtonCustom>
        <ButtonCustom><Link to="/gallery">Gallery</Link></ButtonCustom>
        <ButtonCustom><Link to="/?id=content-block-roadmap">Roadmap</Link></ButtonCustom>
        <ButtonCustom><Link to="/FAQ">FAQs</Link></ButtonCustom>
        <ButtonCustom><Link to="/?id=contacts">Contacts</Link></ButtonCustom>
        <ButtonCustom className="withBg"><Link to="/mint">Mint</Link></ButtonCustom>
        <ButtonCustom className="withBg"><Link to="/user_account"><img src={summerHolidays} alt="summer holidays" /></Link></ButtonCustom>
      </div>
    </nav>
  )
}


export default Navbar