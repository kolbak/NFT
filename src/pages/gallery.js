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
  const isBrowser = typeof window !== "undefined"

  const [width, setWidth] = useState(isBrowser && window.innerWidth);
  isBrowser && window.addEventListener("resize", resizeInGallery);
  function resizeInGallery(){
    setWidth(isBrowser && window.innerWidth);
  }

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
                          <span className="__filter-title">SKIN</span>
                          
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                      <CheckboxGroup defaultValue="2">
                          <Stack spacing={1} marginLeft={5} direction="column">
                              <Checkbox value="7">white</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="8">brown</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="9">black</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="10">tattooed</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="11">camouflage</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="12">superphallus</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="13">brown cheetah</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="14">white cheetah</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="15">reptile</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="16">zebra</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="17">dog</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="18">titanium</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="19">devil</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="20">rainbow</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="21">wooden</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="22">zombie</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="23">clown</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="24">pirate tattoo</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="25">solid gold</Checkbox>
                              <span className="filter-info">precious dope</span>
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
                          <span className="__filter-title">MOUTH</span>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                    <CheckboxGroup defaultValue="2">
                          <Stack spacing={1} marginLeft={5} direction="column">
                              <Checkbox value="26">smile</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="27">sad</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="28">braces</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="29">Hollywood smile</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="30">crooked teeth</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="31">bubble gum</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="32">beard and mustache</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="33">mustache</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="34">joint</Checkbox>
                              <span className="filter-info">stoned basic</span>
                              <Checkbox value="35">smoking pipe</Checkbox>
                              <span className="filter-info">stoned basic</span>
                              <Checkbox value="36">masc</Checkbox>
                              <span className="filter-info">protection basic</span>
                              <Checkbox value="37">reptile's mouth</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="38">dark cat's mouth</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="39">light cat's mouth</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="40">zebra’s mouth</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="41">dog’s mouth</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="42">dog’s mouth and bone</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="43">devil’s mouth</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="44">vampire's mouth</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="45">zombie’s mouth</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="46">clown’s nose</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="47">pink pirate’s beard</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="48">pink beard and mustache</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="49">pirate’s beard</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="50">steampunk mouth</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="51">robot’s mouth</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="52">transmitter</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="53">gold smoking pipe</Checkbox>
                              <span className="filter-info">precious dope</span>
                              <Checkbox value="54">rainbow grillz and black lipstick</Checkbox>
                              <span className="filter-info">precious dope</span>
                              <Checkbox value="55">gold grillz and red lipstick</Checkbox>
                              <span className="filter-info">precious dope</span>
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
                          <span className="__filter-title">EYES</span>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                    <CheckboxGroup defaultValue="2">
                          <Stack spacing={1} marginLeft={5} direction="column">
                              <Checkbox value="56">yellow eyes</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="57">cute eyes</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="58">glasses</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="59">3d glasses smile</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="60">ski mask</Checkbox>
                              <span className="filter-info">common basic</span>
                              <Checkbox value="61">anime eyes</Checkbox>
                              <span className="filter-info">stoned basic</span>
                              <Checkbox value="62">enamored eyes</Checkbox>
                              <span className="filter-info">stoned basic</span>
                              <Checkbox value="63">hypnotized eyes</Checkbox>
                              <span className="filter-info">stoned basic</span>
                              <Checkbox value="64">rasta glasses</Checkbox>
                              <span className="filter-info">stoned basic</span>
                              <Checkbox value="65">superphallus mask</Checkbox>
                              <span className="filter-info">superhero basic</span>
                              <Checkbox value="66">dark cat’s eyes</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="67">light cat’s eyes</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="68">cloven hoofed eyes</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="69">reptile’s eyes</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="70">clown’s eyes</Checkbox>
                              <span className="filter-info">halloween wild</span>                            
                              <Checkbox value="71">dog’s mouth</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="72">dog’s mouth and bone</Checkbox>
                              <span className="filter-info">animal wild</span>
                              <Checkbox value="73">devil’s mouth</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="74">vampire's mouth</Checkbox>
                              <span className="filter-info">halloween wild</span>                              
                              <Checkbox value="75">zombie’s mouth</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="76">clown’s nose</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="77">pink pirate’s beard</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="78">pink beard and mustache</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="79">pirate’s beard</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="80">steampunk mouth</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="81">robot’s mouth</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="82">transmitter</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="83">gold smoking pipe</Checkbox>
                              <span className="filter-info">precious dope</span>
                              <Checkbox value="84">rainbow grillz and black lipstick</Checkbox>
                              <span className="filter-info">precious dope</span>
                              <Checkbox value="85">gold grillz and red lipstick</Checkbox>
                              <span className="filter-info">precious dope</span>
                              <Checkbox value="86"> pink pirate's eye patch</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="87"> pirate’s eye patch</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="88"> zombie’s eyes</Checkbox>
                              <span className="filter-info">halloween wild</span>
                              <Checkbox value="89"> lazer glasses</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="90"> cyber glasses</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="91"> steel steampunk glasses</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="92"> robot’s eye</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="93"> sight</Checkbox>
                              <span className="filter-info">cyber wild</span>
                              <Checkbox value="94"> diamond eyes</Checkbox>
                              <span className="filter-info">precious dope</span>
                              <Checkbox value="95"> gold steampunk glasses</Checkbox>
                              <span className="filter-info">precious dope</span>
                              <Checkbox value="96"> ruby glasses</Checkbox>
                              <span className="filter-info">precious dope</span>
                              <Checkbox value="97"> gold monocle</Checkbox>
                              <span className="filter-info">precious dope</span>
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
                          <span className="__filter-title">HEAD</span>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                      <CheckboxGroup defaultValue="2">
                        <Stack spacing={1} marginLeft={5} direction="column">
                            <Checkbox value="98"> open cap</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="99"> phallus cap</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="100"> bandana</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="101"> panama hat</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="102"> winter hat</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="103"> sombrero</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="104"> pink head</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="105"> condom</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="106"> camouflage bandana</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="107"> camouflage cap</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="108"> viking helmet</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="109"> sheriff’s hat</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="110"> rasta hat with locks</Checkbox>
                            <span className="filter-info">stoned basic</span>
                            <Checkbox value="111"> zebra’s ears</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="112"> brown cheetah’s ears</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="113"> reptile’s head</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="114"> white cheetah’s ears</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="115"> dog’s ears</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="116"> halo</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="117"> witch hat</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="118"> brain</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="119"> devil’s horns</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="120"> pirate’s hat</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="121"> clown’s head</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="122"> pink sheriff’s hat</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="123"> buffoon’s hat</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="124"> pink pirate’s hat</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="125"> cyborg’s head</Checkbox>
                            <span className="filter-info">cyber wild</span>
                            <Checkbox value="126"> Spyglass</Checkbox>
                            <span className="filter-info">cyber wild</span>
                            <Checkbox value="127"> gold crown</Checkbox>
                            <span className="filter-info">precious dope</span>
                            <Checkbox value="128"> diamond head</Checkbox>
                            <span className="filter-info">precious dope</span>
                            <Checkbox value="129"> solid gold head</Checkbox>
                            <span className="filter-info">precious dope</span>
                            <Checkbox value="130"> gold piercing</Checkbox>
                            <span className="filter-info">precious dope</span>
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
                          <span className="__filter-title">Accessory</span>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="filters-list" pb={4}>
                    <CheckboxGroup defaultValue="2">
                        <Stack spacing={1} marginLeft={5} direction="column">
                            <Checkbox value="121">marshmallow</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="122">maraca</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="123">Empty</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="124">lgbt flag</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="125">flower</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="126">lgbt flower</Checkbox>
                            <span className="filter-info">common basic</span>
                            <Checkbox value="127">bong</Checkbox>
                            <span className="filter-info">stoned basic</span>
                            <Checkbox value="128">superphallus cape</Checkbox>
                            <span className="filter-info">superhero basic</span>
                            <Checkbox value="129">grenade</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="130">revolver</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="131">uzi</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="132">mace</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="133">sword</Checkbox>
                            <span className="filter-info">protection basic</span>
                            <Checkbox value="134">brown cheetah’s tail</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="135">reptile’s tail</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="136">white cheetah’s tail</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="137">zebra’s tail</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="138">bat’s wings</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="139">dog’s tail</Checkbox>
                            <span className="filter-info">animal wild</span>
                            <Checkbox value="140">angel’s wings</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="141">devil’s tail</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="142">devil’s wings</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="143">magic wand</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="144">pink sword</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="145">pink revolver</Checkbox>
                            <span className="filter-info">halloween wild</span>
                            <Checkbox value="146">jetpack</Checkbox>
                            <span className="filter-info">cyber wild</span>
                            <Checkbox value="147">clamp</Checkbox>
                            <span className="filter-info">cyber wild</span>
                            <Checkbox value="148">diamond stick</Checkbox>
                            <span className="filter-info">precious dope</span>
                            <Checkbox value="149">gold cuban chain with pendant</Checkbox>
                            <span className="filter-info">precious dope</span>
                            <Checkbox value="150">gold cuban chain</Checkbox>
                            <span className="filter-info">precious dope</span>
                            <Checkbox value="151">gold revolver</Checkbox>
                            <span className="filter-info">precious dope</span>
                            <Checkbox value="152">gold mace</Checkbox>
                            <span className="filter-info">precious dope</span>
                            <Checkbox value="153">gold uzi</Checkbox>
                            <span className="filter-info">precious dope</span>
                            <Checkbox value="154">gold grenade</Checkbox>
                            <span className="filter-info">precious dope</span>
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
            <ButtonCustomShowMore className="btn-showmore">SHOW MORE</ButtonCustomShowMore>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery