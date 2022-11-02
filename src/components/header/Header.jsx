import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/size test.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nicholas Richmond</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
      <div className="me">
        <img src={ME} alt="picture of Nicholas" />
      </div>

      <a href="#contact" class='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header