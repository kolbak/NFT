import * as React from "react"
import { Link } from "gatsby"
import Button from 'react-bootstrap/Button'

import './navbar.scss'

import iconMustache from '../images/icon-mustache.png'

const Navbar = () => (
  <nav className="navbar-wrap">
    <Button><Link className="link" to="/"><span>Главная</span></Link></Button>
    <Button><Link className="link" to="/connect"><span>Кошелёк</span></Link></Button>
    <Button><Link className="link" to="/catalog"><span>Каталог</span></Link></Button>
    <Button><Link className="link" to="/purchases"><span>Покупки</span></Link></Button>
    <Button><Link className="link" to="/roadmap"><span>Карта</span></Link></Button>
    <Button><Link className="link" to="/FAQ"><span>FAQ</span></Link></Button>
    <Button className="icon"><Link to="/user_account" className="link" ><img src={iconMustache} alt="Личный кабинет" /></Link></Button>
  </nav>
)

export default Navbar