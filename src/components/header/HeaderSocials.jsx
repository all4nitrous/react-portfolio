import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const  HeaderSocials= () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/nicholas-richmond" target= "_blank"><BsLinkedin/></a>
        <a href="https://github.com/all4nitrous" target= "_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/all4nitrous_WebDev/" target= "_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials