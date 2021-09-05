import React, { useState, useEffect } from "react"
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  CheckboxGroup,
  Stack,
  Icon
} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryGrid from "../components/gallery_grid"
import characterEx from "../images/character-ex.png"
import './gallery.scss'

const Gallery = () => {
  const [width, setWidth] = useState();
  //? dummy data
  let arrData = [];
  for (let i = 0; i < 6; i++) {
    arrData.push({
      name: `Character ${i + 1}`,
      id: i + 1,
      src: characterEx,
      filters: { 
        bday: new Intl.DateTimeFormat('en-US').format(new Date()),
      }
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
  useEffect(() => {
    window.addEventListener('resize', _ => setWidth(window.screen.width));
    setWidth(window.screen.width);
  }, [])

  function toggle() {
    let filtersList = document.querySelector('.filters-wrap');
    filtersList.classList.toggle('opened');
  }
  return (
    <Layout>
      <Seo title="Gallery" />
      <div className="gen-wrap gallery-wrap">
        {width > 850 ? <>
          <h2 className="filterH2">GALLERY</h2>
        </> : <>
          <button className="toggle-button" onClick={toggle}><h2 className="filterH2">GALLERY<Icon as={ChevronDownIcon}></Icon></h2></button>
        </>}
        <div className="gallery-content">
          <div className="filters-wrap">
            <div className="filters">
              <form>
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
                        <Stack spacing={1} marginLeft={5} direction="column">
                            <Checkbox value="1">blue</Checkbox>
                            <Checkbox value="2">green</Checkbox>
                            <Checkbox value="3">grey</Checkbox>
                            <Checkbox value="4">lilac</Checkbox>
                            <Checkbox value="5">pink</Checkbox>
                            <Checkbox value="6">rattan</Checkbox>
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
                      <CheckboxGroup defaultValue="2">
                          <Stack spacing={1} marginLeft={5} direction="column">
                              <Checkbox value="7">black</Checkbox>
                              <span className="filter-info">(common-basic)</span>
                              <Checkbox value="8">black-tattoed</Checkbox>
                              <span className="filter-info">(common-basic)</span>
                              <Checkbox value="9">blue-camouflage</Checkbox>
                              <span className="filter-info">(protection-basic)</span>
                              <Checkbox value="10">brown</Checkbox>
                              <span className="filter-info">(superhero-basic)</span>
                              <Checkbox value="11">brown-cheetah</Checkbox>
                              <span className="filter-info">(common-basic)</span>
                              <Checkbox value="12">brown-tattoed</Checkbox>
                              <span className="filter-info">(animal-wild)</span>
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
              </form>
            </div>
          </div>

          <div className="grid-wrap">
            <div className="grid">
              <GalleryGrid data={data} />
            </div>
            <ButtonCustomShowMore className="btn-showmore">SHOW MORE</ButtonCustomShowMore>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery