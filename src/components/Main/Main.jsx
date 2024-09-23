import React from 'react';

import Hero from './Hero/Hero';
import Benefit from './Benefit/Benefit';
import AboutUs from './AboutUs/AboutUs';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import СonstructorBlock from './СonstructorBlock/СonstructorBlock';
import Contacts from './Contacts/Contacts';

export default function Main ({ isLoggedIn }) {

  return (
    <main className="main">
      <Hero />
      <Benefit />
      <AboutUs />
      <Portfolio />
      <Promo />
      <СonstructorBlock
       isLoggedIn={isLoggedIn}
      />
      <Contacts />
    </main>
  )
}