import React from 'react';

import Hero from './Hero/Hero';
import Benefit from './Benefit/Benefit';
import AboutUs from './AboutUs/AboutUs';
import Portfolio from './Portfolio/Portfolio';
import Constructor from './Constructor/Constructor';
import Contacts from './Contacts/Contacts';

export default function Main () {

  return (
    <main className="main">
      <Hero />
      <Benefit />
      <AboutUs />
      <Portfolio />
      <Constructor />
      <Contacts />
    </main>
  )
}