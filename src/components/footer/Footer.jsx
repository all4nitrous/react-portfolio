import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Nicholas Richmond</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#porfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer_socials">
        <a href="https://linkedin.com/in/nicholas-richmond" target= "_blank"><BsLinkedin/></a>
        <a href="https://github.com/all4nitrous" target= "_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/all4nitrous_WebDev/" target= "_blank"><BsInstagram/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; nrichmondcoding All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer