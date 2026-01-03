import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Layout.css';

const Layout = () => {
  const location = useLocation();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    return () => setFade(false);
  }, [location]);

  return (
    <>
      <Header />
      <main
        className={`main-layout ${
          location.pathname === '/home' ? 'main-layout-home' : ''
        } ${fade ? 'fade-in' : 'fade-out'}`}
      >
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
