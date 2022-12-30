import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/web preview-1.png'
import IMG2 from '../../assests/web preview-2.png'
import IMG3 from '../../assests/web preview-3.png'
import IMG4 from '../../assests/web preview-4.png'

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
          <div className="portfolio_item-image"><img src={IMG1} /></div>
          <h3>Tinhtattoostudio.com</h3>
<div className="portfolio_item-cta">
<a href="https://github.com/all4nitrous/Anh-Tinh-website" className='btn' target="_blank">Github</a>
          <a href="https://tinhtattoostudio.com" className='btn btn-primary' target="_blank">Live Website</a>
</div>
          
        </SwiperSlide>

        <SwiperSlide className='portfolio_item'>
          <div className="portfolio_item-image"><img src={IMG2}/></div>
          <h3>Final Vizualization Project</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/all4nitrous/Final-Vis-project_david" className='btn' target="_blank">Github</a>
          <a href="https://all4nitrous.github.io/Final-Vis-project_david/" className='btn btn-primary' target="_blank">Live Demo</a> 
          </div>
          
        </SwiperSlide>

        <SwiperSlide className='portfolio_item'>
          <div className="portfolio_item-image"><img src={IMG3}/></div>
          <h3>Vietnamese Quiz</h3>
<div className="portfolio_item-cta"><a href="https://github.com/all4nitrous/Vietnamese-quiz" className='btn' target="_blank">Github</a>
          <a href="https://all4nitrous.github.io/Vietnamese-quiz/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </SwiperSlide>


        <SwiperSlide className='portfolio_item'>
          <div className="portfolio_item-image"><img src={IMG4} /></div>
          <h3>Portfolio for Ralph Waldo Emerson</h3>
        <div className="portfolio_item-cta"><a href="https://github.com/all4nitrous/Emerson-Project" className='btn' target="_blank">Github</a>
          <a href="http://ralphwaldoemerson.online/" className='btn btn-primary' target="_blank">Live Website</a>
          </div>
          </SwiperSlide>
 </Swiper>
    </section>
  )
}

export default Portfolio