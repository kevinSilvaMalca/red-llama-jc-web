import React, { useEffect, useState } from 'react';
import '../styles/SplashScreen.css';
import logo from '../assets/images/llama.svg';
import PropTypes from 'prop-types';

const SplashScreen = ({ onComplete, servicesLoaded }) => {
  const [loaded, setLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [loadImages, setLoadImages] = useState(false);
  const [loadFonts, setLoadFonts] = useState(false);

  useEffect(() => {
    // Controlar cuando la página ha terminado de cargar
    const handleLoad = () => {
      setLoaded(true);
    };

    // Controlar el tiempo mínimo de 3 segundos
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 3000);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const images = document.images;
    console.log('IMAGES', images);
    let loadedImagesCount = 0;
    const totalImages = images.length;

    const checkAllImagesLoaded = () => {
      if (
        loadedImagesCount === totalImages &&
        document.readyState === 'complete'
      ) {
        setLoadImages(true);
      }
    };

    for (let i = 0; i < totalImages; i++) {
      if (images[i].complete) {
        loadedImagesCount++;
      } else {
        images[i].addEventListener('load', () => {
          loadedImagesCount++;
          checkAllImagesLoaded();
        });
        images[i].addEventListener('error', () => {
          loadedImagesCount++;
          checkAllImagesLoaded();
        });
      }
    }

    if (totalImages === 0 || loadedImagesCount === totalImages) {
      setLoadImages(true);
    }

    document.fonts.ready.then(() => {
      setLoadFonts(true);
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    console.log(
      `servicesLoaded - ${servicesLoaded}/loaded - ${loaded}/minTimePassed - ${minTimePassed}/loadFonts - ${loadFonts}/loadImages - ${loadImages}`,
    );
    if (servicesLoaded && loaded && minTimePassed && loadFonts && loadImages) {
      onComplete();
    }
  }, [
    servicesLoaded,
    loaded,
    minTimePassed,
    onComplete,
    loadFonts,
    loadImages,
  ]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="Company Logo" className="logo-animation" />
    </div>
  );
};
SplashScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
  servicesLoaded: PropTypes.bool.isRequired,
};

export default SplashScreen;
