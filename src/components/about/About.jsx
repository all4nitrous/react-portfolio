import React from 'react'
import './About.css'
import ME from '../../assests/picture for about.jpg'
import {FaAward} from 'react-icons/fa'
import {BiCertification} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    
     <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="wedding day" />
          </div>
        </div>
     
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1+ Years Developing</small>
          </article>
         
          <article className='about_card'>
            <BiCertification className='about_icon'/>
            <h5>Certifications</h5>
            <small>10+ Earned</small>
          </article>
         
          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>30+ Completed</small>
          </article>
        </div>
        <p>
        My name is Nicholas Richmond, I am a front end developer with experience in BootStrap, HTML, CSS, JavaScript, React.JS, Tailwind, and Node.JS. 
        I also have experience with cloud application systems such as IBM cloud, and AWS.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
     </div>
     </section>
  )
}

export default About