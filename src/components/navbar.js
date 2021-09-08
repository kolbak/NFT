import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import {
  Box,
  Button,
} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

import './navbar.scss'

import logo from '../images/logo.svg'

const Navbar = () => {
  const isBrowser = typeof window !== "undefined"

  let [screenWidth, setScreenWidth] = useState(isBrowser && window.innerWidth);
  isBrowser && window.addEventListener("resize", resizeInNavbar);
  function resizeInNavbar() {
    setScreenWidth(isBrowser && window.innerWidth);
  }

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

  // const { isOpen, onToggle } = useDisclosure();
  const menuList = useRef(null);
  function onToggle() {
    menuList.current.classList.contains('expanded') ?
      menuList.current.classList.remove('expanded') :
      menuList.current.classList.add('expanded')
  }

  return (
    <nav className="navbar-wrap">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbar-btns">
        {screenWidth > 1200 &&
          <>
            <ButtonCustom><Link onClick={scroll} to="/?id=content-block-storyline">Storyline</Link></ButtonCustom>
            <ButtonCustom><Link onClick={scroll} to="/?id=content-block-nft">NFT</Link></ButtonCustom>
            <ButtonCustom><Link to="/gallery">Gallery</Link></ButtonCustom>
            <ButtonCustom><Link onClick={scroll} to="/?id=content-block-roadmap">Roadmap</Link></ButtonCustom>
            <ButtonCustom><Link onClick={scroll} to="/?id=content-block-faq">FAQs</Link></ButtonCustom>
            <ButtonCustom><Link onClick={scroll} to="/?id=contacts">Contacts</Link></ButtonCustom>
            <ButtonCustom className="withBg"><Link to="/mint">Mint</Link></ButtonCustom>
            <ButtonCustom className="withBg"><Link to="/user_account">#FAPP</Link></ButtonCustom>
          </>
        }
        {screenWidth <= 1200 &&
          <div className="menu-wrap">
            <Button className="menu-btn" onClick={onToggle}
              bg="transparent"
              _focus={{ bg: "transparent", }}
              _active={{ bg: "transparent", }}
              _hover={{ bg: "transparent", }}
            ><HamburgerIcon color="white" /></Button>
            <Box ref={menuList} className="menu-list">
              <ButtonCustom><Link onClick={scroll} to="/?id=content-block-storyline">Storyline</Link></ButtonCustom>
              <ButtonCustom><Link onClick={scroll} to="/?id=content-block-nft">NFT</Link></ButtonCustom>
              <ButtonCustom><Link to="/gallery">Gallery</Link></ButtonCustom>
              <ButtonCustom><Link onClick={scroll} to="/?id=content-block-roadmap">Roadmap</Link></ButtonCustom>
              <ButtonCustom><Link onClick={scroll} to="/?id=content-block-faq">FAQs</Link></ButtonCustom>
              <ButtonCustom><Link onClick={scroll} to="/?id=contacts">Contacts</Link></ButtonCustom>
              <ButtonCustom><Link to="/mint">Mint</Link></ButtonCustom>
              <ButtonCustom><Link to="/user_account">#FAPP</Link></ButtonCustom>
            </Box>
          </div>
        }
      </div>
    </nav>
  )
}


export default Navbar