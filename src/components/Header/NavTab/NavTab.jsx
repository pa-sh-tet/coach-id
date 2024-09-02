import React, { useEffect, useState } from 'react';

export default function NavTab() {
  const [currentSection, setCurrentSection] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          setCurrentSection(section.id);
        }
      });

      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-70px"; // Устанавливаем смещение на 70px
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const NavLink = ({ href, label, isActive }) => (
    <a className={`nav-tab__link link ${isActive ? 'nav-tab__link_active' : ''}`} href={href}>
      {label}
    </a>
  );

  return (
    <div className='nav-tab'>
      <NavLink href="#benefit" label="Преимущества" isActive={currentSection === 'benefit'} />
      <NavLink href="#about-us" label="О нас" isActive={currentSection === 'about-us'} />
      <NavLink href="#portfolio" label="Портфолио" isActive={currentSection === 'portfolio'} />
      <NavLink href="#constructor" label="Конструктор" isActive={currentSection === 'constructor'} />
      <NavLink href="#contacts" label="Контакты" isActive={currentSection === 'contacts'} />
    </div>
  );
}
