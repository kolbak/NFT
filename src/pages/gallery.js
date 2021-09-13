import React, { useState, useEffect, useRef } from "react"
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
  Icon,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryGrid from "../components/gallery_grid"
import characterEx from "../images/character-ex.png"
import "./gallery.scss"

const Gallery = () => {
  const isBrowser = typeof window !== "undefined"

  const [width, setWidth] = useState(isBrowser && window.innerWidth)
  isBrowser && window.addEventListener("resize", resizeInGallery)
  function resizeInGallery() {
    setWidth(isBrowser && window.innerWidth)
  }

  //? dummy data
  let arrData = []
  for (let i = arrData.length; i < 6; i++) {
    arrData.push({
      name: `Character ${i + 1}`,
      id: i + 1,
      src: characterEx,
      filters: {
        bday: new Intl.DateTimeFormat("en-US").format(new Date()),
      },
    })
  }
  const [data, setData] = useState(arrData);

  const btnShowMore = useRef(null)
  function addCharacter() {
    btnShowMore.current.setAttribute("disabled", true)
    let arrNewData = []
    for (let i = data.length; i < data.length + 6; i++) {
      arrNewData.push({
        name: `Character ${i + 1}`,
        id: i + 1,
        src: characterEx,
        filters: {
          bday: new Intl.DateTimeFormat("en-US").format(new Date()),
        },
      })
    }
    setData([...data, ...arrNewData]);
    btnShowMore.current.removeAttribute("disabled");
  }

  //? аккордион
  const accordionItemStyle = {
    border: "none",
    outline: "none",
    bg: "#555555",
    mb: 2,

    borderRadius: `${25}px`,
  }
  const accordionButtonStyle = {
    p: "5px",
  }
  const accordionButtonStyle_focus = {
    border: "none",
    outline: "none",
    boxShadow: "none",
  }

  function toggle() {
    let filtersList = document.querySelector(".filters-wrap")
    filtersList.classList.toggle("opened")
  }
  const filtersList = [
    [
      { name: "white", trait: "common-basic", filter: "skin" },
      { name: "brown", trait: "common-basic", filter: "skin" },
      { name: "black", trait: "common-basic", filter: "skin" },
      { name: "tattooed ", trait: "common-basic", filter: "skin" },
      { name: "camouflage", trait: "protection-basic", filter: "skin" },
      { name: "superphallus", trait: "superhero-basic", filter: "skin" },
      { name: "brown-cheetah", trait: "animal-wild", filter: "skin" },
      { name: "white-cheetah", trait: "animal-wild", filter: "skin" },
      { name: "reptile", trait: "animal-wild", filter: "skin" },
      { name: "zebra", trait: "animal-wild", filter: "skin" },
      { name: "dog", trait: "animal-wild", filter: "skin" },
      { name: "titanium", trait: "cyber-wild", filter: "skin" },
      { name: "devil", trait: "halloween-wild", filter: "skin" },
      { name: "rainbow", trait: "halloween-wild", filter: "skin" },
      { name: "wooden", trait: "halloween-wild", filter: "skin" },
      { name: "zombie", trait: "halloween-wild", filter: "skin" },
      { name: "clown", trait: "halloween-wild", filter: "skin" },
      { name: "pirate-tattoo", trait: "halloween-wild", filter: "skin" },
      { name: "solid-gold", trait: "precious-dope", filter: "skin" },
    ],

    [
      { name: "smile", trait: "common-basic", filter: "mouth" },
      { name: "sad", trait: "common-basic", filter: "mouth" },
      { name: "braces", trait: "common-basic", filter: "mouth" },
      { name: "Hollywood-smile", trait: "common-basic", filter: "mouth" },
      { name: "crooked-teeth", trait: "common-basic", filter: "mouth" },
      { name: "bubble-gum", trait: "common-basic", filter: "mouth" },
      { name: "beard-and-mustache", trait: "common-basic", filter: "mouth" },
      { name: "mustache", trait: "common-basic", filter: "mouth" },
      { name: "joint", trait: "stoned-basic", filter: "mouth" },
      { name: "smoking-pipe", trait: "stoned-basic", filter: "mouth" },
      { name: "mask", trait: "protection-basic", filter: "mouth" },
      { name: "reptile’s-mouth", trait: "animal-wild", filter: "mouth" },
      { name: "dark-cat’s-mouth", trait: "animal-wild", filter: "mouth" },
      { name: "light-cat’s-mouth", trait: "animal-wild", filter: "mouth" },
      { name: "zebra’s-mouth", trait: "animal-wild", filter: "mouth" },
      { name: "dog’s-mouth", trait: "animal-wild", filter: "mouth" },
      { name: "dog’s-mouth-and-bone", trait: "animal-wild", filter: "mouth" },
      { name: "devil’s-mouth", trait: "halloween-wild", filter: "mouth" },
      { name: "vampire's-mouth", trait: "halloween-wild", filter: "mouth" },
      { name: "zombie’s-mouth", trait: "halloween-wild", filter: "mouth" },
      { name: "clown’s-nose", trait: "halloween-wild", filter: "mouth" },
      { name: "pink-pirate’s-beard", trait: "halloween-wild", filter: "mouth" },
      {
        name: "pink-beard-and-mustache",
        trait: "halloween-wild",
        filter: "mouth",
      },
      { name: "pirate’s-beard", trait: "halloween-wild", filter: "mouth" },
      { name: "steampunk-mouth", trait: "cyber-wild", filter: "mouth" },
      { name: "robot’s-mouth", trait: "cyber-wild", filter: "mouth" },
      { name: "transmitter", trait: "cyber-wild", filter: "mouth" },
      { name: "gold-smoking pipe", trait: "precious-dope", filter: "mouth" },
      {
        name: "rainbow-grillz-and-black-lipstick",
        trait: "precious-dope",
        filter: "mouth",
      },
      {
        name: "gold-grillz-and-red-lipstick",
        trait: "precious-dope",
        filter: "mouth",
      },
    ],

    [
      { name: "yellow-eyes", trait: "common-basic", filter: "eyes" },
      { name: "cute-eyes", trait: "common-basic", filter: "eyes" },
      { name: "glasses", trait: "common-basic", filter: "eyes" },
      { name: "3d-glasses", trait: "common-basic", filter: "eyes" },
      { name: "ski-mask", trait: "common-basic", filter: "eyes" },
      { name: "anime-eyes", trait: "stoned-basic", filter: "eyes" },
      { name: "enamored-eyes", trait: "stoned-basic", filter: "eyes" },
      { name: "hypnotized-eyes", trait: "stoned-basic", filter: "eyes" },
      { name: "rasta-glasses", trait: "stoned-basic", filter: "eyes" },
      { name: "superphallus-mask", trait: "superhero-basic", filter: "eyes" },
      { name: "dark-cat’s-eyes", trait: "animal-wild", filter: "eyes" },
      { name: "light-cat’s-eyes", trait: "animal-wild", filter: "eyes" },
      { name: "cloven-hoofed-eyes", trait: "animal-wild", filter: "eyes" },
      { name: "reptile’s-eyes", trait: "animal-wild", filter: "eyes" },
      { name: "clown’s-eyes", trait: "halloween-wild", filter: "eyes" },
      {
        name: "pink-pirate's-eye-patch",
        trait: "halloween-wild",
        filter: "eyes",
      },
      { name: "pirate’s-eye-patch", trait: "halloween-wild", filter: "eyes" },
      { name: "zombie’s-eyes", trait: "halloween-wild", filter: "eyes" },
      { name: "lazer-glasses", trait: "cyber-wild", filter: "eyes" },
      { name: "cyber-glasses", trait: "cyber-wild", filter: "eyes" },
      { name: "steel-steampunk-glasses", trait: "cyber-wild", filter: "eyes" },
      { name: "robot’s-eye", trait: "cyber-wild", filter: "eyes" },
      { name: "sight", trait: "cyber-wild", filter: "eyes" },
      { name: "diamond-eyes", trait: "precious-dope", filter: "eyes" },
      {
        name: "gold-steampunk-glasses",
        trait: "precious-dope",
        filter: "eyes",
      },
      { name: "ruby-glasses", trait: "precious-dope", filter: "eyes" },
      { name: "gold-monocle", trait: "precious-dope", filter: "eyes" },
    ],

    [
      { name: "open-cap", trait: "common-basic", filter: "head" },
      { name: "phallus-cap", trait: "common-basic", filter: "head" },
      { name: "bandana", trait: "common-basic", filter: "head" },
      { name: "panama-hat", trait: "common-basic", filter: "head" },
      { name: "winter-hat", trait: "common-basic", filter: "head" },
      { name: "sombrero", trait: "common-basic", filter: "head" },
      { name: "pink-head", trait: "common-basic", filter: "head" },
      { name: "condom", trait: "protection-basic", filter: "head" },
      { name: "camouflage-bandana", trait: "protection-basic", filter: "head" },
      { name: "camouflage-cap", trait: "protection-basic", filter: "head" },
      { name: "viking-helmet", trait: "protection-basic", filter: "head" },
      { name: "sheriff’s-hat", trait: "protection-basic", filter: "head" },
      { name: "rasta-hat-with-locks", trait: "stoned-basic", filter: "head" },
      { name: "zebra’s-ears", trait: "animal-wild", filter: "head" },
      { name: "brown-cheetah’s-ears", trait: "animal-wild", filter: "head" },
      { name: "reptile’s-head", trait: "animal-wild", filter: "head" },
      { name: "white-cheetah’s-ears", trait: "animal-wild", filter: "head" },
      { name: "dog’s-ears", trait: "animal-wild", filter: "head" },
      { name: "halo", trait: "halloween-wild", filter: "head" },
      { name: "witch-hat", trait: "halloween-wild", filter: "head" },
      { name: "brain", trait: "halloween-wild", filter: "head" },
      { name: "devil’s-horns", trait: "halloween-wild", filter: "head" },
      { name: "pirate’s-hat", trait: "halloween-wild", filter: "head" },
      { name: "clown’s-head", trait: "halloween-wild", filter: "head" },
      { name: "pink-sheriff’s-hat", trait: "halloween-wild", filter: "head" },
      { name: "buffoon’s-hat", trait: "halloween-wild", filter: "head" },
      { name: "pink-pirate’s-hat", trait: "halloween-wild", filter: "head" },
      { name: "cyborg’s-head", trait: "cyber-wild", filter: "head" },
      { name: "spyglass", trait: "cyber-wild", filter: "head" },
      { name: "gold-crown", trait: "precious-dope", filter: "head" },
      { name: "diamond-head", trait: "precious-dope", filter: "head" },
      { name: "solid-gold-head", trait: "precious-dope", filter: "head" },
      { name: "gold-piercing", trait: "precious-dope", filter: "head" },
    ],

    [
      { name: "marshmallow", trait: "common-basic", filter: "accessory" },
      { name: "maraca", trait: "common-basic", filter: "accessory" },
      { name: "empty", trait: "common-Basic", filter: "accessory" },
      { name: "lgbt-flag", trait: "common-basic", filter: "accessory" },
      { name: "flower", trait: "common-basic", filter: "accessory" },
      { name: "lgbt-flower", trait: "common-basic", filter: "accessory" },
      { name: "bong", trait: "stoned-basic", filter: "accessory" },
      {
        name: "superphallus-cape",
        trait: "superhero-basic",
        filter: "accessory",
      },
      { name: "grenade", trait: "protection-basic", filter: "accessory" },
      { name: "revolver", trait: "protection-basic", filter: "accessory" },
      { name: "uzi", trait: "protection-basic", filter: "accessory" },
      { name: "mace", trait: "protection-basic", filter: "accessory" },
      { name: "sword", trait: "protection-basic", filter: "accessory" },
      {
        name: "brown-cheetah’s-tail",
        trait: "animal-wild",
        filter: "accessory",
      },
      { name: "reptile’s-tail", trait: "animal-wild", filter: "accessory" },
      {
        name: "white-cheetah’s-tail",
        trait: "animal-wild",
        filter: "accessory",
      },
      { name: "zebra’s-tail", trait: "animal-wild", filter: "accessory" },
      { name: "bat’s-wings", trait: "animal-wild", filter: "accessory" },
      { name: "dog’s-tail", trait: "animal-wild", filter: "accessory" },
      { name: "angel’s-wings", trait: "halloween-wild", filter: "accessory" },
      { name: "devil’s-tail", trait: "halloween-wild", filter: "accessory" },
      { name: "devil’s-wings", trait: "halloween-wild", filter: "accessory" },
      { name: "magic-wand", trait: "halloween-wild", filter: "accessory" },
      { name: "pink-sword", trait: "halloween-wild", filter: "accessory" },
      { name: "pink-revolver", trait: "halloween-wild", filter: "accessory" },
      { name: "jetpack", trait: "cyber-wild", filter: "accessory" },
      { name: "clamp", trait: "cyber-wild", filter: "accessory" },
      { name: "diamond-stick", trait: "precious-dope", filter: "accessory" },
      {
        name: "gold-cuban-chain-with-pendant",
        trait: "precious-dope",
        filter: "accessory",
      },
      { name: "gold-cuban-chain", trait: "precious-dope", filter: "accessory" },
      { name: "gold-revolver", trait: "precious-dope", filter: "accessory" },
      { name: "gold-mace", trait: "precious-dope", filter: "accessory" },
      { name: "gold-uzi", trait: "precious-dope", filter: "accessory" },
      { name: "gold-grenade", trait: "precious-dope", filter: "accessory" },
    ],
  ]
  function filterMaker(filtersList, number) {
    return filtersList[number].map((item, i) => {
      return (
        <>
          <Checkbox value={`${item.filter.replace(/-/g, " ")}-${i}`}>
            {item.name.replace(/-/g, " ")}
          </Checkbox>
          <span className="filter-info">{item.trait.replace(/-/g, " ")}</span>
        </>
      )
    })
  }
  let skinArr = filterMaker(filtersList, 0)
  let mouthArr = filterMaker(filtersList, 1)
  let eyesArr = filterMaker(filtersList, 2)
  let headArr = filterMaker(filtersList, 3)
  let accessoryArr = filterMaker(filtersList, 4)

  return (
    <Layout>
      <Seo title="Gallery" />
      <div className="gen-wrap gallery-wrap">
        {width > 850 ? (
          <>
            <h2 className="filterH2">GALLERY</h2>
          </>
        ) : (
          <>
            <button className="toggle-button" onClick={toggle}>
              <h2 className="filterH2">
                GALLERY<Icon as={ChevronDownIcon}></Icon>
              </h2>
            </button>
          </>
        )}
        <div className="gallery-content">
          <div className="filters-wrap">
            <div className="filters">
              <form>
                <Accordion allowMultiple allowToggle>
                  <AccordionItem
                    className="filter-container"
                    className="filter-container"
                    border={accordionItemStyle.border}
                    bg={accordionItemStyle.bg}
                    outline={accordionItemStyle.outline}
                    mb={accordionItemStyle.mb}
                    borderRadius={accordionItemStyle.borderRadius}
                  >
                    <h2>
                      <AccordionButton
                        paddingY={accordionButtonStyle.p}
                        _focus={accordionButtonStyle_focus}
                      >
                        <Box flex="1" textAlign="left">
                          <span className="__filter-title">
                            BACKGROUND COLOR
                          </span>
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
                  <AccordionItem
                    className="filter-container"
                    border={accordionItemStyle.border}
                    bg={accordionItemStyle.bg}
                    outline={accordionItemStyle.outline}
                    mb={accordionItemStyle.mb}
                    borderRadius={accordionItemStyle.borderRadius}
                  >
                    <h2>
                      <AccordionButton
                        paddingY={accordionButtonStyle.p}
                        _focus={accordionButtonStyle_focus}
                      >
                        <Box flex="1" textAlign="left">
                          <span className="__filter-title">SKIN</span>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                      <CheckboxGroup defaultValue="2">
                        <Stack spacing={1} marginLeft={5} direction="column">
                          {skinArr}
                        </Stack>
                      </CheckboxGroup>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem
                    className="filter-container"
                    border={accordionItemStyle.border}
                    bg={accordionItemStyle.bg}
                    outline={accordionItemStyle.outline}
                    mb={accordionItemStyle.mb}
                    borderRadius={accordionItemStyle.borderRadius}
                  >
                    <h2>
                      <AccordionButton
                        paddingY={accordionButtonStyle.p}
                        _focus={accordionButtonStyle_focus}
                      >
                        <Box flex="1" textAlign="left">
                          <span className="__filter-title">MOUTH</span>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                      <CheckboxGroup defaultValue="2">
                        <Stack spacing={1} marginLeft={5} direction="column">
                          {mouthArr}
                        </Stack>
                      </CheckboxGroup>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem
                    className="filter-container"
                    border={accordionItemStyle.border}
                    bg={accordionItemStyle.bg}
                    outline={accordionItemStyle.outline}
                    mb={accordionItemStyle.mb}
                    borderRadius={accordionItemStyle.borderRadius}
                  >
                    <h2>
                      <AccordionButton
                        paddingY={accordionButtonStyle.p}
                        _focus={accordionButtonStyle_focus}
                      >
                        <Box flex="1" textAlign="left">
                          <span className="__filter-title">EYES</span>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                      <CheckboxGroup defaultValue="2">
                        <Stack spacing={1} marginLeft={5} direction="column">
                          {eyesArr}
                        </Stack>
                      </CheckboxGroup>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem
                    className="filter-container"
                    border={accordionItemStyle.border}
                    bg={accordionItemStyle.bg}
                    outline={accordionItemStyle.outline}
                    mb={accordionItemStyle.mb}
                    borderRadius={accordionItemStyle.borderRadius}
                  >
                    <h2>
                      <AccordionButton
                        paddingY={accordionButtonStyle.p}
                        _focus={accordionButtonStyle_focus}
                      >
                        <Box flex="1" textAlign="left">
                          <span className="__filter-title">HEAD</span>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                      <CheckboxGroup defaultValue="2">
                        <Stack spacing={1} marginLeft={5} direction="column">
                          {headArr}
                        </Stack>
                      </CheckboxGroup>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem
                    className="filter-container"
                    border={accordionItemStyle.border}
                    bg={accordionItemStyle.bg}
                    outline={accordionItemStyle.outline}
                    mb={accordionItemStyle.mb}
                    borderRadius={accordionItemStyle.borderRadius}
                  >
                    <h2>
                      <AccordionButton
                        paddingY={accordionButtonStyle.p}
                        _focus={accordionButtonStyle_focus}
                      >
                        <Box flex="1" textAlign="left">
                          <span className="__filter-title">Accessory</span>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                      <CheckboxGroup defaultValue="2">
                        <Stack spacing={1} marginLeft={5} direction="column">
                          {accessoryArr}
                        </Stack>
                      </CheckboxGroup>
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
            <button
              onClick={addCharacter}
              className="btn-showmore"
              ref={btnShowMore}
            >
              SHOW MORE
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery
