import React from 'react';
import { Link } from 'react-router-dom';
import grid1 from '../../../images/grid1.jpg';

export default function Portfolio () {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='portfolio__container'>
        <h3 className='portfolio__title'>Наши работы</h3>
        <p className='portfolio__description'>Производим планшеты для любых видов спорта</p>
        <div className='portfolio__background'></div>
        <div className='portfolio__grid'>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="" />
          </div>
          <div className="portfolio__item">
            <img className='portfolio__img' src={grid1} alt="" />
          </div>
        </div>
        <Link className='portfolio__link'>Больше работ</Link>
      </div>
    </section>
  )
}