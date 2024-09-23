import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation/Navigation';

export default function Header ({ isLoggedIn }) {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isScrollableHeader, setIsScrollableHeader] = useState(location.pathname === '/'); // Определяем, находимся ли мы на главной странице

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrollableHeader) return; // Не применять прокрутку, если находимся не на главной странице

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
        document.getElementById("header").style.top = "-101px"; // Устанавливаем смещение на 101px
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isScrollableHeader]); // Добавили isScrollableHeader в зависимости

  useEffect(() => {
    // Устанавливаем isScrollableHeader, когда меняется location.pathname
    setIsScrollableHeader(location.pathname === '/');
  }, [location.pathname]); // Срабатывает только при изменении пути

  return (
    <header className={`header ${!isLoggedIn && 'header__main'}`} id="header">
      <div className='header__container'>
        <Link to="https://vk.com/coachid_boards" target='_blank' className="header__logo link" />
        <Navigation isLoggedIn={isLoggedIn} currentSection={currentSection} />
        {!isLoggedIn && <Link to='/signin' className="header__login-button link">Войти</Link>}
      </div>
    </header>
  );
}
