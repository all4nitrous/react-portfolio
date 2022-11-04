import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
     <h5>What I offer</h5>
     <h2>Services</h2>

<div className="container services_container">
  <article className="service">
    <div className="service_head">
      <h3>
        UI/UX Design
      </h3>
    </div>
  
  <ul className="service_list">
    <li>
      <BiCheck className='service_list-icon'/>
      <p>Research</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Wireframing</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Prototyping</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Testing</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Refining</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Launch</p>
    </li>
 </ul>
  </article>
{/*END OF UI/UX*/}
<article className="service">
    <div className="service_head">
      <h3>
        Web Development
      </h3>
    </div>
  
  <ul className="service_list">
    <li>
      <BiCheck className='service_list-icon'/>
      <p>ReactJS Develpment</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>React Native Development</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Web APP Development</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Node JS Development</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>UI/UX Optimization</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Implementing SEO Practices</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Implementing Design On Mobile Devices</p>
    </li>

 </ul>
  </article>
  {/*END OF WEB CREATION*/}
  <article className="service">
    <div className="service_head">
      <h3>
        Content Creation
      </h3>
    </div>
  
  <ul className="service_list">
    <li>
      <BiCheck className='service_list-icon'/>
      <p>Content Ideation</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Content Planning</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Keyword Research</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Branding</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Copywriting</p>
    </li>

    <li>
      <BiCheck className='service_list-icon'/>
      <p>Design and Develpment</p>
    </li>
</ul>
  </article>
  {/*END OF CONTENT CREATION*/}
</div>
</section>
  )
}

export default Services