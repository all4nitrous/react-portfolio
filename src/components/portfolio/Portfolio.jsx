import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/calc project.png'
import IMG2 from '../../assests/analog clock.png'
import IMG3 from '../../assests/loading animation.png'
import IMG4 from '../../assests/interest calculator.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

      <Swiper className="container portfolio_container" modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className='portfolio_item'>
          <div className="portfolio_item-image"><img src={IMG1}  /></div>
          <h3>Glassmorphic Calculator</h3>
<div className="portfolio_item-cta">
<a href="https://github.com/all4nitrous/calculator-project" className='btn' target="_blank">Github</a>
          <a href="https://all4nitrous.github.io/calculator-project/" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
          
        </SwiperSlide>

        <SwiperSlide className='portfolio_item'>
          <div className="portfolio_item-image"><img src={IMG2}/></div>
          <h3>Analog Clock</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/all4nitrous/Analog-clock" className='btn' target="_blank">Github</a>
          <a href="https://all4nitrous.github.io/Analog-clock/" className='btn btn-primary' target="_blank">Live Demo</a> 
          </div>
          
        </SwiperSlide>

        <SwiperSlide className='portfolio_item'>
          <div className="portfolio_item-image"><img src={IMG3}/></div>
          <h3>Loading Animation</h3>
<div className="portfolio_item-cta"><a href="https://github.com/all4nitrous/Loading-animation--1" className='btn' target="_blank">Github</a>
          <a href=" https://all4nitrous.github.io/Loading-animation--1/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </SwiperSlide>


        <SwiperSlide className='portfolio_item'>
          <div className="portfolio_item-image"><img src={IMG4}/></div>
          <h3>Interest Calculator</h3>
        <div className="portfolio_item-cta"><a href="https://github.com/all4nitrous/vftvk-Simple-Interest-Calculator" className='btn' target="_blank">Github</a>
          <a href="https://all4nitrous.github.io/vftvk-Simple-Interest-Calculator/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </SwiperSlide>
 </Swiper>
    </section>
  )
}

export default Portfolio