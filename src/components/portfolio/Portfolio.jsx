import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/calc project.png'
import IMG2 from '../../assests/analog clock.png'
import IMG3 from '../../assests/loading animation.png'
import IMG4 from '../../assests/interest calculator.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio item-image"><img src={IMG1} height="350" width="416"/></div>
          <h3>Glassmorphic Calculator</h3>
<div className="portfolio_item-cta">
<a href="https://github.com/all4nitrous/calculator-project" className='btn' target="_blank">Github</a>
          <a href="https://all4nitrous.github.io/calculator-project/" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
          
        </article>

        <article className='portfolio_item'>
          <div className="portfolio item-image"><img src={IMG2} height="350" width="416"/></div>
          <h3>Analog Clock</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/all4nitrous/Analog-clock" className='btn' target="_blank">Github</a>
          <a href="https://all4nitrous.github.io/Analog-clock/" className='btn btn-primary' target="_blank">Live Demo</a> 
          </div>
          
        </article>

        <article className='portfolio_item'>
          <div className="portfolio item-image"><img src={IMG3} height="350" width="416"/></div>
          <h3>Loading Animation</h3>
<div className="portfolio_item-cta"><a href="https://github.com/all4nitrous/Loading-animation--1" className='btn' target="_blank">Github</a>
          <a href=" https://all4nitrous.github.io/Loading-animation--1/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </article>


        <article className='portfolio_item'>
          <div className="portfolio item-image"><img src={IMG4} height="350" width="416"/></div>
          <h3>Interest Calculator</h3>
        <div className="portfolio_item-cta"><a href="https://github.com/all4nitrous/vftvk-Simple-Interest-Calculator" className='btn' target="_blank">Github</a>
          <a href="https://all4nitrous.github.io/vftvk-Simple-Interest-Calculator/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </article>
 </div>
    </section>
  )
}

export default Portfolio