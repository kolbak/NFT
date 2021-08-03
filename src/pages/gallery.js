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
  Radio,
  RadioGroup,
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
  function animate(_e) {
    let mouseX = 0;
    let mouseY = 0;

    let target, label;
    target = _e.target;

    let coords = target.getBoundingClientRect();
    mouseX = _e.clientX - coords.left - coords.width / 2;
    mouseY = _e.clientY - coords.top - coords.height / 2;

    let mousePX = mouseX / coords.width;
    let mousePY = mouseY / coords.height;

    let rX = mousePX * 15;
    let rY = mousePY * -15;

    let tX = mousePX * 20;
    let tY = mousePY * 20;

    label = document.querySelector(`#label-${_e.target.getAttribute('id')}`);
    label.style.transform = `translate(${tX}px, ${tY}px) rotateY(${rX}deg) rotateX(${rY}deg)`;
    target.style.transform = `translate(${tX}px, ${tY}px) rotateY(${rX}deg) rotateX(${rY}deg)`;

    target.onmouseleave = () => {
      label.style.transition = '.6s';
      target.style.transition = '.6s';

      setTimeout(() => {
        label.style.transform = `translate(${0}px, ${0}px) rotateY(${0}deg) rotateX(${0}deg)`;
        target.style.transform = `translate(${0}px, ${0}px) rotateY(${0}deg) rotateX(${0}deg)`;

        setTimeout(() => {
          label.style.transition = '0s';
          target.style.transition = '0s';
        }, 100)
      }, 300)
    }
  }

  //? dummy data
  let arrData = [];
  // function addData() {
    for (let i = 0; i < 6; i++) {
      arrData.push({
        name: 'Character №' + i,
        id: `${i}-${Math.floor(Math.random())}_${Math.floor(Math.random())}`,
        src: [anakin, wizard][Math.floor(Math.random() * 2)],
      })
    }
  //   console.log('arrData :>> ', arrData.length);
  // }
  // addData();
  const [data, setData] = useState(arrData);

  let grid = [];
  // function createGrid(_data) {
    for (let i = 0, l = data.length; i < l; i++) {
      grid.push(
        <div className="char-card" key={i}>
          <div className="char-body">
            <figure className="front">
              <a className="char-link">
                <span id={'label-char-' + data[i].id}>{data[i].name}</span>
                <img id={'char-' + data[i].id} onMouseMove={animate} src={data[i].src} alt={'Character number' + data[i]} />
              </a>
            </figure>
          </div>
        </div>
      )
    }
  // }
  // createGrid(data);

  // function showMoreData() {
  //   addData();
  //   setData(arrData);
  // }

  //? аккордион
  const accordionItemStyle = {
    border: 'none',
    outline: 'none',
    bg: '#555555',
    mb: 2,
    borderRadius: `${25}px`,
  }
  const accordionButtonStyle_focus = {
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
  }
  const BoxStyle = {
    color: '#ababab',
    fontWeight: 'bold',
  }

  //? кнопка ShowMore
  function ButtonCustomShowMore({ children, className }) {
    return <Box
      className={className}
      // onClick={showMoreData}
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
      <h2 className="breadcrumb">
        <Breadcrumb separator={<ChevronRightIcon color="green.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" color={BoxStyle.color}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/gallery" color={BoxStyle.color}>Gallery</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </h2>
      <div className="gallery-content">
        <div className="filters-wrap">
          <h2 className="filterH2">FILTER</h2>
          <div className="filters">
            <Accordion allowMultiple allowToggle>
              <AccordionItem
                border={accordionItemStyle.border}
                bg={accordionItemStyle.bg}
                outline={accordionItemStyle.outline}
                mb={accordionItemStyle.mb}
                borderRadius={accordionItemStyle.borderRadius}
              >
                <h2>
                  <AccordionButton _focus={accordionButtonStyle_focus}>
                    <Box flex="1" textAlign="left"
                      color={BoxStyle.color}
                      fontWeight={BoxStyle.fontWeight}>
                      BACKGROUND COLOR
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup defaultValue="2">
                    <Stack spacing={1} marginLeft={5} direction="column">
                      <Radio colorScheme="green" value="1">
                        Filter #1
                      </Radio>
                      <Radio colorScheme="green" value="2">
                        Filter #2
                      </Radio>
                      <Radio colorScheme="green" value="3">
                        Filter #3
                      </Radio>
                      <Radio colorScheme="green" value="4">
                        Filter #4
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={accordionItemStyle.border}
                bg={accordionItemStyle.bg}
                outline={accordionItemStyle.outline}
                mb={accordionItemStyle.mb}
                borderRadius={accordionItemStyle.borderRadius}>
                <h2>
                  <AccordionButton _focus={accordionButtonStyle_focus}>
                    <Box flex="1" textAlign="left"
                      color={BoxStyle.color}
                      fontWeight={BoxStyle.fontWeight}>
                      SKIN COLOR
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={accordionItemStyle.border}
                bg={accordionItemStyle.bg}
                outline={accordionItemStyle.outline}
                mb={accordionItemStyle.mb}
                borderRadius={accordionItemStyle.borderRadius}>
                <h2>
                  <AccordionButton _focus={accordionButtonStyle_focus}>
                    <Box flex="1" textAlign="left"
                      color={BoxStyle.color}
                      fontWeight={BoxStyle.fontWeight}>
                      SKIN TYPE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={accordionItemStyle.border}
                bg={accordionItemStyle.bg}
                outline={accordionItemStyle.outline}
                mb={accordionItemStyle.mb}
                borderRadius={accordionItemStyle.borderRadius}>
                <h2>
                  <AccordionButton _focus={accordionButtonStyle_focus}>
                    <Box flex="1" textAlign="left"
                      color={BoxStyle.color}
                      fontWeight={BoxStyle.fontWeight}>
                      HEAD
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={accordionItemStyle.border}
                bg={accordionItemStyle.bg}
                outline={accordionItemStyle.outline}
                mb={accordionItemStyle.mb}
                borderRadius={accordionItemStyle.borderRadius}>
                <h2>
                  <AccordionButton _focus={accordionButtonStyle_focus}>
                    <Box flex="1" textAlign="left"
                      color={BoxStyle.color}
                      fontWeight={BoxStyle.fontWeight}>
                      EYES
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={accordionItemStyle.border}
                bg={accordionItemStyle.bg}
                outline={accordionItemStyle.outline}
                mb={accordionItemStyle.mb}
                borderRadius={accordionItemStyle.borderRadius}>
                <h2>
                  <AccordionButton _focus={accordionButtonStyle_focus}>
                    <Box flex="1" textAlign="left"
                      color={BoxStyle.color}
                      fontWeight={BoxStyle.fontWeight}>
                      MOUTH
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={accordionItemStyle.border}
                bg={accordionItemStyle.bg}
                outline={accordionItemStyle.outline}
                mb={accordionItemStyle.mb}
                borderRadius={accordionItemStyle.borderRadius}>
                <h2>
                  <AccordionButton _focus={accordionButtonStyle_focus}>
                    <Box flex="1" textAlign="left"
                      color={BoxStyle.color}
                      fontWeight={BoxStyle.fontWeight}>
                      EYEWEAR
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={accordionItemStyle.border}
                bg={accordionItemStyle.bg}
                outline={accordionItemStyle.outline}
                mb={accordionItemStyle.mb}
                borderRadius={accordionItemStyle.borderRadius}>
                <h2>
                  <AccordionButton _focus={accordionButtonStyle_focus}>
                    <Box flex="1" textAlign="left"
                      color={BoxStyle.color}
                      fontWeight={BoxStyle.fontWeight}>
                      NECKLACE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={accordionItemStyle.border}
                bg={accordionItemStyle.bg}
                outline={accordionItemStyle.outline}
                mb={accordionItemStyle.mb}
                borderRadius={accordionItemStyle.borderRadius}>
                <h2>
                  <AccordionButton _focus={accordionButtonStyle_focus}>
                    <Box flex="1" textAlign="left"
                      color={BoxStyle.color}
                      fontWeight={BoxStyle.fontWeight}>
                      BACK ITEM
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
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
          <GalleryGrid data={data}/>
          {/* {grid} */}
          <ButtonCustomShowMore className="btn-showmore">SHOW MORE</ButtonCustomShowMore>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery