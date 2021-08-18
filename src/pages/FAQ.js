import * as React from "react"
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './FAQ.scss'

const FAQ = () => {
  function AccordionItemCustom({ children, title }) {
    return (
      <AccordionItem
        border="none"
        bg="#555555"
        outline="none"
        mb={4}
      >
        <h2>
          <AccordionButton _focus={{
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
          }}>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p={0} m={0}>
          <Box padding="0 0 5px 0" m={0}>
            <Box padding="10px 10px" m={2} bg="#464646">
              {children}
            </Box>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    )
  }

  return (
    <Layout>
      <Seo title="FAQ" />
      <div className="gen-wrap">
        <h2 className="faq-h2">FAQ</h2>
        <Accordion className="accordion" allowMultiple allowToggle >
          <AccordionItemCustom title="WHO ARE YOU?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionItemCustom>
          <AccordionItemCustom title="WHAT IS FAPP?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionItemCustom>
          <AccordionItemCustom title="TELL ME MORE ABOUT YOUR NFT COLLECTION!">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionItemCustom>
          <AccordionItemCustom title="WHAT ERE YOU PLANNING TO DO?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionItemCustom>
          <AccordionItemCustom title="HOW CAN I GET A PHALLUS?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionItemCustom>
          <AccordionItemCustom title="WILL YOU MAKE MORE PHALLUSES?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionItemCustom>
          <AccordionItemCustom title="DO YOU HAVE YOUR OWN SMART CONTRACT?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionItemCustom>
          <AccordionItemCustom title="CAN I RESELL MY PHALLUS NFT?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionItemCustom>
        </Accordion>
      </div>
    </Layout>
  )
}

export default FAQ