import './App.css';
import { Suspense, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import OurMenu from './pages/OurMenu';
import CardMenu from './pages/CardMenu';
import Layout from './layouts/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import DataProvider from './context/Context';
import Spinner from './components/Spinner';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import UnderConstruction from './components/UnderConstruction'
import PropTypes from 'prop-types';

const SITE_UNDER_CONSTRUCTION = true;

const AppRoutes = ({ servicesLoaded }) => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setShowSplash(true);
  }, [location]);

  useEffect(() => {
    if (servicesLoaded) {
      setShowSplash(false);
    }
  }, [servicesLoaded]);

  return showSplash ? (
    <SplashScreen
      onComplete={() => setShowSplash(false)}
      servicesLoaded={servicesLoaded}
    />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-menu" element={<OurMenu />} />
        <Route path="/card-menu" element={<CardMenu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
};

// function App() {
//   const [servicesLoaded, setServicesLoaded] = useState(false);
//   const handleServicesLoaded = () => {
//     console.log('Services Loaded');
//     setServicesLoaded(true);
//   };
//   return (
//     <>
//       <DataProvider onServicesLoaded={handleServicesLoaded}>
//         <Suspense fallback={<Spinner></Spinner>}>
//           <BrowserRouter>
//             <ScrollToTop />
//             <AppRoutes servicesLoaded={servicesLoaded} />
//           </BrowserRouter>
//         </Suspense>
//       </DataProvider>
//       <ScrollToTopButton />
//     </>
//   );
// }

function App() {
  const [servicesLoaded, setServicesLoaded] = useState(false);

  const handleServicesLoaded = () => {
    console.log('Services Loaded');
    setServicesLoaded(true);
  };

  return (
    <>
      <DataProvider onServicesLoaded={handleServicesLoaded}>
        <Suspense fallback={<Spinner />}>
          <BrowserRouter>
            <ScrollToTop />

            {SITE_UNDER_CONSTRUCTION ? (
              <UnderConstruction />
            ) : (
              <AppRoutes servicesLoaded={servicesLoaded} />
            )}
          </BrowserRouter>
        </Suspense>
      </DataProvider>

      <ScrollToTopButton />
    </>
  );
}


AppRoutes.propTypes = {
  servicesLoaded: PropTypes.bool.isRequired,
};

export default App;
