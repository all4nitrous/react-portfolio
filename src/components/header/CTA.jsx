import React from 'react'
import CV from '../../assests/Resume-Nicholas-Richmond.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Download CV</a>
        <a href="#contact">Let's talk</a>
    </div>
  )
}

export default CTA