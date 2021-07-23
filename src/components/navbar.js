import * as React from "react"
import { Link } from "gatsby"
import { Button } from "@chakra-ui/react"

import './navbar.scss'


const Navbar = () => (
  <nav className="navbar-wrap">
    <Button colorScheme="purple"><Link className="link" to="/"><span>Главная</span></Link></Button>
    <Button colorScheme="purple"><Link className="link" to="/connect"><span>Кошелёк</span></Link></Button>
    <Button colorScheme="purple"><Link className="link" to="/catalog"><span>Каталог</span></Link></Button>
    <Button colorScheme="purple"><Link className="link" to="/purchases"><span>Покупки</span></Link></Button>
    <Button colorScheme="purple"><Link className="link" to="/roadmap"><span>Карта</span></Link></Button>
    <Button colorScheme="purple"><Link className="link" to="/FAQ"><span>FAQ</span></Link></Button>
    <Button colorScheme="purple"><Link className="link" to="/user_account" ><span>ЛК</span></Link></Button>
  </nav>
)

export default Navbar