import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OurMenu.css';
import PropTypes from 'prop-types';
import Spinner from '../components/Spinner';
import { DataContext } from '../context/Context';

const OurMenu = ({ showSubscription = true }) => {
  const { categories, loading } = useContext(DataContext);
  // const navigate = useNavigate();
  // const [selectedCategory, setSelectedCategory] = useState('All');

  // const filteredMenu =
  //   selectedCategory === 'All'
  //     ? categories.flatMap((category) => category.items).slice(0, 6)
  //     : categories.find((category) => category.name === selectedCategory)
  //         ?.items || [];

  // const handlerClick = () => {
  //   navigate('../card-menu');
  // };

  const downloadFile = (fileName) => {
    // Simulate file download
    const link = document.createElement('a');
    link.href = `/downloads/${fileName}`;
    link.download = fileName;
    link.click();
  };

  if (loading) return <Spinner />;
  return (
    <>
      <div className="our-menu">
        <div className="menu-sections">
          {/* Menu Section */}
          <div className="menu-section mb-12">
            <h2 className="text-7xl font-cursive text-primary mb-6">Menu</h2>
            <button
              onClick={() => downloadFile('menu.pdf')}
              className="download-button text-white px-6 py-2 rounded"
            >
              Download Menu
            </button>
          </div>

          {/* Drink Section */}
          <div className="menu-section mb-12">
            <h2 className="text-7xl font-cursive text-primary mb-6">Drink</h2>
            <button
              
              onClick={() => downloadFile('drink.pdf')}
              className="download-button text-white px-6 py-2 rounded"
            >
              Download Drink Menu
            </button>
          </div>

          {/* Happy Hour Section */}
          <div className="menu-section mb-12">
            <h2 className="text-7xl font-cursive text-primary mb-6">Happy Hour</h2>
            <button
              onClick={() => downloadFile('happy-hour.pdf')}
              className="download-button text-white px-6 py-2 rounded"
            >
              Download Happy Hour
            </button>
          </div>
        </div>

        
        
        {showSubscription && (
          <div className="our-menu__subscribe mb-33 md:mb-38">
            <h3 className="font-cursive text-6xl text-center text-primary-light mb-9">
              Reservation
            </h3>
            <p className="text-center text-4xl mb-10 md:mb-12 ">
              "Want to have a perfect evening? Reserve your table now!"
            </p>
            <div>
              <input
                className="our-menu__subscribe-input mb-9"
                placeholder="EMAIL"
                type="text"
              />
              <button className="our-menu__subscribe-button bg-primary-light">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

OurMenu.propTypes = {
  showSubscription: PropTypes.bool, // Cambiado de PropTypes.node a PropTypes.bool
};

export default OurMenu;