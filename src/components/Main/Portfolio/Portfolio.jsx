import React from 'react';
import { Link } from 'react-router-dom';
import grid1 from '../../../images/port_grid_1.jpg';
import grid2 from '../../../images/port_grid_2.jpg';
import grid3 from '../../../images/port_grid_3.jpg';
import grid4 from '../../../images/port_grid_4.jpg';
import grid5 from '../../../images/port_grid_5.jpg';
import grid6 from '../../../images/port_grid_6.jpg';
import grid7 from '../../../images/port_grid_7.jpg';
import grid8 from '../../../images/port_grid_8.jpg';
import grid9 from '../../../images/port_grid_9.jpg';

export default function Portfolio () {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='portfolio__container'>
        <h3 className='portfolio__title merriweather'>Наши работы</h3>
        <p className='portfolio__description'>Производим планшеты для любых видов спорта</p>
        <div className='portfolio__background'></div>
        <div className='portfolio__grid'>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="Тактические планшеты" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid2} alt="Тактические планшеты" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid3} alt="Тактические планшеты" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid4} alt="Тактические планшеты" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid5} alt="Тактические планшеты" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid6} alt="Тактические планшеты" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid7} alt="Тактические планшеты" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid8} alt="Тактические планшеты" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid9} alt="Тактические планшеты" />
          </div>
        </div>
        <Link className='portfolio__link'>Больше работ</Link>
      </div>
    </section>
  )
}