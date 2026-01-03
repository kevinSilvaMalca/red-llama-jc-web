import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/logo.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId, path) => {
    closeMenu();

    if (location.pathname === '/home') {
      scrollToSection(sectionId);
    } else {
      navigate(path);
    }
  };

  const goToSubscription = () => {
    var element = document.getElementById('subscription');
    var headerOffset = 250;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const pageTitle = () => {
    switch (location.pathname) {
      case '/home':
        return '';
      case '/our-menu':
        return 'Our Menu';
      case '/card-menu':
        return 'Card Menu';
      case '/contact':
        return 'Contact Us';
      case '/about':
        return 'About Us';
      default:
        return 'The Triple Three';
    }
  };

  const headerClass = () => {
    switch (location.pathname) {
      case '/home':
        return 'header-home';
      // case '/our-menu':
      //   return 'header-our-menu';
      default:
        return 'header-default';
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // if (location.pathname === '/card-menu') return null;

  return (
    <header
      className={`header ${headerClass()} ${
        scrolled ? 'scrolled' : ''
      } flex flex-col`}
    >
      <div className="header-nav flex justify-between items-center">
        <div className="hamburger-menu md:hidden" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-list-item font-cursive font-bold opacity-75 text-[32px] lg:text-[48px]">
              <Link to="/home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-list-item font-cursive font-bold opacity-75 text-[32px] lg:text-[48px]"
              onClick={() => handleNavClick('about', '/about')}
            >
              About
            </li>
            <li
              className="nav-list-item font-cursive font-bold opacity-75 text-[32px] lg:text-[48px]"
              onClick={() => handleNavClick('menu', '/our-menu')}
            >
              Our Menu
            </li>
            <li
              className="nav-list-item font-cursive font-bold opacity-75 text-[32px] lg:text-[48px]"
              onClick={() => handleNavClick('contact', '/contact')}
            >
              Contact
            </li>
          </ul>
        </nav>
        <div className="logo">
          <img src={logo} alt="The Triple Three" className="logo-image" />
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=61565298384026&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-img facebook"
              src={facebook}
              alt="facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/thetriplethree333/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-img instragram"
              src={instagram}
              alt="instagram"
              href="https://www.instagram.com/thetriplethree333/"
            />
          </a>
        </div>
        <button
          className="header-button uppercase text-base/5"
          onClick={() => goToSubscription()}
        >
          Explore
        </button>
      </div>
      <div className="page-title text-center">
        <h1 className="text-4xl md:text-5xl font-arual">{pageTitle()}</h1>
      </div>
    </header>
  );
};

export default Header;
