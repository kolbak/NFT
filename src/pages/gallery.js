import React, { useState, useEffect } from "react"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryGrid from "../components/gallery_grid"

import './gallery.scss'

import anakin from '../images/anakin.jpg'
import wizard from '../images/wizard.jpg'

const Gallery = () => {
  //? dummy data
  let arrData = [];
  for (let i = 0; i < 6; i++) {
    arrData.push({
      name: 'Character №' + i,
      id: `${i}-${Math.floor(Math.random())}_${Math.floor(Math.random())}`,
      src: [anakin, wizard][Math.floor(Math.random() * 2)],
    })
  }
  const [data, setData] = useState(arrData);

  //? аккордион
  const accordionItemStyle = {
    border: 'none',
    outline: 'none',
    bg: '#555555',
    mb: 2,

    borderRadius: `${25}px`,
  }
  const accordionButtonStyle = {
    p: "5px",
  }
  const accordionButtonStyle_focus = {
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
  }

  //? кнопка ShowMore
  function ButtonCustomShowMore({ children, className }) {
    return <Box
      className={className}
      as="button"
      border="none"
      color="#0a0e16"
      bgColor="#9f9f9f"
    >
      {children}
    </Box>
  }

  return (
    <Layout>
      <Seo title="Gallery" />
      <div className="gen-wrap">
        <h2 className="breadcrumb">
          <Breadcrumb separator={<ChevronRightIcon color="green.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/gallery">Gallery</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </h2>
        <div className="gallery-content">
          <div className="filters-wrap">
            <h2 className="filterH2">FILTER</h2>
            <div className="filters">
              <Accordion allowMultiple allowToggle>
                <AccordionItem className="filter-container" className="filter-container"
                  border={accordionItemStyle.border}
                  bg={accordionItemStyle.bg}
                  outline={accordionItemStyle.outline}
                  mb={accordionItemStyle.mb}
                  borderRadius={accordionItemStyle.borderRadius}
                >
                  <h2>
                    <AccordionButton
                      paddingY={accordionButtonStyle.p} _focus={accordionButtonStyle_focus}>
                      <Box flex="1" textAlign="left">
                        <span className="__filter-title">BACKGROUND COLOR</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="filters-list" pb={4}>
                    <CheckboxGroup defaultValue="2">
                      <Stack className="filter-buttons-container" spacing={1} marginLeft={5} direction="column">
                        <Checkbox colorScheme="green" value="1">
                          Filter #1
                        </Checkbox>
                        <Checkbox colorScheme="green" value="2">
                          Filter #2
                        </Checkbox>
                        <Checkbox colorScheme="green" value="3">
                          Filter #3
                        </Checkbox>
                        <Checkbox colorScheme="green" value="4">
                          Filter #4
                        </Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="filter-container"
                  border={accordionItemStyle.border}
                  bg={accordionItemStyle.bg}
                  outline={accordionItemStyle.outline}
                  mb={accordionItemStyle.mb}
                  borderRadius={accordionItemStyle.borderRadius}>
                  <h2>
                    <AccordionButton
                      paddingY={accordionButtonStyle.p} _focus={accordionButtonStyle_focus}>
                      <Box flex="1" textAlign="left">
                        <span className="__filter-title">SKIN COLOR</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="filters-list" pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="filter-container"
                  border={accordionItemStyle.border}
                  bg={accordionItemStyle.bg}
                  outline={accordionItemStyle.outline}
                  mb={accordionItemStyle.mb}
                  borderRadius={accordionItemStyle.borderRadius}>
                  <h2>
                    <AccordionButton
                      paddingY={accordionButtonStyle.p} _focus={accordionButtonStyle_focus}>
                      <Box flex="1" textAlign="left">
                        <span className="__filter-title">SKIN TYPE</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="filters-list" pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="filter-container"
                  border={accordionItemStyle.border}
                  bg={accordionItemStyle.bg}
                  outline={accordionItemStyle.outline}
                  mb={accordionItemStyle.mb}
                  borderRadius={accordionItemStyle.borderRadius}>
                  <h2>
                    <AccordionButton
                      paddingY={accordionButtonStyle.p} _focus={accordionButtonStyle_focus}>
                      <Box flex="1" textAlign="left">
                        <span className="__filter-title">HEAD</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="filters-list" pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="filter-container"
                  border={accordionItemStyle.border}
                  bg={accordionItemStyle.bg}
                  outline={accordionItemStyle.outline}
                  mb={accordionItemStyle.mb}
                  borderRadius={accordionItemStyle.borderRadius}>
                  <h2>
                    <AccordionButton
                      paddingY={accordionButtonStyle.p} _focus={accordionButtonStyle_focus}>
                      <Box flex="1" textAlign="left">
                        <span className="__filter-title">EYES</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="filters-list" pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="filter-container"
                  border={accordionItemStyle.border}
                  bg={accordionItemStyle.bg}
                  outline={accordionItemStyle.outline}
                  mb={accordionItemStyle.mb}
                  borderRadius={accordionItemStyle.borderRadius}>
                  <h2>
                    <AccordionButton
                      paddingY={accordionButtonStyle.p} _focus={accordionButtonStyle_focus}>
                      <Box flex="1" textAlign="left">
                        <span className="__filter-title">MOUTH</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="filters-list" pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="filter-container"
                  border={accordionItemStyle.border}
                  bg={accordionItemStyle.bg}
                  outline={accordionItemStyle.outline}
                  mb={accordionItemStyle.mb}
                  borderRadius={accordionItemStyle.borderRadius}>
                  <h2>
                    <AccordionButton
                      paddingY={accordionButtonStyle.p} _focus={accordionButtonStyle_focus}>
                      <Box flex="1" textAlign="left">
                        <span className="__filter-title">EYEWEAR</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="filters-list" pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="filter-container"
                  border={accordionItemStyle.border}
                  bg={accordionItemStyle.bg}
                  outline={accordionItemStyle.outline}
                  mb={accordionItemStyle.mb}
                  borderRadius={accordionItemStyle.borderRadius}>
                  <h2>
                    <AccordionButton
                      paddingY={accordionButtonStyle.p} _focus={accordionButtonStyle_focus}>
                      <Box flex="1" textAlign="left">
                        <span className="__filter-title">NECKLACE</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="filters-list" pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="filter-container"
                  border={accordionItemStyle.border}
                  bg={accordionItemStyle.bg}
                  outline={accordionItemStyle.outline}
                  mb={accordionItemStyle.mb}
                  borderRadius={accordionItemStyle.borderRadius}>
                  <h2>
                    <AccordionButton
                      paddingY={accordionButtonStyle.p} _focus={accordionButtonStyle_focus}>
                      <Box flex="1" textAlign="left">
                        <span className="__filter-title">BACK ITEM</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="filters-list" pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="grid">
            <GalleryGrid data={data} />
            {/* {grid} */}
            <ButtonCustomShowMore className="btn-showmore">SHOW MORE</ButtonCustomShowMore>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery