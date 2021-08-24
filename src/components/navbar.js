import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

import './navbar.scss'

import logo from '../images/logo.svg'
import summerHolidays from '../images/summer-holidays.svg'

const Navbar = () => {
  const isBrowser = typeof window !== "undefined"

  let [screenWidth, setScreenWidth] = useState(window.screen.width);
  if (isBrowser) {
    window.addEventListener('resize', () => {
      setScreenWidth(window.screen.width)
    })
  }

  function ButtonCustom({ children, className }) {
    return <Box
      className={className}
      // as="button"
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
      {screenWidth > 1140 &&
        <>
          <div className="navbar-btns">
            <ButtonCustom><Link onClick={scroll} to="/?id=content-block-storyline">Storyline</Link></ButtonCustom>
            <ButtonCustom><Link onClick={scroll} to="/?id=content-block-nft">NFT</Link></ButtonCustom>
            <ButtonCustom><Link to="/gallery">Gallery</Link></ButtonCustom>
            <ButtonCustom><Link onClick={scroll} to="/?id=content-block-roadmap">Roadmap</Link></ButtonCustom>
            <ButtonCustom><Link to="/FAQ">FAQs</Link></ButtonCustom>
            <ButtonCustom><Link onClick={scroll} to="/?id=contacts">Contacts</Link></ButtonCustom>
            <ButtonCustom className="withBg"><Link to="/mint">Mint</Link></ButtonCustom>
            <ButtonCustom className="withBg user"><Link to="/user_account"><img src={summerHolidays} alt="summer holidays" /></Link></ButtonCustom>
          </div>
        </>
      }
      {screenWidth <= 1140 &&
        <>
          <Menu>
            <MenuButton className="menu" as={Button}
              bg="rgb(0, 196, 196)"
              _focus={{ bg: "rgb(0, 196, 196)", }}
              _active={{ bg: "rgb(0, 196, 196)", }}
              _hover={{ bg: "rgb(0, 196, 196)", }}
            ><HamburgerIcon /></MenuButton>
            <MenuList className="menu-list">
              <MenuItem className="menu-item">
                <ButtonCustom><Link onClick={scroll} to="/?id=content-block-storyline">Storyline</Link></ButtonCustom>
              </MenuItem>
              <MenuItem className="menu-item">
                <ButtonCustom><Link onClick={scroll} to="/?id=content-block-nft">NFT</Link></ButtonCustom>
              </MenuItem>
              <MenuItem className="menu-item">
                <ButtonCustom><Link to="/gallery">Gallery</Link></ButtonCustom>
              </MenuItem>
              <MenuItem className="menu-item">
                <ButtonCustom><Link onClick={scroll} to="/?id=content-block-roadmap">Roadmap</Link></ButtonCustom>
              </MenuItem>
              <MenuItem className="menu-item">
                <ButtonCustom><Link to="/FAQ">FAQs</Link></ButtonCustom>
              </MenuItem>
              <MenuItem className="menu-item">
                <ButtonCustom><Link onClick={scroll} to="/?id=contacts">Contacts</Link></ButtonCustom>
              </MenuItem>
              <MenuItem className="menu-item">
                <ButtonCustom className="withBg"><Link to="/mint">Mint</Link></ButtonCustom>
              </MenuItem>
              <MenuItem className="menu-item">
                <ButtonCustom className="withBg user"><Link to="/user_account"><img src={summerHolidays} alt="summer holidays" /></Link></ButtonCustom>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      }
    </nav>
  )
}


export default Navbar